// Línea de tiempo de experiencias laborales.
// Props: items → arreglo de objetos { periodo, cargo, empresa, descripcion }
function Timeline(props) {
  return (
    <ol className="timeline">
      {props.items.map((experiencia) => (
        <li key={experiencia.cargo + experiencia.periodo} className="timeline__item">
          <span className="timeline__dot" />
          <span className="timeline__period">{experiencia.periodo}</span>
          {experiencia.integrante && (
            <span className="chip timeline__chip">
              {experiencia.integrante === 'Ambos' ? 'Jhon y Luis' : experiencia.integrante}
            </span>
          )}
          <h3 className="timeline__role">{experiencia.cargo}</h3>
          <p className="timeline__company">{experiencia.empresa}</p>
          <p className="muted">{experiencia.descripcion}</p>
        </li>
      ))}
    </ol>
  );
}

export default Timeline;
