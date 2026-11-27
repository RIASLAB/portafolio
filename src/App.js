import './styles.css';

import { PortfolioProvider } from './context/PortfolioContext';
import { equipo, integrantes } from './data/profile';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Componente raíz: el Provider envuelve toda la app para que
// cualquier componente pueda leer el estado global con useContext.
export default function App() {
  return (
    <PortfolioProvider>
      <Navbar nombre="Jhon Luis" />
      <main className="section container">
        <span className="eyebrow">En construcción</span>
        <h1>Portafolio</h1>
      </main>
      <Footer equipo={equipo} integrantes={integrantes} />
    </PortfolioProvider>
  );
}
