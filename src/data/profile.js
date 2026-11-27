// ─────────────────────────────────────────────────────────────
// Datos del equipo y de cada integrante.
// Todo lo marcado con TODO es un dato pendiente por completar.
// ─────────────────────────────────────────────────────────────
import {
  FaGraduationCap,
  FaIndustry,
  FaRobot,
  FaUserShield,
  FaServer,
  FaNetworkWired,
  FaLaptopCode,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from 'react-icons/fa';

// Datos generales del portafolio (equipo).
export const equipo = {
  nombre: 'Jhon Riascos & Luis Majin',
  titulo: 'Desarrollo de software · Infraestructura TI · Ciberseguridad',
  descripcion:
    'Somos estudiantes de Tecnología en Sistemas de Información en la UNIAJC. Unimos el desarrollo de aplicaciones con la infraestructura, las redes y el soporte técnico para crear soluciones completas y seguras.',
  universidad: 'Institución Universitaria Antonio José Camacho',
  ubicacion: 'Cali, Colombia', // TODO: confirmar
};

// Integrantes. Cada uno tiene su propia presentación, redes y biografía (mínimo 3 elementos).
export const integrantes = [
  {
    id: 'Jhon',
    nombre: 'Jhon Edinson Riascos Labrada',
    titulo: 'Desarrollador de software · Estudiante de Tecnología en Sistemas de Información',
    imagen: '/img/equipo/jhon.jpg',
    descripcion:
      'Construyo herramientas que resuelven problemas reales de operación: desde apps de escritorio en Python conectadas a SQL Server hasta aplicaciones web y ERP. Me interesan la ciberseguridad y el uso de IA para desarrollar más rápido y mejor.',
    redes: [
      { nombre: 'GitHub', url: 'https://github.com/RIASLAB', icono: FaGithub },
      { nombre: 'LinkedIn', url: 'https://www.linkedin.com/in/jhon-edinson-riascos-labrada-11361a3b8/', icono: FaLinkedin },
      { nombre: 'Correo', url: 'mailto:riascoslabradajhonedinson@gmail.com', icono: FaEnvelope },
    ],
    biografia: [
      {
        icono: FaGraduationCap,
        titulo: 'Formación',
        texto: 'Estudiante de Tecnología en Sistemas de Información en la UNIAJC desde 2023.',
      },
      {
        icono: FaIndustry,
        titulo: 'Experiencia',
        texto: 'Analista en el grupo NUTRIALIMENTOS: ERP Odoo, CMMS en Node.js y React, y herramientas internas en Python.',
      },
      {
        icono: FaRobot,
        titulo: 'IA aplicada',
        texto: 'Uso modelos de lenguaje como asistentes de desarrollo y los integro en aplicaciones vía API.',
      },
    ],
  },
  {
    id: 'Luis',
    nombre: 'Luis Fernando Majin Loaiza',
    titulo: 'Tecnólogo en Sistemas e Información · Soporte Técnico e Infraestructura TI',
    imagen: '/img/equipo/luis.jpg',
    descripcion:
      'Tecnólogo en Sistemas e Información con experiencia práctica en soporte técnico, infraestructura tecnológica, redes y administración de sistemas. Interesado en ciberseguridad, administración de servidores, automatización y desarrollo de soluciones tecnológicas.',
    redes: [
      { nombre: 'GitHub', url: 'https://github.com/LuisMajin', icono: FaGithub },
      { nombre: 'LinkedIn', url: 'https://www.linkedin.com/in/luis-fernando-majin-loaiza-5799833ab/', icono: FaLinkedin },
      { nombre: 'Correo', url: 'mailto:majinloaizaluisfernando@gmail.com', icono: FaEnvelope },
    ],
    biografia: [
      {
        icono: FaGraduationCap,
        titulo: 'Formación',
        texto: 'Estudiante de Tecnología en Sistemas e Información de la Institución Universitaria Antonio José Camacho (UNIAJC).',
      },
      {
        icono: FaServer,
        titulo: 'Experiencia',
        texto: 'Soporte técnico e infraestructura tecnológica: atención de incidentes, mantenimiento y configuración de equipos y servicios TI.',
      },
      {
        icono: FaUserShield,
        titulo: 'Intereses',
        texto: 'Ciberseguridad, redes, firewalls, servidores, virtualización, desarrollo web y automatización.',
      },
      {
        icono: FaLaptopCode,
        titulo: 'Aprendizaje práctico',
        texto: 'Experiencia académica y laboral con Windows, Linux, SQL, Python, Java y herramientas de administración de redes.',
      },
    ],
  },
];

// Ícono usado en la sección "Lo que hacemos juntos" del inicio.
export const iconoEquipo = FaNetworkWired;
