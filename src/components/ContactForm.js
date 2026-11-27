import { useContext, useState } from 'react';
import { FaCheckCircle, FaPaperPlane } from 'react-icons/fa';
import { PortfolioContext } from '../context/PortfolioContext';
import { esEntradaPermitida, esValido, validarContacto } from '../utils/validaciones';
import { LIMITES_FORMULARIO } from '../config';
import Input from './Input';

const FORM_INICIAL = { nombre: '', apellidos: '', correo: '', telefono: '', descripcion: '' };

// Formulario de contacto.
// Reglas (ver utils/validaciones.js):
//   - Nombre y apellidos: solo letras, máximo 20 caracteres.
//   - Correo: formato válido.
//   - Teléfono: solo números.
//   - Todos los campos son obligatorios.
//
// Seguridad: estos datos personales NUNCA se envían al modelo de IA
// (se evita la fuga de datos / data leakage vista en clase).
function ContactForm() {
  const { addContacto } = useContext(PortfolioContext);
  const [form, setForm] = useState(FORM_INICIAL); // un objeto con todos los campos
  const [errores, setErrores] = useState({});
  const [nombreEnviado, setNombreEnviado] = useState(''); // nombre de quien envió

  // Un solo manejador para todos los campos, usando el atributo "name" del input.
  function handleChange(evento) {
    const { name, value } = evento.target;

    // Bloquea mientras se escribe lo que no se permite (números en el nombre, letras en el teléfono...).
    if (!esEntradaPermitida(name, value)) return;

    setForm({ ...form, [name]: value });

    // Si el campo tenía error, se borra apenas el usuario lo corrige.
    if (errores[name]) setErrores({ ...errores, [name]: undefined });
  }

  function handleSubmit(evento) {
    evento.preventDefault();

    const nuevosErrores = validarContacto(form);
    setErrores(nuevosErrores);

    if (!esValido(nuevosErrores)) {
      // Lleva el cursor al primer campo con error (manipulación del DOM).
      const primerCampo = Object.keys(nuevosErrores)[0];
      document.getElementById('campo-' + primerCampo).focus();
      return;
    }

    addContacto({ ...form, correo: form.correo.trim() });
    setNombreEnviado(form.nombre.trim());
    setForm(FORM_INICIAL);
  }

  // Renderizado condicional: si ya se envió, se muestra el mensaje de confirmación.
  if (nombreEnviado !== '') {
    return (
      <section className="card contact contact--done">
        <FaCheckCircle className="contact__success-icon" />
        <h2>¡Gracias, {nombreEnviado}!</h2>
        <p className="muted">Recibí tu información correctamente. Te responderé pronto a tu correo.</p>
        <button type="button" className="btn" onClick={() => setNombreEnviado('')}>
          Enviar otro mensaje
        </button>
      </section>
    );
  }

  return (
    <section className="card contact">
      <h2>Formulario de contacto</h2>
      <p className="muted small">Todos los campos son obligatorios.</p>

      <form onSubmit={handleSubmit} noValidate className="contact__form">
        <div className="contact__row">
          <Input
            name="nombre"
            label="Nombre"
            value={form.nombre}
            error={errores.nombre}
            onChange={handleChange}
            maxLength={LIMITES_FORMULARIO.maxNombre}
          />
          <Input
            name="apellidos"
            label="Apellidos"
            value={form.apellidos}
            error={errores.apellidos}
            onChange={handleChange}
            maxLength={LIMITES_FORMULARIO.maxNombre}
          />
        </div>

        <div className="contact__row">
          <Input name="correo" label="Correo" type="email" value={form.correo} error={errores.correo} onChange={handleChange} />
          <Input
            name="telefono"
            label="Teléfono"
            type="tel"
            value={form.telefono}
            error={errores.telefono}
            onChange={handleChange}
            maxLength={LIMITES_FORMULARIO.maxTelefono}
          />
        </div>

        <Input
          name="descripcion"
          label="Descripción del proyecto"
          textarea={true}
          contador={true}
          value={form.descripcion}
          error={errores.descripcion}
          onChange={handleChange}
          maxLength={LIMITES_FORMULARIO.maxDescripcion}
        />

        <button type="submit" className="btn btn--block btn--lg">
          <FaPaperPlane size={14} /> Enviar información
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
