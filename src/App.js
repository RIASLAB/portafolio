import { useContext } from 'react';
import './styles.css';

import { PortfolioContext, PortfolioProvider } from './context/PortfolioContext';
import { equipo, integrantes } from './data/profile';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './views/Home';
import Projects from './views/Projects';

// Muestra la vista que está guardada en el estado global (renderizado condicional).
function VistaActual() {
  const { vista } = useContext(PortfolioContext);

  if (vista === 'proyectos') return <Projects />;
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
