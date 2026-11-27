import { FaGraduationCap, FaCertificate } from 'react-icons/fa';
import PageTitle from '../components/PageTitle';
import Timeline from '../components/Timeline';
import { stack, herramientas, herramientasIA, estudios, certificaciones, experiencias } from '../data/stack';

// Vista de stack tecnológico, estudios, certificaciones y experiencia del equipo.
function Stack() {
  return (
    <section className="section container">
      <PageTitle
        eyebrow="Stack y estudios"
        title="Tecnologías y experiencia"
        subtitle="Las herramientas con las que construimos, las IA que usamos y nuestro recorrido."
      />

      {/* Stack implementado: descripción e imágenes */}
      <h2 className="section__heading">Stack implementado</h2>
      <div className="grid grid--4">
        {stack.map((tecnologia) => (
          <article key={tecnologia.nombre} className="card card--hover stack-card">
            <img src={tecnologia.imagen} alt={'Logo de ' + tecnologia.nombre} className="stack-card__img" />
            <div>
              <h3>{tecnologia.nombre}</h3>
              <p className="muted small">{tecnologia.descripcion}</p>
              <div className="stack-card__who">
                {tecnologia.usadoPor.map((persona) => (
                  <span key={persona} className="chip">
                    {persona}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Otras herramientas de infraestructura y soporte, por integrante */}
      <h2 className="section__heading">Infraestructura y soporte</h2>
      <div className="grid grid--2">
        {herramientas.map((grupo) => (
          <article key={grupo.integrante} className="card">
            <h3>{grupo.integrante}</h3>
            <div className="tags">
              {grupo.lista.map((herramienta) => (
                <span key={herramienta} className="tag">
                  {herramienta}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      {/* Herramientas de IA utilizadas */}
      <h2 className="section__heading">Herramientas de IA</h2>
      <div className="grid grid--3">
        {herramientasIA.map((herramienta) => {
          const Icono = herramienta.icono;
          return (
            <article key={herramienta.nombre} className="card card--hover">
              <Icono className="card__icon" />
              <h3>{herramienta.nombre}</h3>
              <p className="muted">{herramienta.uso}</p>
            </article>
          );
        })}
      </div>

      <div className="stack__columns">
        <div>
          {/* Estudios */}
          <h2 className="section__heading">Estudios</h2>
          {estudios.map((estudio) => (
            <article key={estudio.integrante} className="card study-card">
              <FaGraduationCap className="study-card__icon" />
              <div>
                <span className="chip">{estudio.integrante}</span>
                <h3>{estudio.titulo}</h3>
                <p className="study-card__inst">{estudio.institucion}</p>
                <p className="timeline__period">{estudio.periodo}</p>
              </div>
            </article>
          ))}

          {/* Certificaciones */}
          <h2 className="section__heading">Certificaciones</h2>
          {certificaciones.map((certificacion) => (
            <article key={certificacion.titulo} className="card study-card">
              <FaCertificate className="study-card__icon" />
              <div>
                <span className="chip">{certificacion.integrante}</span>
                <h3>{certificacion.titulo}</h3>
                <p className="muted">
                  {certificacion.entidad} {certificacion.anio}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Experiencias laborales (mínimo 3) en un timeline */}
        <div>
          <h2 className="section__heading">Experiencia</h2>
          <Timeline items={experiencias} />
        </div>
      </div>
    </section>
  );
}

export default Stack;
