import { useContext, useEffect, useState } from 'react';
import { FaPaperPlane, FaTrashAlt, FaRobot } from 'react-icons/fa';
import { PortfolioContext } from '../context/PortfolioContext';
import { sendMessageToAI, isDemoMode } from '../services/aiService';
import { IA_CONFIG } from '../config';
import ChatMessage from './ChatMessage';

const SUGERENCIAS = ['¿Qué proyectos ha desarrollado?', '¿Qué tecnologías maneja?', '¿Cómo lo contacto?'];

// Componente para enviar y recibir mensajes del modelo de IA.
// El historial vive en el Context (useContext) y se guarda en localStorage,
// así que se conserva al cambiar de vista o al recargar la página.
function ChatBox() {
  const { chatHistory, addChatMessage, clearChat, projects } = useContext(PortfolioContext);
  const [texto, setTexto] = useState('');
  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState(null);

  // Cada vez que llega un mensaje, se baja el scroll al último (manipulación del DOM).
  useEffect(() => {
    const lista = document.getElementById('chat-mensajes');
    lista.scrollTop = lista.scrollHeight;
  }, [chatHistory, enviando]);

  // Envía un mensaje al modelo y guarda la respuesta (async/await sobre una Promesa).
  async function enviar(contenido) {
    const mensaje = contenido.trim();
    if (mensaje === '' || enviando) return;

    const mensajeUsuario = { role: 'user', text: mensaje };
    addChatMessage(mensajeUsuario);
    setTexto('');
    setEnviando(true);
    setError(null);

    try {
      // Se envía el historial + el mensaje nuevo; el servicio solo usa los últimos N (tokens).
      const respuesta = await sendMessageToAI([...chatHistory, mensajeUsuario], projects);
      addChatMessage({ role: 'assistant', text: respuesta });
    } catch (err) {
      setError(err.message);
    } finally {
      setEnviando(false);
    }
  }

  function handleChange(evento) {
    setTexto(evento.target.value);
  }

  function handleSubmit(evento) {
    evento.preventDefault();
    enviar(texto);
  }

  // Enter envía el mensaje; Shift + Enter hace un salto de línea.
  function handleKeyDown(evento) {
    if (evento.key === 'Enter' && !evento.shiftKey) {
      evento.preventDefault();
      enviar(texto);
    }
  }

  return (
    <section className="card chat">
      <header className="chat__header">
        <div className="chat__title">
          <span className="chat__avatar">
            <FaRobot />
          </span>
          <div>
            <h2>Asistente virtual</h2>
            <p className="muted small">
              <span className={isDemoMode ? 'chat__status chat__status--demo' : 'chat__status'} />
              {isDemoMode ? 'Modo demo (sin API key)' : 'Conectado a Gemini'} · {chatHistory.length} mensajes guardados
            </p>
          </div>
        </div>
        {chatHistory.length > 0 && (
          <button type="button" className="btn btn--ghost btn--small" onClick={clearChat}>
            <FaTrashAlt size={12} /> Borrar historial
          </button>
        )}
      </header>

      <div id="chat-mensajes" className="chat__messages">
        {chatHistory.length === 0 && (
          <div className="chat__empty">
            <p>Hola, pregúntame sobre los proyectos, habilidades o servicios.</p>
            <div className="chat__suggestions">
              {SUGERENCIAS.map((sugerencia) => (
                <button type="button" key={sugerencia} className="chip chip--button" onClick={() => enviar(sugerencia)}>
                  {sugerencia}
                </button>
              ))}
            </div>
          </div>
        )}

        {chatHistory.map((mensaje) => (
          <ChatMessage key={mensaje.id} role={mensaje.role} text={mensaje.text} fecha={mensaje.fecha} />
        ))}

        {enviando && (
          <div className="bubble bubble--assistant bubble--typing">
            <span />
            <span />
            <span />
          </div>
        )}

        {error && <div className="alert alert--error">{error}</div>}
      </div>

      <form className="chat__form" onSubmit={handleSubmit}>
        <textarea
          className="input"
          rows={1}
          placeholder="Escribe tu mensaje…"
          value={texto}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          disabled={enviando}
          maxLength={IA_CONFIG.maxCaracteresMensaje}
        />
        <button className="btn" type="submit" disabled={enviando || texto.trim() === ''} aria-label="Enviar">
          <FaPaperPlane />
        </button>
      </form>
    </section>
  );
}

export default ChatBox;
