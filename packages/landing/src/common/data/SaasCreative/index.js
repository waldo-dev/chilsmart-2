import envato from "common/assets/image/saasCreative/logos/envato.png";
import evernote from "common/assets/image/saasCreative/logos/evernote.png";
import forbes from "common/assets/image/saasCreative/logos/forbes.png";
import geekwire from "common/assets/image/saasCreative/logos/geekwire.png";
import slack from "common/assets/image/saasCreative/logos/slack.png";
import usaToday from "common/assets/image/saasCreative/logos/usa-today.png";
import icon1 from "common/assets/image/saasCreative/icons/1.png";
import icon2 from "common/assets/image/saasCreative/icons/2.png";
import icon3 from "common/assets/image/saasCreative/icons/3.png";
import icon4 from "common/assets/image/saasCreative/icons/4.png";
import icon5 from "common/assets/image/saasCreative/icons/mgi.png";
import icon6 from "common/assets/image/saasCreative/icons/captura-connieedelai.png";
import icon7 from "common/assets/image/saasCreative/icons/secco.png";
import icon8 from "common/assets/image/saasCreative/icons/8.png";
import icon9 from "common/assets/image/saasCreative/icons/9.png";
import icon10 from "common/assets/image/saasCreative/icons/10.png";
import user1 from "common/assets/image/saasCreative/user1.png";
import user2 from "common/assets/image/saasCreative/user2.png";
import user3 from "common/assets/image/saasCreative/user3.png";

export const menu_items = [
  {
    label: "Inicio",
    path: "#home",
    offset: "70",
  },
  {
    label: "Quienes Somos",
    path: "#how-to",
    offset: "70",
  },
  {
    label: "Servicios",
    path: "#services",
    offset: "70",
  },
  {
    label: "Testimonios",
    path: "#testimonial",
    offset: "70",
  },
  {
    label: "Precios",
    path: "#pricing",
    offset: "70",
  },
  {
    label: "Preguntas Frecuentes",
    path: "#faq",
    offset: "70",
  },
];

export const clients = [envato, evernote, forbes, geekwire, slack, usaToday];

export const howTos = [
  {
    id: 1,
    icon: icon1,
    title: "Create Free Account",
    text: `As a delivery driver, you'll make reliable money—working anytime, anywhere.`,
    linkLabel: "Start Earning",
    link: "#",
  },
  {
    id: 2,
    icon: icon2,
    title: "Monitor user Analytics",
    text: `Grow your business and reach new customers by partnering with us.`,
    linkLabel: "Sign up your store",
    link: "#",
  },
  {
    id: 3,
    icon: icon3,
    title: "Safe & Trusted",
    text: `Get the best DoorDash experience with live order tracking.`,
    linkLabel: "Get the app",
    link: "#",
  },
  {
    id: 4,
    icon: icon4,
    title: "Fast Customer Support",
    text: `Get the best DoorDash experience with live order tracking.`,
    linkLabel: "Start Earning",
    link: "#",
  },
];

export const features = [
  {
    id: 1,
    icon: icon5,
    title: "MGI Asesorías",
    description: `Empresa que presta servicios de auditorías a locales y comedores, principalmente en zonas mineras.`,
    url: "https://foodsafe.mgiasesorias.com",
  },
  {
    id: 2,
    icon: icon6,
    title: "Connie Edelai",
    description: `Coach dedicada a los entrenamientos y consejos nutricionales, necesitaba de un desarrollo a medida
    de una plataforma 100% personalizada para su negocio.`,
    url: "https://www.connieedelai.com",
  },
  {
    id: 3,
    icon: icon7,
    title: "Secco Automotriz",
    description: `Empresa dedicada a los servicios de revisiones pre compra para vehiculos, necesitaban de un sistema para la gestion de sus clientes y reservas.`,
    url: "https://www.seccoautomotriz.cl",
  },
];

export const testimonials = [
  {
    id: 1,
    avatar: user1,
    name: "Mariana Dickey",
    designation: "UI Designer",
    quote: `OMG! I cannot believe that I have got a brand new landing page after getting this template we are able to use our most used e-commerce template with modern and trending design.`,
  },
  {
    id: 2,
    avatar: user2,
    name: "Jonathan Taylor",
    designation: "CEO at Creativex",
    quote: `We’re driven beyond just finishing the projects. We want to find solutions with the assessment. OMG! I cannot believe that I have got a brand new landing page.`,
  },
  {
    id: 3,
    avatar: user3,
    name: "Krish Kendall",
    designation: "Creative Director",
    quote: `Pick one of our stock themes, or create your custom theme with the most advanced theme editor on any online survey building tool.`,
  },
];

