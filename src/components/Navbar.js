import { useContext, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { PortfolioContext } from '../context/PortfolioContext';
import { VISTAS } from '../config';
import { iniciales } from '../utils/funciones';

// Header con logo y navbar. En celular se convierte en menú desplegable.
// Props: nombre → se usa para las iniciales del logo.
function Navbar(props) {
  const { vista, navegar } = useContext(PortfolioContext);
  const [abierto, setAbierto] = useState(false);

  function handleToggle() {
    setAbierto(!abierto);
  }

  function handleClick(idVista) {
    navegar(idVista);
    setAbierto(false); // cierra el menú del celular
  }

  return (
    <header className="header">
      <div className="container header__inner">
        <button type="button" className="logo" onClick={() => handleClick('inicio')}>
          <span className="logo__badge">{iniciales(props.nombre)}</span>
          <span>Portafolio</span>
        </button>

        <button type="button" className="nav-toggle" onClick={handleToggle} aria-label="Menú">
          {abierto ? <FaTimes /> : <FaBars />}
        </button>

        <nav className={abierto ? 'nav nav--open' : 'nav'}>
          {VISTAS.map((item) => (
            <button
              type="button"
              key={item.id}
              className={vista === item.id ? 'nav__link nav__link--active' : 'nav__link'}
              onClick={() => handleClick(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
