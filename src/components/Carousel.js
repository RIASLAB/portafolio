import { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Carrusel con avance automático.
//
// Ciclo de vida con useEffect:
//   - Montaje: se crea un setInterval que avanza cada 5 segundos.
//   - Desmontaje (o pausa): la función de limpieza hace clearInterval.
//
// Props: slides → arreglo de objetos { icono, titulo, texto, fondo }
function Carousel(props) {
  const [index, setIndex] = useState(0);
  const [pausado, setPausado] = useState(false);
  const total = props.slides.length;

  useEffect(() => {
    if (pausado) return;

    const id = setInterval(() => {
      setIndex((actual) => (actual + 1) % total);
    }, 5000);

    return () => clearInterval(id); // limpieza
  }, [pausado, total]);

  // El módulo (%) hace que después del último vuelva al primero, y al revés.
  function irA(numero) {
    setIndex((numero + total) % total);
  }

  function handleAnterior() {
    irA(index - 1);
  }

  function handleSiguiente() {
    irA(index + 1);
  }

  return (
    <div className="carousel" onMouseEnter={() => setPausado(true)} onMouseLeave={() => setPausado(false)}>
      <div className="carousel__track" style={{ transform: 'translateX(-' + index * 100 + '%)' }}>
        {props.slides.map((slide) => {
          const Icono = slide.icono;
          return (
            <div key={slide.titulo} className="carousel__slide" style={{ background: slide.fondo }}>
              <Icono className="carousel__icon" />
              <h3>{slide.titulo}</h3>
              <p>{slide.texto}</p>
            </div>
          );
        })}
      </div>

      <button type="button" className="carousel__arrow carousel__arrow--prev" onClick={handleAnterior} aria-label="Anterior">
        <FaChevronLeft />
      </button>
      <button type="button" className="carousel__arrow carousel__arrow--next" onClick={handleSiguiente} aria-label="Siguiente">
        <FaChevronRight />
      </button>

      <div className="carousel__dots">
        {props.slides.map((slide, i) => (
          <button
            type="button"
            key={slide.titulo}
            className={i === index ? 'carousel__dot carousel__dot--active' : 'carousel__dot'}
            onClick={() => irA(i)}
            aria-label={'Ir a ' + slide.titulo}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
