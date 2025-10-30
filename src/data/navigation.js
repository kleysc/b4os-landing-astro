export const navigation = {
  main: [
    {
      id: "home",
      label: "Inicio",
      href: "/",
      description: "Página principal de B4OS"
    },
    {
      id: "about",
      label: "Acerca de",
      href: "#about",
      description: "Información sobre el programa B4OS"
    },
    {
      id: "benefits",
      label: "Beneficios",
      href: "#benefits",
      description: "Ventajas de participar en B4OS"
    },
    {
      id: "timeline",
      label: "Cronograma",
      href: "#timeline",
      description: "Fases y fechas del programa"
    },
    {
      id: "residencies",
      label: "Residencias",
      href: "#residencies",
      description: "Ubicaciones y centros de B4OS"
    },
    {
      id: "alumni",
      label: "Alumni",
      href: "#alumni",
      description: "Graduados y sus historias de éxito"
    },
    {
      id: "partnerships",
      label: "Alianzas",
      href: "#partnerships",
      description: "Partners y colaboradores"
    },
    {
      id: "faq",
      label: "FAQ",
      href: "#faq",
      description: "Preguntas frecuentes"
    },
    {
      id: "register",
      label: "Registrarse",
      href: "#register",
      description: "Formulario de inscripción",
      cta: true
    }
  ],
  footer: [
    {
      id: "program",
      title: "Programa",
      links: [
        { label: "Acerca de", href: "#about" },
        { label: "Beneficios", href: "#benefits" },
        { label: "Cronograma", href: "#timeline" },
        { label: "Residencias", href: "#residencies" },
        { label: "Alumni", href: "#alumni" }
      ]
    },
    {
      id: "resources",
      title: "Recursos",
      links: [
        { label: "Documentación", href: "/docs" },
        { label: "Blog", href: "/blog" },
        { label: "Eventos", href: "/events" },
        { label: "Comunidad", href: "/community" },
        { label: "FAQ", href: "#faq" }
      ]
    },
    {
      id: "company",
      title: "Empresa",
      links: [
        { label: "Contacto", href: "/contact" },
        { label: "Trabaja con nosotros", href: "/careers" },
        { label: "Prensa", href: "/press" },
        { label: "Términos", href: "/terminos" },
        { label: "Privacidad", href: "/privacy" }
      ]
    },
    {
      id: "partners",
      title: "Partners",
      links: [
        { label: "Bitcoin Argentina", href: "https://bitcoinargentina.org" },
        { label: "Chaincode Labs", href: "https://chaincode.com" },
        { label: "Lightning Labs", href: "https://lightning.engineering" },
        { label: "Strike", href: "https://strike.me" },
        { label: "Blockstream", href: "https://blockstream.com" }
      ]
    }
  ],
  social: [
    {
      id: "twitter",
      name: "Twitter",
      href: "https://twitter.com/b4os_dev",
      icon: "simple-icons:twitter",
      color: "#1DA1F2"
    },
    {
      id: "github",
      name: "GitHub",
      href: "https://github.com/b4os-dev",
      icon: "simple-icons:github",
      color: "#181717"
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      href: "https://linkedin.com/company/b4os-dev",
      icon: "simple-icons:linkedin",
      color: "#0A66C2"
    },
    {
      id: "discord",
      name: "Discord",
      href: "https://discord.gg/b4os",
      icon: "simple-icons:discord",
      color: "#5865F2"
    },
    {
      id: "telegram",
      name: "Telegram",
      href: "https://t.me/b4os_dev",
      icon: "simple-icons:telegram",
      color: "#26A5E4"
    },
    {
      id: "nostr",
      name: "Nostr",
      href: "https://nostr.com/npub1b4osdev",
      icon: "simple-icons:nostr",
      color: "#FF6600"
    }
  ],
  legal: [
    {
      id: "terms",
      label: "Términos y Condiciones",
      href: "/terminos",
      description: "Términos legales del programa"
    },
    {
      id: "privacy",
      label: "Política de Privacidad",
      href: "/privacy",
      description: "Cómo manejamos tus datos"
    },
    {
      id: "cookies",
      label: "Política de Cookies",
      href: "/cookies",
      description: "Uso de cookies en el sitio"
    }
  ]
};

export const breadcrumbs = {
  home: [
    { label: "Inicio", href: "/" }
  ],
  about: [
    { label: "Inicio", href: "/" },
    { label: "Acerca de", href: "#about" }
  ],
  benefits: [
    { label: "Inicio", href: "/" },
    { label: "Beneficios", href: "#benefits" }
  ],
  timeline: [
    { label: "Inicio", href: "/" },
    { label: "Cronograma", href: "#timeline" }
  ],
  residencies: [
    { label: "Inicio", href: "/" },
    { label: "Residencias", href: "#residencies" }
  ],
  alumni: [
    { label: "Inicio", href: "/" },
    { label: "Alumni", href: "#alumni" }
  ],
  partnerships: [
    { label: "Inicio", href: "/" },
    { label: "Alianzas", href: "#partnerships" }
  ],
  faq: [
    { label: "Inicio", href: "/" },
    { label: "FAQ", href: "#faq" }
  ],
  register: [
    { label: "Inicio", href: "/" },
    { label: "Registrarse", href: "#register" }
  ]
};
