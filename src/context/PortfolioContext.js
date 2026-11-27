import { createContext, useEffect, useState } from 'react';
import { fetchProjects } from '../services/projectService';
import { STORAGE_CHAT, STORAGE_CONTACTOS } from '../config';

// ─────────────────────────────────────────────────────────────
// Gestión de estado global con useContext.
//
// Evita pasar props de componente en componente ("prop drilling").
// Comparte con todas las vistas:
//   - vista, navegar            → qué vista se muestra (navbar y botones)
//   - projects, loading, error  → proyectos cargados con fetch
//   - chatHistory               → historial del chat (se guarda en localStorage)
//   - contactos                 → envíos del formulario (se guarda en localStorage)
//
// Uso en cualquier componente:
//   const { projects, navegar } = useContext(PortfolioContext);
// ─────────────────────────────────────────────────────────────

export const PortfolioContext = createContext(null);

// Lee un valor guardado en localStorage (o devuelve el valor inicial).
function leerGuardado(clave, valorInicial) {
  try {
    const guardado = localStorage.getItem(clave);
    return guardado !== null ? JSON.parse(guardado) : valorInicial;
  } catch (error) {
    return valorInicial;
  }
}

function nuevoId() {
  return Date.now() + '-' + Math.random().toString(36).slice(2, 8);
}

export function PortfolioProvider(props) {
  const [vista, setVista] = useState('inicio');
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // El valor inicial se lee de localStorage, así el historial sobrevive a una recarga.
  const [chatHistory, setChatHistory] = useState(() => leerGuardado(STORAGE_CHAT, []));
  const [contactos, setContactos] = useState(() => leerGuardado(STORAGE_CONTACTOS, []));

  // ── Carga de información con useEffect ──
  // Dependencias [] → se ejecuta una sola vez, cuando el componente se monta.
  useEffect(() => {
    let activo = true; // evita actualizar el estado si el componente ya se desmontó

    fetchProjects()
      .then((data) => {
        if (activo) setProjects(data);
      })
      .catch((err) => {
        if (activo) setError(err.message);
      })
      .finally(() => {
        if (activo) setLoading(false);
      });

    // Función de limpieza (ciclo de vida: desmontaje).
    return () => {
      activo = false;
    };
  }, []);

  // ── Guardar en localStorage cada vez que cambian (ciclo de vida: actualización) ──
  useEffect(() => {
    localStorage.setItem(STORAGE_CHAT, JSON.stringify(chatHistory));
  }, [chatHistory]);

  useEffect(() => {
    localStorage.setItem(STORAGE_CONTACTOS, JSON.stringify(contactos));
  }, [contactos]);

  // Cambia de vista y sube al inicio de la página.
  function navegar(nuevaVista) {
    setVista(nuevaVista);
    window.scrollTo(0, 0);
  }

  function addChatMessage(mensaje) {
    const nuevo = { ...mensaje, id: nuevoId(), fecha: new Date().toISOString() };
    // Forma con función (anterior) => nuevo: no se pierden mensajes
    // cuando se agregan dos seguidos (pregunta y respuesta).
    setChatHistory((anterior) => [...anterior, nuevo]);
  }

  function clearChat() {
    setChatHistory([]);
  }

  function addContacto(datos) {
    const nuevo = { ...datos, id: nuevoId(), fecha: new Date().toISOString() };
    setContactos((anterior) => [...anterior, nuevo]);
  }

  const value = {
    vista,
    navegar,
    projects,
    loading,
    error,
    chatHistory,
    addChatMessage,
    clearChat,
    contactos,
    addContacto,
  };

  return <PortfolioContext.Provider value={value}>{props.children}</PortfolioContext.Provider>;
}