export const pricing = [
  {
    id: 1,
    title: "Enjoy one month trial",
    isPro: false,
    features: [
      "Manage conversation directly",
      "Chat prompt supported",
      "Enjoy limited features from trial plans",
      "Own analytics platform",
    ],
  },
  {
    id: 2,
    title: "$15 with Ultimate feature",
    isPro: true,
    features: [
      "Manage ultimate conversation directly",
      "Chat prompt supported",
      "Enjoy unlimited features from paid plans",
      "Own analytics platform",
    ],
  },
];

export const faqs = [
  {
    id: 1,
    expend: true,
    title: "01. ¿Cómo funciona el desarrollo de software a la medida con Chilsmart?",
    description: `Nuestro proceso de desarrollo de software para empresas inicia con workshops de discovery para mapear procesos, métricas y stakeholders. Luego definimos roadmap y prototipos, avanzamos en sprints semanales con entregas continuas de software personalizado y cerramos con despliegue + soporte acompañando a tus equipos.`,
  },
  {
    id: 2,
    title: "02. ¿Cuánto tarda el desarrollo de software a medida para mi empresa?",
    description: `El tiempo de desarrollo de software personalizado varía según la complejidad. Para nuestro ERP para talleres mecánicos, el onboarding base toma entre 2 y 4 semanas. Proyectos de software a la medida más complejos (integraciones o módulos extra) pueden extenderse entre 6 y 12 semanas.`,
  },
  {
    id: 3,
    title: "03. ¿Qué incluye el soporte post-lanzamiento del software para empresas?",
    description: `Los founders seguimos involucrados en cada proyecto de desarrollo de software. Incluimos soporte evolutivo, mejoras priorizadas y monitoreo de métricas clave para asegurarnos de que el software a la medida siga aportando valor operativo a tu empresa.`,
  },
  {
    id: 4,
    title: "04. ¿Pueden integrar el software a la medida con sistemas existentes?",
    description: `Sí. En nuestro desarrollo de software para empresas trabajamos con APIs, conectores nativos y herramientas como n8n para integrar ERP/CRM, WhatsApp Business, pasarelas de pago o BI. Evaluamos cada stack antes de proponer la arquitectura del software personalizado.`,
  },
  {
    id: 5,
    title: "05. ¿Qué necesito para comenzar un proyecto de desarrollo de software a la medida?",
    description: `Para iniciar el desarrollo de software para tu empresa necesitas: una sesión de descubrimiento con tus líderes de operación/comercial, acceso a la información del proceso actual y definir responsables internos. Nosotros guiamos el resto: alcance, backlog y plan de implementación del software a la medida.`,
  },
];

export const footer = [
  {
    id: 1,
    title: "Company",
    list: [
      {
        id: 1,
        title: "About",
        link: "#",
      },
      {
        id: 2,
        title: "Affiliate",
        link: "#",
      },
      {
        id: 3,
        title: "Careers & Culture",
        link: "#",
      },
      {
        id: 4,
        title: "Blog",
        link: "#",
      },
      {
        id: 5,
        title: "Press",
        link: "#",
      },
    ],
  },
  {
    id: 2,
    title: "About Us",
    list: [
      {
        id: 1,
        title: "Support Center",
        link: "#",
      },
      {
        id: 2,
        title: "Customer Support",
        link: "#",
      },
      {
        id: 3,
        title: "About Us",
        link: "#",
      },
      {
        id: 4,
        title: "Copyright",
        link: "#",
      },
      {
        id: 5,
        title: "Popular Campaign",
        link: "#",
      },
    ],
  },
  {
    id: 3,
    title: "Our Information",
    list: [
      {
        id: 1,
        title: "Return Policy ",
        link: "#",
      },
      {
        id: 2,
        title: "Privacy Policy",
        link: "#",
      },
      {
        id: 3,
        title: "Terms & Conditions",
        link: "#",
      },
      {
        id: 4,
        title: "Site Map",
        link: "#",
      },
      {
        id: 5,
        title: "Store Hours",
        link: "#",
      },
    ],
  },
  {
    id: 4,
    title: "My Account",
    list: [
      {
        id: 1,
        title: "Press inquiries",
        link: "#",
      },
      {
        id: 2,
        title: "Social media ",
        link: "#",
      },
      {
        id: 3,
        title: "directories",
        link: "#",
      },
      {
        id: 4,
        title: "Images & B-roll",
        link: "#",
      },
      {
        id: 5,
        title: "Permissions",
        link: "#",
      },
    ],
  },
  {
    id: 5,
    title: "Policy",
    list: [
      {
        id: 1,
        title: "Application security",
        link: "#",
      },
      {
        id: 2,
        title: "Software principles",
        link: "#",
      },
      {
        id: 3,
        title: "Unwanted software policy",
        link: "#",
      },
      {
        id: 4,
        title: "Responsible supply chain",
        link: "#",
      },
    ],
  },
];
