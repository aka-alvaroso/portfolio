export const es = {
  meta: {
    title: "Álvaro Barbero — Desarrollador Web",
    description:
      "Álvaro Barbero — Desarrollo web y ciberseguridad. Software que se lanza, productos que perduran.",
    ogDescription: "Software que se lanza. Productos que perduran.",
  },
  nav: {
    projects: "Proyectos",
    journey: "Mi trayectoria",
    talks: "Charlas",
    langSwitch: "EN",
    langSwitchHref: "/en/",
  },
  hero: {
    headline1: "Software que se lanza.",
    headline2: "Productos que perduran.",
    ctaWork: "Hablemos",
    ctaSee: "Ver mi trabajo",
  },
  about: {
    p1: "Soy Álvaro, un desarrollador de 22 años de España. No me limito a escribir código: construyo productos. Desde el primer commit hasta producción, me importa lo que construyo y por qué.",
    p2: "El buen software no es solo funcional. Funciona de verdad, y se sostiene.",
  },
  experience: {
    title: "Mi trayectoria",
    workLabel: "Experiencia\nLaboral",
    workMobileLabel: "Experiencia Laboral",
    studiesLabel: "Estudios",
    studiesMobileLabel: "Estudios",
    now: "Ahora",
    jobs: [
      {
        name: "AllPentesting",
        period: "Jun. 2023 – May. 2026",
        description:
          "Desarrollador Web en AllPentesting desde 2023. Empecé construyendo webs para clientes y acabé siendo responsable de punta a punta de un proyecto interno de ciberseguridad.",
      },
      {
        name: "University of Žilina",
        period: "Mar. 2025 – Jun. 2025",
        description:
          "Desarrollador Web en prácticas en la Universidad de Žilina, dentro de un proyecto Erasmus+. Me encargué del desarrollo de las webs de los laboratorios universitarios.",
      },
    ],
    education: [
      {
        name: "Especialización en Ciberseguridad Informática",
        period: "Sep. 2025 – May. 2026",
        description:
          "Formación avanzada en hacking ético, análisis forense y ciberseguridad en el IES Trassierra.",
      },
      {
        name: "CFGS Desarrollo de Aplicaciones Web",
        period: "Sep. 2023 – May. 2025",
        description:
          "Formación en Desarrollo de Aplicaciones Web en el IES Fidiana, con JavaScript, React, bases de datos y diseño web.",
      },
      {
        name: "CFGM Sistemas Microinformáticos y Redes",
        period: "Sep. 2021 – May. 2023",
        description:
          "Formación en Sistemas Microinformáticos y Redes en el IES Fidiana.",
      },
    ],
  },
  projects: {
    titleLine1: "Algo de",
    titleLine2: "mi trabajo",
    visit: "Visitar",
    modal: {
      seeDetails: "Detalles",
      whyBuilt: "Por qué lo construí",
      features: "Características",
      stack: "Stack",
    },
    items: [
      {
        id: "linkkk",
        name: "Linkkk.",
        description:
          "Gestión de enlaces con un motor de reglas condicionales. Cada enlace puede redirigir, bloquear, pedir contraseña o disparar un webhook según quién accede, desde dónde y cuándo.",
        href: "https://linkkk.dev/",
        tagline: "Enlaza con lógica. Sin límites.",
        period: "Mar 2025 – Hoy",
        why: "Lo construí para el TFG del grado y casi lo dejo ahí. Pero al presentarlo algo hizo clic, tenía potencial de verdad. Pasé el verano reconstruyéndolo en serio, seguí durante el siguiente curso y hoy sigo añadiendo cosas.",
        features: [
          "Reglas condicionales: país, dispositivo, hora, referrer",
          "Enlaces protegidos con contraseña",
          "Webhooks al acceder",
          "Panel de analíticas por enlace",
          "Slugs y dominios personalizados",
        ],
      },
      {
        id: "keypro",
        name: "KeyPro.",
        description:
          "Entrenador de mecanografía online con modos multijugador. Compite contra otros, juega en equipos o supérate a ti mismo en varios modos de juego.",
        href: "https://alvaroso.dev/keypro/",
        tagline: "Escribe más rápido. Compite en serio.",
        period: "Sep 2023 – Hoy",
        why: "Este fue el que lo empezó todo. Antes de KeyPro nunca había tocado Node.js ni React. Construirlo fue cómo aprendí los dos.",
        features: [
          "Carreras multijugador en tiempo real",
          "Modo equipos",
          "Varios modos de juego y dificultades",
          "Seguimiento de PPM y precisión",
          "Ranking global",
        ],
      },
      {
        id: "moka",
        name: "Moka.",
        description:
          "Herramienta visual para crear contenido en redes sociales. Fondos degradados, animaciones, exportación de vídeo y soporte para mockups de iPhone.",
        href: "https://alvaroso.dev/moka/",
        tagline: "Contenido bonito, en segundos.",
        period: "May 2026 – Hoy",
        why: "Creaba contenido para redes y las exportaciones siempre quedaban sosas. Quería fondos bonitos, pero también poder animar y exportar vídeo, no solo imágenes estáticas. Nada hacía todo eso a la vez, así que lo construí yo. Aún en desarrollo, a punto de salir.",
        features: [
          "Editor de fondos degradados",
          "Presets de animaciones CSS",
          "Exportación de vídeo (mp4)",
          "Soporte para mockup de iPhone",
          "Exportación de alta resolución con un clic",
        ],
      },
    ],
  },
  conferences: {
    title: "Charlas",
    hoverText: "¡Pasa el cursor!",
    noPhoto: "Sin foto de este evento.",
    items: [
      {
        name: "C1b3rWall 2024",
        date: "Jun 2024",
        description:
          "Ponente en la Escuela Nacional de Policía de España sobre Flipper Zero y Seguridad Web.",
        location: "Ávila, España · ~150 asistentes",
      },
      {
        name: "Security High School 2k24",
        date: "Feb 2024",
        description:
          "Taller sobre Fake News y ponencia sobre ciberseguridad delante de 700 personas.",
        location: "Córdoba, España · ~700 asistentes",
      },
      {
        name: "CiberSotero 2024",
        date: "Ene 2024",
        description:
          "Taller sobre Perfiles Falsos y Seguridad Web para los alumnos del IES Sotero Hernández.",
        location: "Sevilla, España · ~30 asistentes",
      },
      {
        name: "CascamorrasCON 2023",
        date: "Oct 2023",
        description:
          "Ponente sobre Seguridad Móvil. Mi primera vez sobre un escenario.",
        location: "Granada, España · ~100 asistentes",
      },
    ],
  },
  settings: {
    language: "Idioma",
    effects: "Efectos",
    on: "Activados",
    off: "Desactivados",
  },
  footer: {
    title1: "Construyamos",
    title2: "algo juntos",
    navigate: "Navegar",
    social: "Mis redes sociales",
    touch: "Contáctame",
    madeBy: "Hecho con 💙 por",
    navLinks: {
      projects: "Proyectos",
      journey: "Mi trayectoria",
      talks: "Charlas",
    },
  },
};
