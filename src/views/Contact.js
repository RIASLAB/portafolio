import PageTitle from '../components/PageTitle';
import ChatBox from '../components/ChatBox';
import ContactForm from '../components/ContactForm';

// Vista de chat de conversación con IA + formulario de contacto.
function Contact() {
  return (
    <section className="section container">
      <PageTitle
        eyebrow="Hablemos"
        title="Chat y contacto"
        subtitle="Pregúntale al asistente de IA sobre mi trabajo o déjame tus datos y te contacto."
      />
      <div className="contact-layout">
        <ChatBox />
        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;
