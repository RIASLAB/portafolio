// Burbuja de un mensaje del chat.
// Props:
//   role  → 'user' (visitante) o 'assistant' (modelo de IA)
//   text  → contenido del mensaje
//   fecha → fecha del mensaje
function ChatMessage(props) {
  const hora = new Date(props.fecha).toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit' });

  return (
    <div className={'bubble bubble--' + props.role}>
      <p className="bubble__text">{props.text}</p>
      <span className="bubble__time">{hora}</span>
    </div>
  );
}

export default ChatMessage;
