import './styles.css';

import { PortfolioProvider } from './context/PortfolioContext';
import { equipo, integrantes } from './data/profile';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './views/Home';

// Por ahora solo existe la vista de inicio.
function VistaActual() {
  return <Home />;
}

// Componente raíz: el Provider envuelve toda la app para que
// cualquier componente pueda leer el estado global con useContext.
export default function App() {
  return (
    <PortfolioProvider>
      <Navbar nombre="Jhon Luis" />
      <main>
        <VistaActual />
      </main>
      <Footer equipo={equipo} integrantes={integrantes} />
    </PortfolioProvider>
  );
}
