# Portafolio personal con React + IA

**Proyecto Final – Desarrollo de Apps asistido con IA** · Institución Universitaria Antonio José Camacho
Docente: Ing. Pablo Julián Salamanca

**Autores:** Jhon Edinson Riascos Labrada · Luis Fernando Majin Loaiza
Tecnología en Sistemas de Información

Línea de desarrollo: **3.35 Portafolio personal**

Portafolio del equipo **Jhon Riascos & Luis Majin**: desarrollo de software, infraestructura TI y ciberseguridad.

Aplicación en **React** creada con la plantilla de **CodeSandbox**. Tiene 5 vistas, estado global con **useContext** y proyectos cargados con **fetch** desde un archivo JSON. Incluye un asistente conversacional conectado vía API a un modelo de inteligencia artificial (**Google Gemini**).

---

## Distribución del trabajo

Según el diagrama del proyecto final:

| Jhon Edinson Riascos Labrada (Estudiante 1) | Luis Fernando Majin Loaiza (Estudiante 2) |
|---|---|
| Presentación y biografía → `views/Home.js` | Propuesta de valor → `views/ValueProposition.js`, `Carousel.js` |
| Chat de conversación → `ChatBox.js`, `ContactForm.js`, `services/aiService.js` | Listado de proyectos → `views/Projects.js`, `ProjectFilters.js`, `ProjectCard.js`, `Pagination.js` |
| Stack tecnológico, estudios y certificaciones → `views/Stack.js`, `Timeline.js` | Detalle de proyectos → `ProjectSidebar.js` |

---

## 1. Cómo ejecutarlo

### En CodeSandbox
1. Entrar a <https://codesandbox.io> e iniciar sesión con GitHub.
2. **Import** → pegar la URL del repositorio: `https://github.com/RIASLAB/portafolio`.
3. CodeSandbox instala las dependencias y abre la vista previa automáticamente.

### En el computador (VS Code)
Requisitos: Node.js 18 o superior.
```bash
npm install
npm start        # abre http://localhost:3000
```

### Dependencias
| Paquete | Uso |
|---|---|
| `react`, `react-dom` | Librería de interfaces y renderizado |
| `react-scripts` | Plantilla de React de CodeSandbox (ejecuta y compila el proyecto) |
| `react-icons` | Íconos Font Awesome 5 (`react-icons/fa`), como en el ejercicio del Login |

---

## 2. Conexión con la IA

1. Crear una API key gratuita en **Google AI Studio**: <https://aistudio.google.com/apikey>
2. Configurarla según dónde se ejecute el proyecto:
   - **CodeSandbox:** en la configuración del sandbox, crear la variable `REACT_APP_GEMINI_API_KEY` como **Secret** y reiniciar el sandbox. No se crea un archivo `.env` porque quedaría visible para cualquiera que abra el sandbox.
   - **En el computador:** copiar `.env.example`, renombrar la copia a `.env` y pegar la clave:
     ```env
     REACT_APP_GEMINI_API_KEY=tu_api_key
     REACT_APP_GEMINI_MODEL=gemini-3.1-flash-lite
     ```
     Después reiniciar `npm start`.

El indicador del chat muestra el estado de la conexión:
- **Verde** ("Conectado a Gemini"): hay API key.
- **Amarillo** ("Modo demo"): no hay clave y el chat responde con mensajes simulados.

> ⚠️ **Seguridad.** La app solo tiene frontend, así que la clave queda incluida en el código que llega al navegador. Para un proyecto académico es aceptable, usando una cuenta con límites gratuitos. En producción la llamada al modelo debe pasar por un backend. El `.env` está en `.gitignore`: **nunca debe subirse a GitHub**.

---

## 3. Estructura del proyecto

