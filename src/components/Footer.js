import { useContext } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { PortfolioContext } from '../context/PortfolioContext';
import { VISTAS } from '../config';
import SocialLinks from './SocialLinks';

// Footer con información de resumen, secciones y redes de cada integrante.
// Props: equipo (datos generales), integrantes (arreglo con los datos de cada uno).
function Footer(props) {
  const { navegar } = useContext(PortfolioContext);
  const anio = new Date().getFullYear();
  const secciones = VISTAS.slice(1); // todas menos "Inicio"

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <h2 className="footer__title">{props.equipo.nombre}</h2>
          <p className="muted">{props.equipo.titulo}</p>
          <p className="muted small footer__location">
            <FaMapMarkerAlt /> {props.equipo.ubicacion}
          </p>
        </div>

        <div>
          <h3 className="footer__heading">Secciones</h3>
          <ul className="footer__links">
            {secciones.map((item) => (
              <li key={item.id}>
                <button type="button" onClick={() => navegar(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="footer__heading">Conectemos</h3>
          {props.integrantes.map((persona) => (
            <div key={persona.id} className="footer__person">
              <span className="small">{persona.id}</span>
              <SocialLinks redes={persona.redes} compacto={true} />
            </div>
          ))}
        </div>
      </div>

      <p className="footer__copy">
        © {anio} {props.integrantes.map((persona) => persona.nombre).join(' y ')}
        <br />
        Proyecto Final – Desarrollo de Apps asistido con IA · UNIAJC
      </p>
    </footer>
  );
}

export default Footer;
