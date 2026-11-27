// Campo de formulario reutilizable: etiqueta + input (o textarea) + mensaje de error.
// Es el mismo componente Input del ejercicio del Login, con validación.
//
// Props:
//   name, label, value, onChange → datos básicos del campo
//   error      → mensaje de error (opcional)
//   type       → tipo de input (text, email, tel...)
//   maxLength  → máximo de caracteres (opcional)
//   textarea   → true para usar <textarea> en lugar de <input>
//   contador   → true para mostrar "12/500"
function Input(props) {
  const id = 'campo-' + props.name;
  const clase = props.error ? 'input input--error' : 'input';

  return (
    <div className="field">
      <label htmlFor={id} className="field__label">
        <span>{props.label} *</span>
        {props.contador && (
          <span className="field__counter">
            {props.value.length}/{props.maxLength}
          </span>
        )}
      </label>

      {props.textarea ? (
        <textarea
          id={id}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          maxLength={props.maxLength}
          className={clase}
          rows={4}
        />
      ) : (
        <input
          id={id}
          name={props.name}
          type={props.type || 'text'}
          value={props.value}
          onChange={props.onChange}
          maxLength={props.maxLength}
          className={clase}
        />
      )}

      {props.error && <small className="field__error">{props.error}</small>}
    </div>
  );
}

export default Input;
