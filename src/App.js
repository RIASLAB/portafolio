import './styles.css';

import { PortfolioProvider } from './context/PortfolioContext';

// Componente raíz: el Provider envuelve toda la app para que
// cualquier componente pueda leer el estado global con useContext.
export default function App() {
  return (
    <PortfolioProvider>
      <main className="section container">
        <span className="eyebrow">En construcción</span>
        <h1>Portafolio</h1>
        <p className="muted">Proyecto Final – Desarrollo de Apps asistido con IA · UNIAJC</p>
      </main>
    </PortfolioProvider>
  );
}