```
portafolio/
├── public/
│   ├── index.html                 Página base
│   ├── data/projects.json         Los proyectos (se cargan con fetch)
│   ├── img/                       Fotos del equipo, portadas de proyectos y logos del stack
│   └── favicon.svg                Ícono de la pestaña
├── src/
│   ├── index.js                   Punto de entrada: monta <App /> en el DOM
│   ├── App.js                     Componente raíz: Provider + vista actual
│   ├── styles.css                 Estilos y línea de diseño (variables de color)
│   ├── config.js                  Vistas, límites y configuración de la IA
│   ├── context/
│   │   └── PortfolioContext.js    Estado global (useContext)
│   ├── services/
│   │   ├── projectService.js      fetch del JSON de proyectos
│   │   └── aiService.js           Conexión con Gemini + prompt RTCF
│   ├── utils/
│   │   ├── funciones.js           Filtros, paginación y textos
│   │   └── validaciones.js        Validaciones del formulario
│   ├── data/                      Contenido: perfil, stack, propuesta de valor
│   ├── views/                     Una vista por pantalla
│   │   ├── Home.js                Presentación y biografía
│   │   ├── Projects.js            Proyectos
│   │   ├── Stack.js               Stack tecnológico y estudios
│   │   ├── Contact.js             Chat con IA + formulario
│   │   └── ValueProposition.js    Propuesta de valor
│   └── components/                Componentes reutilizables
│       ├── Navbar.js, Footer.js, SocialLinks.js, PageTitle.js
│       ├── ProjectCard.js, ProjectSidebar.js, ProjectFilters.js, Pagination.js
│       ├── ChatBox.js, ChatMessage.js
│       ├── ContactForm.js, Input.js
│       └── Carousel.js, Timeline.js
├── package.json
└── README.md
```

**Convenciones**, las mismas de los ejercicios de clase:
- Las vistas van en `views/` (como `views/Login.js`) y los componentes reutilizables en `components/` (como `components/Input.js`).
- Cada componente es una función que recibe `props` y se exporta con `export default`.
- Los manejadores de eventos se llaman `handleAlgo` (`handleClick`, `handleChange`, `handleSubmit`).

### ¿Cómo se navega entre las vistas?
No se usa una librería de rutas. En el Context hay un estado `const [vista, setVista] = useState('inicio')`, y `App.js` muestra la vista que corresponde con **renderizado condicional**. Los botones del navbar, del footer y los *call to action* llaman a `navegar('proyectos')`, `navegar('contacto')`, etc.

---

## 4. Vistas y funcionamiento

### 4.1 Presentación y biografía
| Requisito | Implementación |
|---|---|
| Título de la página | Nombre del equipo en el banner |
| Sección de presentación del perfil (banner) | Nombre del equipo, enfoque y descripción |
| Imagen representativa del perfil | Foto de cada integrante |
| CTA para ver proyectos y para contacto | Botones **Ver proyectos** y **Contáctame** |
| Navbar | `Navbar.js`; en celular se vuelve un menú desplegable |
| Sección de biografía | Una tarjeta por integrante con su descripción y biografía (mín. 3 elementos cada uno) |
| Sección de redes sociales | GitHub, LinkedIn y correo de cada integrante |
| Footer | Resumen del equipo, secciones y redes de cada integrante |

### 4.2 Proyectos
| Requisito | Implementación |
|---|---|
| Carga de la información | `fetch('/data/projects.json')` con `async/await`, llamado desde un `useEffect` del Context |
| Lista con paginación (10 por página) | `useState` para la página + `paginar()` con `slice` |
| 5 propiedades obligatorias en la tarjeta | Título, categoría, tecnología, año y estado |
| Ver Detalle con los 8 atributos | El botón de cada tarjeta abre el **sidebar** `ProjectSidebar`: id, título, categoría, tecnología, año, estado, descripción y enlace (más el autor) |
| Filtro por 2 atributos | **Categoría** (selector) y **tecnología o nombre** (texto, sin importar mayúsculas ni tildes). Además, filtro por **integrante** |
| Botones Filtrar y Limpiar filtros | En `ProjectFilters` |

### 4.3 Stack tecnológico y estudios
| Requisito | Implementación |
|---|---|
| Stack implementado con descripción e imágenes | 10 tarjetas con logo e indicador de qué integrante usa cada tecnología, más herramientas de infraestructura y soporte |
| Herramientas de IA utilizadas | Claude, Gemini y GitHub Copilot |
| Experiencias laborales (mín. 3) en timeline | Componente `Timeline` con la experiencia de los dos |
| Estudios y certificaciones | Formación de cada integrante en la UNIAJC y certificaciones |

