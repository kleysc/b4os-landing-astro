export const residencies = [
  {
    id: 1,
    name: "Residencia Bitcoin Argentina",
    location: "Buenos Aires, Argentina",
    city: "Buenos Aires",
    country: "Argentina",
    coordinates: {
      lat: -34.6118,
      lng: -58.3960
    },
    description: "Centro principal de B4OS en Argentina, ubicado en el corazón de Buenos Aires. Inmersión total en el ecosistema Bitcoin local con acceso directo a expertos y empresas.",
    facilities: [
      "Aulas equipadas con computadoras",
      "Laboratorio de desarrollo",
      "Sala de conferencias",
      "Espacio de coworking",
      "Cafetería",
      "WiFi de alta velocidad"
    ],
    capacity: 50,
    startDate: "2025-03-01",
    endDate: "2025-12-31",
    mentors: [
      "Dr. Rodolfo Andragnes",
      "Ing. Javier Milei",
      "Lic. Fede Fede"
    ],
    partners: ["Bitcoin Argentina", "LaBitConf"],
    image: "/images/residencia-buenos-aires.jpg",
    website: "https://bitcoinargentina.org",
    contact: {
      email: "b4os@bitcoinargentina.org",
      phone: "+54 11 1234-5678",
      address: "Av. Corrientes 1234, Buenos Aires"
    },
    duration: 4,
    features: [
      "Mentoría personalizada con expertos locales",
      "Acceso a eventos exclusivos de Bitcoin Argentina",
      "Networking con empresas del ecosistema",
      "Proyectos reales con startups locales"
    ],
    activities: [
      "Workshops técnicos",
      "Meetups y conferencias",
      "Hackathons Bitcoin",
      "Visitas a empresas"
    ],
    dates: "Marzo - Diciembre 2025",
    status: "available"
  },
  {
    id: 2,
    name: "Residencia Bitcoin Chile",
    location: "Santiago, Chile",
    city: "Santiago",
    country: "Chile",
    coordinates: {
      lat: -33.4489,
      lng: -70.6693
    },
    description: "Centro de desarrollo Bitcoin en Chile, enfocado en innovación y startups. Conecta con el ecosistema emprendedor más dinámico de la región.",
    facilities: [
      "Espacio de incubación",
      "Laboratorio de prototipado",
      "Sala de reuniones",
      "Área de networking",
      "Biblioteca técnica",
      "Estacionamiento"
    ],
    capacity: 30,
    startDate: "2025-04-01",
    endDate: "2025-11-30",
    mentors: [
      "Ing. Mauricio Carrasco",
      "Dr. José Miguel Insulza",
      "Lic. María José Zúñiga"
    ],
    partners: ["ONG Bitcoin Chile", "Startup Chile"],
    image: "/images/residencia-santiago.jpg",
    website: "https://ongbtcchile.org",
    contact: {
      email: "b4os@ongbtcchile.org",
      phone: "+56 2 2345-6789",
      address: "Av. Providencia 5678, Santiago"
    },
    duration: 3,
    features: [
      "Programa de incubación de startups",
      "Acceso a capital semilla",
      "Mentoría empresarial",
      "Conectividad con Silicon Valley"
    ],
    activities: [
      "Programa de incubación",
      "Pitch competitions",
      "Mentorías empresariales",
      "Networking internacional"
    ],
    dates: "Abril - Noviembre 2025",
    status: "available"
  },
  {
    id: 3,
    name: "Residencia Bitcoin Colombia",
    location: "Bogotá, Colombia",
    city: "Bogotá",
    country: "Colombia",
    coordinates: {
      lat: 4.7110,
      lng: -74.0721
    },
    description: "Centro de innovación blockchain en Colombia, conectando talento local con oportunidades globales. Enfoque en investigación y desarrollo.",
    facilities: [
      "Centro de innovación",
      "Laboratorio de investigación",
      "Auditorio",
      "Espacio de eventos",
      "Café tecnológico",
      "Zona de descanso"
    ],
    capacity: 40,
    startDate: "2025-05-01",
    endDate: "2025-10-31",
    mentors: [
      "Dr. Jehiel Oliver",
      "Ing. Mauricio Tovar",
      "Lic. Ana María Jaramillo"
    ],
    partners: ["Blockchain Colombia", "MinTIC"],
    image: "/images/residencia-bogota.jpg",
    website: "https://blockchaincolombia.org",
    contact: {
      email: "b4os@blockchaincolombia.org",
      phone: "+57 1 3456-7890",
      address: "Calle 72 #12-34, Bogotá"
    },
    duration: 2,
    features: [
      "Investigación en blockchain",
      "Colaboración con universidades",
      "Acceso a fondos de investigación",
      "Publicaciones académicas"
    ],
    activities: [
      "Investigación aplicada",
      "Seminarios académicos",
      "Colaboración universitaria",
      "Publicaciones técnicas"
    ],
    dates: "Mayo - Octubre 2025",
    status: "waitlist"
  },
  {
    id: 4,
    name: "Residencia Bitcoin México",
    location: "Ciudad de México, México",
    city: "Ciudad de México",
    country: "México",
    coordinates: {
      lat: 19.4326,
      lng: -99.1332
    },
    description: "Hub de desarrollo Bitcoin en México, impulsando la adopción en América del Norte. Conecta con el mercado más grande de la región.",
    facilities: [
      "Centro de desarrollo",
      "Sala de hackathons",
      "Espacio de networking",
      "Área de presentaciones",
      "Cafetería",
      "Terraza"
    ],
    capacity: 35,
    startDate: "2025-06-01",
    endDate: "2025-09-30",
    mentors: [
      "Ing. Daniel Vogel",
      "Dr. Ricardo Salinas",
      "Lic. Gabriela Rodríguez"
    ],
    partners: ["Bitso", "Banxico"],
    image: "/images/residencia-cdmx.jpg",
    website: "https://bitso.com",
    contact: {
      email: "b4os@bitso.com",
      phone: "+52 55 4567-8901",
      address: "Av. Insurgentes Sur 1234, CDMX"
    },
    duration: 3,
    features: [
      "Acceso al mercado mexicano",
      "Conectividad con Estados Unidos",
      "Mentoría de ejecutivos",
      "Oportunidades de empleo"
    ],
    activities: [
      "Hackathons empresariales",
      "Networking corporativo",
      "Visitas a empresas",
      "Mentorías ejecutivas"
    ],
    dates: "Junio - Septiembre 2025",
    status: "available"
  }
];

export const residencyFeatures = [
  {
    id: "mentorship",
    name: "Mentoría Personalizada",
    description: "Acceso directo a expertos en Bitcoin y blockchain",
    icon: "chat-bubble-left-right"
  },
  {
    id: "networking",
    name: "Networking",
    description: "Conecta con profesionales y empresas del ecosistema",
    icon: "globe-americas"
  },
  {
    id: "resources",
    name: "Recursos",
    description: "Acceso a herramientas y tecnologías de vanguardia",
    icon: "wrench-screwdriver"
  },
  {
    id: "projects",
    name: "Proyectos Reales",
    description: "Desarrolla soluciones para problemas del mundo real",
    icon: "code-bracket-square"
  }
];

export const residencyStats = {
  totalResidencies: 4,
  totalCapacity: 155,
  countries: ["Argentina", "Chile", "Colombia", "México"],
  totalMentors: 12,
  totalPartners: 12
};
