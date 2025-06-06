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
import icon5 from "common/assets/image/saasCreative/icons/captura-teslectrik.png";
import icon6 from "common/assets/image/saasCreative/icons/captura-connieedelai.png";
import icon7 from "common/assets/image/saasCreative/icons/7.png";
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
    title: "Teslectrik",
    description: `Empresa dedicada a los servicios de paneles solares, necesitaban de una pagina informativa,
    simple y que mejorara la que ya tenían.`,
    url: "https://www.teslectrik.cl",
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
    // icon: icon7,
    title: "Salfa-ing (Sitio en construccion)",
    description: `Empresa dedicada a los servicios de ingenieria electrica, necesitaban de una pagina informativa,
    que cumpliera con especificar todos sus proyectos y servicios de una manera detallada y simple.`,
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
    title: "01. ¿Cuánto tiempo tarda en estar lista mi página web?",
    description: `Depende del tipo de proyecto. Una página informativa puede estar lista en 2 a 4 días hábiles. 
    Una tienda online toma entre 2 a 3 semanas. 
    Los desarrollos a medida requieren más planificación, por lo que el plazo se estima según la complejidad, usualmente entre 3 a 8 semanas.`,
  },
  {
    id: 2,
    title:
      "02. ¿Necesito tener conocimientos técnicos para administrar mi sitio?",
    description: `No. Todos nuestros sitios incluyen una capacitación básica para que puedas administrar tu contenido (productos, textos, imágenes) de forma fácil. Además, entregamos una guía escrita y soporte inicial post-entrega.`,
  },
  {
    id: 3,
    title: "03. ¿Qué necesito para comenzar?",
    description: `Solo necesitas tener claro qué tipo de sitio deseas, y enviarnos algunos elementos como el logo, colores de tu marca, textos e imágenes si ya los tienes. Si no cuentas con eso, también podemos ayudarte a desarrollarlos.`,
  },
  {
    id: 4,
    title: "04. ¿Mi sitio aparecerá en Google?",
    description: `Sí. Todos los sitios incluyen una optimización SEO básica para que sean indexados por buscadores como Google. También podemos ofrecer servicios de posicionamiento más avanzado si lo deseas.`,
  },
  {
    id: 5,
    title: "05.  ¿Ofrecen mantención y hosting después de entregar el sitio?",
    description: `Sí. Contamos con un plan de hosting + mantención por $20.000 CLP mensuales. Este servicio incluye alojamiento rápido y seguro con certificado SSL, actualizaciones mensuales del sitio, ajustes menores, respaldo periódico y soporte técnico ante cualquier problema. Es ideal para que no tengas que preocuparte por nada técnico después de la entrega.`,
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
