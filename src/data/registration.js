export const registrationForm = {
  title: "Regístrate para B4OS 2025",
  subtitle: "Únete a la próxima generación de desarrolladores Bitcoin",
  fields: [
    {
      id: "firstName",
      label: "Nombre",
      type: "text",
      required: true,
      placeholder: "Tu nombre",
      validation: {
        minLength: 2,
        maxLength: 50
      }
    },
    {
      id: "lastName",
      label: "Apellido",
      type: "text",
      required: true,
      placeholder: "Tu apellido",
      validation: {
        minLength: 2,
        maxLength: 50
      }
    },
    {
      id: "email",
      label: "Email",
      type: "email",
      required: true,
      placeholder: "tu@email.com",
      validation: {
        pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"
      }
    },
    {
      id: "phone",
      label: "Teléfono",
      type: "tel",
      required: false,
      placeholder: "+54 9 11 1234-5678",
      validation: {
        pattern: "^\\+?[1-9]\\d{1,14}$"
      }
    },
    {
      id: "city",
      label: "Ciudad",
      type: "select",
      required: true,
      options: "cities", // Referencia a cities.js
      placeholder: "Selecciona tu ciudad"
    },
    {
      id: "country",
      label: "País",
      type: "select",
      required: true,
      options: [
        { value: "AR", label: "Argentina" },
        { value: "CL", label: "Chile" },
        { value: "CO", label: "Colombia" },
        { value: "MX", label: "México" },
        { value: "BR", label: "Brasil" },
        { value: "PE", label: "Perú" },
        { value: "UY", label: "Uruguay" },
        { value: "other", label: "Otro" }
      ],
      placeholder: "Selecciona tu país"
    },
    {
      id: "experience",
      label: "Experiencia en Desarrollo",
      type: "select",
      required: true,
      options: [
        { value: "beginner", label: "Principiante (0-1 años)" },
        { value: "intermediate", label: "Intermedio (1-3 años)" },
        { value: "advanced", label: "Avanzado (3+ años)" }
      ],
      placeholder: "Selecciona tu nivel"
    },
    {
      id: "technologies",
      label: "Tecnologías que conoces",
      type: "multiselect",
      required: false,
      options: [
        { value: "javascript", label: "JavaScript" },
        { value: "python", label: "Python" },
        { value: "java", label: "Java" },
        { value: "cpp", label: "C++" },
        { value: "rust", label: "Rust" },
        { value: "go", label: "Go" },
        { value: "react", label: "React" },
        { value: "nodejs", label: "Node.js" },
        { value: "bitcoin", label: "Bitcoin" },
        { value: "lightning", label: "Lightning Network" },
        { value: "blockchain", label: "Blockchain" }
      ],
      placeholder: "Selecciona las tecnologías que conoces"
    },
    {
      id: "motivation",
      label: "¿Por qué quieres unirte a B4OS?",
      type: "textarea",
      required: true,
      placeholder: "Cuéntanos tu motivación para aprender Bitcoin y blockchain...",
      validation: {
        minLength: 50,
        maxLength: 500
      }
    },
    {
      id: "goals",
      label: "¿Cuáles son tus objetivos profesionales?",
      type: "textarea",
      required: false,
      placeholder: "¿Qué te gustaría lograr después del programa?",
      validation: {
        maxLength: 300
      }
    },
    {
      id: "referral",
      label: "¿Cómo te enteraste de B4OS?",
      type: "select",
      required: false,
      options: [
        { value: "social", label: "Redes Sociales" },
        { value: "friend", label: "Amigo/Colega" },
        { value: "event", label: "Evento/Conferencia" },
        { value: "search", label: "Búsqueda en Internet" },
        { value: "advertisement", label: "Publicidad" },
        { value: "other", label: "Otro" }
      ],
      placeholder: "Selecciona una opción"
    }
  ],
  submitButton: {
    text: "Enviar Registro",
    loadingText: "Enviando...",
    successText: "¡Registro Enviado!"
  },
  successMessage: "¡Gracias por tu interés en B4OS! Te contactaremos pronto con más información.",
  errorMessage: "Hubo un error al enviar tu registro. Por favor, inténtalo de nuevo."
};

export const formValidation = {
  required: "Este campo es obligatorio",
  email: "Por favor, ingresa un email válido",
  phone: "Por favor, ingresa un número de teléfono válido",
  minLength: (min) => `Mínimo ${min} caracteres`,
  maxLength: (max) => `Máximo ${max} caracteres`,
  pattern: "Formato inválido"
};
