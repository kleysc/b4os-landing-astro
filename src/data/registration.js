export const registrationData = {
  title: "¿Listo para unirte a B4OS 2025?",
  description: "El programa B4OS 2025 está abierto para desarrolladores senior de América Latina, el Caribe y España. El proceso de registro es completamente gratuito.",
  requirements: {
    title: "Requisitos para Aplicar:",
    items: [
      "Experiencia en desarrollo de software (2+ años)",
      "Conocimientos sólidos en lenguajes como C++, Rust, Python o JavaScript",
      "Interés genuino en contribuir al ecosistema open source de Bitcoin",
      "Disponibilidad para invertir de 5 a 10 horas semanales",
      "Resiliencia para completar el programa en su totalidad"
    ]
  },
  period: {
    text: "Registro abierto: 6 - 31 de Agosto 2025"
  },
  form: {
    title: "Formulario de Registro B4OS 2025",
    fields: [
      {
        type: "text",
        id: "name",
        name: "name",
        label: "Nombre o pseudónimo *",
        required: true,
        help: "Puedes usar tu nombre real o un pseudónimo"
      },
      {
        type: "email",
        id: "email",
        name: "email",
        label: "Email *",
        required: true,
        help: "Revisa tu email dos veces, lo usaremos para comunicarnos contigo"
      },
      {
        type: "select",
        id: "country",
        name: "country",
        label: "País *",
        required: true,
        help: "Selecciona el país donde resides actualmente",
        placeholder: "Selecciona tu país"
      },
      {
        type: "select",
        id: "city",
        name: "city",
        label: "Ciudad *",
        required: true,
        help: "Tu ciudad de residencia actual",
        placeholder: "Primero selecciona un país",
        disabled: true
      },
      {
        type: "select",
        id: "experience",
        name: "experience",
        label: "Años de experiencia en desarrollo *",
        required: true,
        options: [
          { value: "", text: "Selecciona" },
          { value: "2-5", text: "2-5 años" },
          { value: "5-10", text: "5-10 años" },
          { value: "10+", text: "Más de 10 años" }
        ]
      },
      {
        type: "select",
        id: "dev-language",
        name: "dev-language",
        label: "Lenguaje de desarrollo donde mejor programas *",
        required: true,
        help: "Selecciona el lenguaje donde te sientes más productivo/a",
        placeholder: "Selecciona un lenguaje...",
        options: [
          { value: "", text: "Selecciona un lenguaje..." },
          { value: "javascript", text: "JavaScript" },
          { value: "python", text: "Python" },
          { value: "java", text: "Java" },
          { value: "typescript", text: "TypeScript" },
          { value: "csharp", text: "C#" },
          { value: "cpp", text: "C++" },
          { value: "php", text: "PHP" },
          { value: "go", text: "Go" },
          { value: "rust", text: "Rust" },
          { value: "swift", text: "Swift" },
          { value: "kotlin", text: "Kotlin" },
          { value: "ruby", text: "Ruby" },
          { value: "scala", text: "Scala" },
          { value: "dart", text: "Dart" },
          { value: "c", text: "C" },
          { value: "r", text: "R" },
          { value: "matlab", text: "MATLAB" },
          { value: "perl", text: "Perl" },
          { value: "lua", text: "Lua" },
          { value: "haskell", text: "Haskell" },
          { value: "elixir", text: "Elixir" },
          { value: "clojure", text: "Clojure" },
          { value: "otro", text: "Otro" }
        ]
      },
      {
        type: "textarea",
        id: "technologies",
        name: "technologies",
        label: "Otros lenguajes y tecnologías que dominas *",
        required: true,
        placeholder: "Ejemplo: C++, Python, JavaScript, Rust...",
        help: "Indica que otros lenguajes y tecnologías dominas"
      },
      {
        type: "url",
        id: "github",
        name: "github",
        label: "GitHub / Portfolio *",
        required: true,
        placeholder: "https://github.com/tu-usuario",
        help: "Comparte tu perfil de GitHub o portfolio"
      },
      {
        type: "textarea",
        id: "motivation",
        name: "motivation",
        label: "¿Qué te interesa del ecosistema de Bitcoin y de las tecnologías \"freedom tech\"? *",
        required: true,
        help: "Nos interesa saber qué aspectos específicos del ecosistema de Bitcoin te apasionan (Privacidad, Seguridad, Resistencia a la censura, Descentralización, etc.)."
      }
    ],
    terms: {
      text: "Acepto los términos y condiciones del programa",
      link: "/terminos"
    },
    submit: "Enviar Aplicación a B4OS 2025"
  }
};
