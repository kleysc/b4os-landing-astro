import { programStats, statsLabels } from './stats.js';

export const alumniData = {
  title: "¡B4OS 2024 FUE UN ÉXITO!",
  subtitle: "Conoce a algunos de nuestros graduados más exitosos que ahora contribuyen activamente al ecosistema Bitcoin y proyectos FOSS",
  stats: programStats,
  statsLabels: statsLabels,
  alumni: [
    {
      name: "Fernando Ledesma",
      avatar: "/fledesma.png",
      alt: "Fernando Ledesma",
      social: [
        { type: "github", url: "https://github.com/f3r10", label: "GitHub de Fernando" },
        { type: "linkedin", url: "https://www.linkedin.com/in/fernando-ledesma-ec", label: "LinkedIn de Fernando" }
      ],
      description: {
        sponsor: "B4OS",
        projects: ["SimLN", "LNDK"]
      }
    },
    {
      name: "Pol Espinasa",
      avatar: "/sliv3r.jpg",
      alt: "Pol Espinasa",
      social: [
        { type: "github", url: "https://github.com/polespinasa", label: "GitHub de Pol Espinasa" },
        { type: "twitter", url: "https://x.com/sliv3r__", label: "Twitter de Pol Espinasa" }
      ],
      description: {
        sponsor: { name: "LocalHost", url: "https://lclhost.org/" },
        projects: ["SimLN", "LNDK"]
      }
    },
    {
      name: "Maurice Poirrier",
      avatar: "/maurice.jpg",
      alt: "Maurice Poirrier",
      social: [
        { type: "github", url: "http://github.com/a-mpch", label: "GitHub de Maurice Poirrier" },
        { type: "linkedin", url: "https://www.linkedin.com/in/maurice-poirrier/", label: "LinkedIn de Maurice Poirrier" },
        { type: "twitter", url: "https://x.com/mauricepoirrier", label: "Twitter de Maurice Poirrier" }
      ],
      description: {
        sponsor: { name: "Spiral", url: "https://spiral.xyz" },
        projects: ["LNDK"],
        note: "como mantenedor principal"
      }
    },
    {
      name: "Nymius",
      avatar: "/nymius.jpeg",
      alt: "Nymius",
      social: [
        { type: "github", url: "https://github.com/nymius", label: "GitHub de Nymius" }
      ],
      description: {
        sponsor: { name: "BDK", url: "https://bitcoindevkit.org/" },
        projects: ["BDK(Silent Payments - BIP 352)"]
      }
    },
    {
      name: "Josefina Alliende",
      avatar: "/josefinalliende.jpeg",
      alt: "Josefina Alliende",
      social: [
        { type: "github", url: "https://github.com/josefinalliende", label: "GitHub de Josefina Alliende" },
        { type: "linkedin", url: "https://www.linkedin.com/in/mar%C3%ADa-josefina-alliende/", label: "LinkedIn de Josefina Alliende" }
      ],
      description: {
        sponsor: { name: "White Noise y B4OS", url: "https://github.com/parres-hq/whitenoise" },
        projects: ["White Noise"]
      }
    },
    {
      name: "Javier Montoya",
      avatar: "/jmontoya.jpg",
      alt: "Javier Montoya",
      social: [
        { type: "github", url: "https://github.com/jgmontoya", label: "GitHub de Javier Montoya" },
        { type: "linkedin", url: "https://www.linkedin.com/in/jgmontoya/", label: "LinkedIn de Javier Montoya" }
      ],
      description: {
        sponsor: { name: "White Noise", url: "https://github.com/parres-hq/whitenoise" },
        projects: ["White Noise"]
      }
    }
  ]
};
