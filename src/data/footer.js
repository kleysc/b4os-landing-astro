import { footerQuickLinks, footerResources, socialLinks } from './navigation.js';

export const footerData = {
  brand: {
    logo: "/b4os.png",
    alt: "B4OS - Bitcoin 4 Open Source Logo",
    width: 32,
    height: 32,
    description: "B4OS (Bitcoin 4 Open Source) - Programa gratuito de entrenamiento técnico en Bitcoin para desarrolladores."
  },
  quickLinks: {
    title: "Enlaces Rápidos",
    links: footerQuickLinks
  },
  resources: {
    title: "Recursos",
    links: footerResources
  },
  contact: {
    title: "Contacto B4OS",
    email: {
      address: "hola@b4os.dev",
      label: "hola@b4os.dev"
    },
    social: socialLinks
  },
  bottom: {
    copyright: "© 2025 B4OS (Bitcoin 4 Open Source). Hecho con ❤️ para la comunidad Bitcoin",
    legal: [
      { text: "Términos de Uso", href: "/terminos" },
      { text: "Código de Conducta", href: "/codigo-conducta" }
    ]
  }
};
