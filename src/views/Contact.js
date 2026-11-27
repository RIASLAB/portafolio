import PageTitle from '../components/PageTitle';
import ContactForm from '../components/ContactForm';

// Vista de contacto (el chat con IA se agrega después).
function Contact() {
  return (
    <section className="section container">
      <PageTitle
        eyebrow="Hablemos"
        title="Chat y contacto"
        subtitle="Déjanos tus datos y te contactamos."
      />
      <div className="contact-layout">
        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;