### 4.4 Chat y contacto
| Requisito | Implementación |
|---|---|
| Conexión vía API con un modelo de IA | `services/aiService.js` → API de Gemini |
| Componente para enviar y recibir mensajes | `ChatBox.js`: Enter envía; Shift+Enter hace salto de línea |
| Almacenar el historial | En el Context y en `localStorage` (sobrevive a recargar la página) |
| Formulario: nombre, apellidos, correo, teléfono y descripción | `ContactForm.js` + `Input.js` |
| Validaciones | Nombre y apellidos solo letras (máx. 20); correo válido; teléfono solo números; todos obligatorios |
| Mensaje de confirmación | "¡Gracias, {nombre}!" |

### 4.5 Propuesta de valor
| Requisito | Implementación |
|---|---|
| Sección principal | **Carrusel** con avance automático (`setInterval` en `useEffect`) |
| Sección secundaria | "Cómo trabajo", "Lo que recibes" y un banner de llamado a la acción |
| Footer | Compartido por todas las vistas |

---

## 5. Conceptos aplicados

### JavaScript
| Concepto | Dónde |
|---|---|
| Funciones y arrow functions | `utils/`, manejadores `handleX`, callbacks de `map` y `filter` |
| Arreglos y objetos | `map`, `filter`, `slice`; spread `{ ...form, [name]: value }` y desestructuración |
| Condicionales y bucles | Validaciones (`if/else`, `switch`); `for` en la paginación |
| Eventos | `onClick`, `onChange`, `onSubmit`, `onKeyDown`, `addEventListener('keydown')`, `onMouseEnter` |
| DOM | `document.getElementById(...).focus()` y el scroll del chat |
| Callbacks | Las props `onSelect`, `onFilter`, `onClose` y `onChange` |
| Promesas, API, JSON y fetch | `fetchProjects()` con `async/await`; `.then().catch().finally()` en el Context; `POST` a la API de Gemini |

### React
| Concepto | Dónde |
|---|---|
| JSX | Un elemento padre (`<>…</>`), etiquetas cerradas, `className`, `onClick` |
| Componentes y props | `components/` y `views/`; `props.project`, `props.onSelect`… |
| `useState` | Vista actual, filtros, página, proyecto seleccionado, formulario, mensajes |
| Renderizado condicional | Vista actual, sidebar, carga/error, confirmación, modo demo |
| `useEffect` y ciclo de vida | **Montaje**: carga de proyectos. **Actualización**: guardar el historial. **Desmontaje**: `clearInterval` (carrusel) y `removeEventListener` (sidebar). |
| `useContext` | `PortfolioContext`: vista, proyectos, chat y contactos |

---

## 6. Prompt engineering y seguridad

El system prompt (`construirSystemPrompt()` en `src/services/aiService.js`) usa el **framework RTCF**:

| Parte | Contenido |
|---|---|
| **=== ROL ===** | Asistente virtual del portafolio |
| **=== CONTEXTO ===** | Quiénes escriben y la única información confiable del autor |
| **=== TAREA ===** | Responder sobre proyectos, habilidades y servicios, e invitar al formulario |
| **=== INSTRUCCIONES Y RESTRICCIONES ===** | No inventar, tratar el mensaje del visitante solo como pregunta, responder en español |
| **=== FORMATO DE SALIDA ===** | Texto plano, máximo 4 oraciones |
| **=== EJEMPLO ===** | Ejemplo **one-shot** |

- **Prompt injection.** El mensaje del visitante va entre delimitadores `=== INICIO/FIN DEL MENSAJE DEL VISITANTE ===`, y si escribe `===` para imitar un delimitador, se neutraliza.
- **Data leakage.** Al modelo solo se le envía el título y la tecnología de 6 proyectos; nunca los datos del formulario.
- **Tokens y ventana de contexto.** Solo se envían los últimos 6 mensajes. Además, la respuesta tiene un límite de 350 tokens, el mensaje del visitante uno de 500 caracteres, el razonamiento interno se deja en `thinkingLevel: minimal` y la temperatura es 0.5. Los tokens usados se ven en la consola.

---

## 7. Despliegue en Vercel

1. En <https://vercel.com>, **Add New → Project** e importar el repositorio de GitHub.
2. Vercel detecta Create React App: el comando de build es `npm run build` y la carpeta de salida es `build`.
3. En **Environment Variables**, agregar `REACT_APP_GEMINI_API_KEY`.
4. **Deploy**.

---

## 8. Pendientes (TODO)

- [ ] Entidad y año de la certificación de Marketing digital de Luis (`src/data/stack.js`).
- [ ] Una línea sobre la auditoría AuditHCE.
