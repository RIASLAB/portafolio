import { useContext } from 'react';
import { PortfolioContext } from '../context/PortfolioContext';
import PageTitle from '../components/PageTitle';
import Carousel from '../components/Carousel';
import { slides, pasos, entregables } from '../data/propuesta';

// Vista de propuesta de valor (abierta a la creatividad).
function ValueProposition() {
  const { navegar } = useContext(PortfolioContext);

  return (
    <>
      {/* Sección principal: carrusel */}
      <section className="section container">
        <PageTitle
          eyebrow="Propuesta de valor"
          title="¿Por qué trabajar con nosotros?"
          subtitle="Combinamos desarrollo de software con infraestructura, redes y soporte para entregar soluciones completas, seguras y apoyadas en inteligencia artificial."
        />
        <Carousel slides={slides} />
      </section>

      {/* Sección secundaria: forma de trabajo y entregables */}
      <section className="section section--alt">
        <div className="container">
          <h2 className="section__heading">Cómo trabajo</h2>
          <div className="grid grid--4">
            {pasos.map((paso) => (
              <article key={paso.n} className="card card--hover">
                <span className="step-card__n gradient-text">{paso.n}</span>
                <h3>{paso.titulo}</h3>
                <p className="muted">{paso.texto}</p>
              </article>
            ))}
          </div>

          <div className="card deliverables">
            <h2>Lo que recibes</h2>
            <ul className="deliverables__list">
              {entregables.map((entregable) => (
                <li key={entregable}>{entregable}</li>
              ))}
            </ul>
          </div>

          <div className="cta-banner">
            <h3>¿Tienes un proceso que se podría automatizar?</h3>
            <button type="button" className="btn btn--lg" onClick={() => navegar('contacto')}>
              Hablemos
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default ValueProposition;
