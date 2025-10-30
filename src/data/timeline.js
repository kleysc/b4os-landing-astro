export const timeline = [
  {
    id: 1,
    phase: "Fase 1: Preparación",
    title: "Inscripciones y Selección",
    description: "Proceso de aplicación y selección de candidatos",
    startDate: "2025-01-15",
    endDate: "2025-02-28",
    status: "upcoming",
    milestones: [
      {
        date: "2025-01-15",
        title: "Apertura de Inscripciones",
        description: "Inicio del período de aplicación"
      },
      {
        date: "2025-02-15",
        title: "Cierre de Inscripciones",
        description: "Último día para enviar aplicaciones"
      },
      {
        date: "2025-02-28",
        title: "Anuncio de Seleccionados",
        description: "Publicación de la lista de admitidos"
      }
    ],
    activities: [
      "Revisión de aplicaciones",
      "Entrevistas técnicas",
      "Evaluación de portafolios",
      "Selección final"
    ]
  },
  {
    id: 2,
    phase: "Fase 2: Fundamentos",
    title: "Introducción a Bitcoin y Blockchain",
    description: "Conceptos básicos y fundamentos teóricos",
    startDate: "2025-03-01",
    endDate: "2025-04-30",
    status: "upcoming",
    milestones: [
      {
        date: "2025-03-01",
        title: "Inicio del Programa",
        description: "Ceremonia de apertura y bienvenida"
      },
      {
        date: "2025-03-15",
        title: "Primer Hackathon",
        description: "Desafío de desarrollo básico"
      },
      {
        date: "2025-04-30",
        title: "Evaluación de Fundamentos",
        description: "Examen teórico y práctico"
      }
    ],
    activities: [
      "Historia y filosofía de Bitcoin",
      "Criptografía básica",
      "Funcionamiento de blockchain",
      "Wallets y transacciones",
      "Seguridad y mejores prácticas"
    ]
  },
  {
    id: 3,
    phase: "Fase 3: Desarrollo",
    title: "Programación y Aplicaciones",
    description: "Desarrollo de aplicaciones reales con Bitcoin",
    startDate: "2025-05-01",
    endDate: "2025-08-31",
    status: "upcoming",
    milestones: [
      {
        date: "2025-05-15",
        title: "Inicio de Proyectos",
        description: "Asignación de proyectos individuales"
      },
      {
        date: "2025-07-01",
        title: "Hackathon Intermedio",
        description: "Desarrollo de prototipos"
      },
      {
        date: "2025-08-31",
        title: "Presentación de Proyectos",
        description: "Demo day de aplicaciones"
      }
    ],
    activities: [
      "Desarrollo con Bitcoin Core",
      "APIs de Bitcoin",
      "Lightning Network",
      "Smart Contracts",
      "Integración con aplicaciones web"
    ]
  },
  {
    id: 4,
    phase: "Fase 4: Especialización",
    title: "Áreas de Enfoque",
    description: "Especialización en áreas específicas de Bitcoin",
    startDate: "2025-09-01",
    endDate: "2025-10-31",
    status: "upcoming",
    milestones: [
      {
        date: "2025-09-15",
        title: "Elección de Especialización",
        description: "Selección de área de enfoque"
      },
      {
        date: "2025-10-15",
        title: "Proyecto Final",
        description: "Inicio del proyecto de graduación"
      },
      {
        date: "2025-10-31",
        title: "Entrega de Proyecto Final",
        description: "Presentación del proyecto de graduación"
      }
    ],
    activities: [
      "Seguridad y auditoría",
      "Escalabilidad y Lightning",
      "Privacidad y fungibilidad",
      "Gobernanza y desarrollo",
      "Investigación académica"
    ]
  },
  {
    id: 5,
    phase: "Fase 5: Graduación",
    title: "Presentación y Networking",
    description: "Graduación y conexión con la industria",
    startDate: "2025-11-01",
    endDate: "2025-12-15",
    status: "upcoming",
    milestones: [
      {
        date: "2025-11-15",
        title: "Ceremonia de Graduación",
        description: "Entrega de certificados"
      },
      {
        date: "2025-11-30",
        title: "Job Fair",
        description: "Feria de empleo con empresas"
      },
      {
        date: "2025-12-15",
        title: "Cierre del Programa",
        description: "Evento de networking y despedida"
      }
    ],
    activities: [
      "Presentación de proyectos finales",
      "Networking con empresas",
      "Mentoría post-graduación",
      "Acceso a comunidad de alumni",
      "Oportunidades de empleo"
    ]
  }
];

export const timelineStats = {
  totalPhases: 5,
  totalDuration: "11 meses",
  startDate: "2025-01-15",
  endDate: "2025-12-15",
  totalMilestones: 15,
  totalActivities: 25
};

export const timelineCategories = [
  { id: "preparation", name: "Preparación", color: "blue" },
  { id: "fundamentals", name: "Fundamentos", color: "green" },
  { id: "development", name: "Desarrollo", color: "yellow" },
  { id: "specialization", name: "Especialización", color: "purple" },
  { id: "graduation", name: "Graduación", color: "red" }
];
