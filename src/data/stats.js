export const stats = [
  {
    id: 1,
    title: "150+",
    subtitle: "Graduados",
    description: "Desarrolladores formados en Bitcoin y blockchain",
    icon: "code-bracket-square",
    color: "blue",
    trend: "+25%",
    trendDirection: "up"
  },
  {
    id: 2,
    title: "95%",
    subtitle: "Tasa de Empleo",
    description: "Graduados empleados en la industria",
    icon: "computer-desktop",
    color: "green",
    trend: "+5%",
    trendDirection: "up"
  },
  {
    id: 3,
    title: "50+",
    subtitle: "Proyectos",
    description: "Aplicaciones desarrolladas por estudiantes",
    icon: "bolt",
    color: "yellow",
    trend: "+15",
    trendDirection: "up"
  },
  {
    id: 4,
    title: "25",
    subtitle: "Startups",
    description: "Empresas fundadas por graduados",
    icon: "globe-americas",
    color: "purple",
    trend: "+8",
    trendDirection: "up"
  },
  {
    id: 5,
    title: "4",
    subtitle: "Países",
    description: "Residencias activas en América Latina",
    icon: "globe-europe-africa",
    color: "red",
    trend: "+1",
    trendDirection: "up"
  },
  {
    id: 6,
    title: "12",
    subtitle: "Mentores",
    description: "Expertos líderes en Bitcoin",
    icon: "chat-bubble-left-right",
    color: "indigo",
    trend: "+3",
    trendDirection: "up"
  }
];

export const programStats = {
  overview: {
    totalStudents: 150,
    activeStudents: 45,
    totalMentors: 12,
    totalPartners: 15,
    totalResidencies: 4,
    totalCountries: 4
  },
  demographics: {
    countries: [
      { name: "Argentina", students: 60, percentage: 40 },
      { name: "Chile", students: 35, percentage: 23 },
      { name: "Colombia", students: 30, percentage: 20 },
      { name: "México", students: 25, percentage: 17 }
    ],
    experience: [
      { level: "Principiante", students: 45, percentage: 30 },
      { level: "Intermedio", students: 75, percentage: 50 },
      { level: "Avanzado", students: 30, percentage: 20 }
    ],
    age: [
      { range: "18-25", students: 60, percentage: 40 },
      { range: "26-35", students: 75, percentage: 50 },
      { range: "36+", students: 15, percentage: 10 }
    ]
  },
  outcomes: {
    employment: {
      employed: 142,
      unemployed: 8,
      rate: 95,
      averageSalary: 85000,
      salaryRange: {
        min: 45000,
        max: 150000
      }
    },
    companies: [
      "Bitcoin Argentina",
      "Chaincode Labs",
      "Lightning Labs",
      "Strike",
      "Blockstream",
      "Square",
      "Coinbase",
      "Kraken"
    ],
    roles: [
      "Full Stack Developer",
      "Blockchain Developer",
      "Security Engineer",
      "Product Manager",
      "DevOps Engineer",
      "Research Engineer"
    ]
  },
  projects: {
    total: 50,
    categories: [
      { name: "Wallets", count: 15, percentage: 30 },
      { name: "Payment Apps", count: 12, percentage: 24 },
      { name: "Security Tools", count: 8, percentage: 16 },
      { name: "Educational", count: 7, percentage: 14 },
      { name: "Infrastructure", count: 5, percentage: 10 },
      { name: "Other", count: 3, percentage: 6 }
    ],
    technologies: [
      "Bitcoin Core",
      "Lightning Network",
      "React",
      "Node.js",
      "Python",
      "Rust",
      "C++"
    ]
  },
  satisfaction: {
    overall: 4.8,
    categories: [
      { name: "Calidad de Contenido", rating: 4.9 },
      { name: "Mentoría", rating: 4.8 },
      { name: "Recursos", rating: 4.7 },
      { name: "Networking", rating: 4.8 },
      { name: "Oportunidades", rating: 4.6 }
    ],
    testimonials: 142,
    recommendations: 98
  }
};

export const statsCategories = [
  { id: "students", name: "Estudiantes", color: "blue" },
  { id: "employment", name: "Empleo", color: "green" },
  { id: "projects", name: "Proyectos", color: "yellow" },
  { id: "startups", name: "Startups", color: "purple" },
  { id: "geography", name: "Geografía", color: "red" },
  { id: "mentorship", name: "Mentoría", color: "indigo" }
];
