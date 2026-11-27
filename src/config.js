// ─────────────────────────────────────────────────────────────
// Configuración central de la aplicación.
// Cambiar un valor aquí lo cambia en todo el proyecto.
// ─────────────────────────────────────────────────────────────

// Vistas de la aplicación. El "id" se guarda en el estado (useState) de la vista actual.
export const VISTAS = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'stack', label: 'Stack y estudios' },
  { id: 'contacto', label: 'Chat y contacto' },
  { id: 'propuesta', label: 'Propuesta de valor' },
];

// Vista de proyectos.
export const PROYECTOS_POR_PAGINA = 10;

// Claves de localStorage.
export const STORAGE_CHAT = 'portafolio:chat';
export const STORAGE_CONTACTOS = 'portafolio:contactos';

// Conexión con el modelo de IA (Google Gemini).
export const IA_CONFIG = {
  apiKey: process.env.REACT_APP_GEMINI_API_KEY,
  // Gemini 3.1 Flash-Lite: modelo rápido y económico, pensado para tareas sencillas y de alto volumen.
  modelo: process.env.REACT_APP_GEMINI_MODEL || 'gemini-3.1-flash-lite',
  // Gestión de la ventana de contexto: solo se envían los últimos N mensajes.
  // Así se gastan menos tokens de entrada y se evita el efecto "Lost in the Middle".
  maxHistorial: 6,
  // Los tokens de salida suelen costar más que los de entrada: se limita la respuesta.
  maxTokensRespuesta: 350,
  // Límite de caracteres por mensaje del visitante (controla los tokens de entrada).
  maxCaracteresMensaje: 500,
  // Temperatura: más baja = más determinista; más alta = más aleatoriedad y creatividad.
  temperatura: 0.5,
};

// Formulario de contacto.
export const LIMITES_FORMULARIO = {
  maxNombre: 20,
  minTelefono: 7,
  maxTelefono: 15,
  maxDescripcion: 500,
};
