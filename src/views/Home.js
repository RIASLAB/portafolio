import { useContext } from 'react';
import { FaArrowRight, FaEnvelope } from 'react-icons/fa';
import { PortfolioContext } from '../context/PortfolioContext';
import { equipo, integrantes } from '../data/profile';
import { stack, experiencias } from '../data/stack';
import SocialLinks from '../components/SocialLinks';

// Vista de Presentación y Biografía del equipo.
function Home() {
  const { projects, loading, navegar } = useContext(PortfolioContext);

  // Cifras calculadas a partir de los datos (no escritas a mano).
  const cifras = [
    { valor: loading ? '…' : projects.length, label: 'proyectos' },
    { valor: stack.length, label: 'tecnologías' },
    { valor: experiencias.length, label: 'experiencias' },
  ];

  return (
    <>
      {/* Banner: sección de presentación */}
      <section className="hero">
        <div className="container hero__inner">
          <div>
            <span className="eyebrow">Hola, somos</span>
            <h1 className="hero__title">{equipo.nombre}</h1>
            <p className="hero__role gradient-text">{equipo.titulo}</p>
            <p className="hero__desc">{equipo.descripcion}</p>

            {/* Botones de call to action */}
            <div className="hero__cta">
              <button type="button" className="btn btn--lg" onClick={() => navegar('proyectos')}>
                Ver proyectos <FaArrowRight size={14} />
              </button>
              <button type="button" className="btn btn--lg btn--ghost" onClick={() => navegar('contacto')}>
                <FaEnvelope size={14} /> Contáctanos
              </button>
            </div>

            <div className="hero__stats">
              {cifras.map((cifra) => (
                <div key={cifra.label}>
                  <strong>{cifra.valor}</strong>
                  <span>{cifra.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Imágenes representativas de los perfiles */}
          <div className="hero__media hero__media--duo">
            {integrantes.map((persona) => (
              <img key={persona.id} src={persona.imagen} alt={'Foto de ' + persona.nombre} className="hero__img" />
            ))}
          </div>
        </div>
      </section>

      {/* Biografía: una tarjeta por integrante */}
      <section className="section container">
        <span className="eyebrow">Biografía</span>
        <h2 className="section__title">Quiénes somos</h2>

        <div className="team-grid">
          {integrantes.map((persona) => (
            <article key={persona.id} className="card profile-card">
              <div className="profile-card__head">
                <img src={persona.imagen} alt={'Foto de ' + persona.nombre} className="profile-card__img" />
                <div>
                  <h3>{persona.nombre}</h3>
                  <p className="profile-card__role">{persona.titulo}</p>
                </div>
              </div>

              <p className="muted">{persona.descripcion}</p>

              <ul className="bio-list">
                {persona.biografia.map((item) => {
                  const Icono = item.icono;
                  return (
                    <li key={item.titulo}>
                      <Icono className="bio-list__icon" />
                      <div>
                        <strong>{item.titulo}</strong>
                        <p className="muted">{item.texto}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>

              <SocialLinks redes={persona.redes} />
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
