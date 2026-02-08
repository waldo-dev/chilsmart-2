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
    label: "Proyectos",
    path: "#proyectos",
    offset: "70",
  },
  {
    label: "Servicios",
    path: "#services",
    offset: "70",
  },
  {
    label: "Nosotros",
    path: "#testimonial",
    offset: "70",
  },
  {
    label: "Contacto",
    path: "#contacto",
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
    title: "Accede a la Plataforma",
    text: `Regístrate en nuestra plataforma de BI y accede a todos los dashboards Power BI creados por analistas especialistas. Todo en un solo lugar, de forma segura y organizada.`,
    linkLabel: "Comenzar ahora",
    link: "#",
  },
  {
    id: 2,
    icon: icon2,
    title: "Visualiza tus Dashboards",
    text: `Navega entre todos tus dashboards Power BI desde la plataforma centralizada. Encuentra rápidamente la información que necesitas con nuestro sistema de organización intuitivo.`,
    linkLabel: "Ver dashboards",
    link: "#",
  },
  {
    id: 3,
    icon: icon3,
    title: "Asigna Accesos",
    text: `Controla quién ve qué. Asigna dashboards específicos a diferentes usuarios y equipos de tu empresa. Solo las personas autorizadas verán la información relevante para su rol.`,
    linkLabel: "Gestionar usuarios",
    link: "#",
  },
  {
    id: 4,
    icon: icon4,
    title: "Soporte Profesional",
    text: `Nuestro equipo de analistas especialistas está disponible para ayudarte con cualquier pregunta sobre tus dashboards o la plataforma. Soporte técnico cuando lo necesites.`,
    linkLabel: "Contactar soporte",
    link: "#",
  },
];

export const features = [
  {
    id: 1,
    icon: null,
    title: "Plataformas operativas y agentes de IA",
    description: `Desarrollamos productos SaaS que resuelven problemas operativos específicos. Plataformas que gestionan tu operación día a día, agentes de IA que automatizan procesos, sistemas que escalan con tu negocio. Productos pensados para empresas que necesitan orden y control real.`,
    url: null,
  },
  {
    id: 2,
    icon: null,
    title: "Datos que se convierten en decisiones",
    description: `Construimos sistemas donde el software captura la realidad operativa y los analistas convierten esa información en decisiones. No vendemos dashboards genéricos: diseñamos sistemas de datos que entienden tu operación y transforman información en acciones concretas y decisiones claras.`,
    url: null,
  },
  {
    id: 3,
    icon: null,
    title: "Software diseñado para tu negocio",
    description: `Desarrollamos software a medida cuando necesitas una solución específica para tu operación. Sistemas que se adaptan a cómo trabajas, procesos que reflejan tu realidad, integraciones que conectan todo. Software que ordena tu operación sin forzarte a cambiar cómo trabajas.`,
    url: null,
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

export const setupInicial = {
  id: 0,
  title: "Setup Inicial",
  isOneTime: true,
  price: "Variable según la empresa",
  description: "El setup inicial incluye la configuración específica de tu sistema y se cotiza según las necesidades de tu empresa.",
  features: [
    "Integración de base de datos",
    "Modelado de datos",
    "Configuración de usuarios",
    "Diagnóstico y diseño del sistema",
  ],
};

export const pricing = [
  {
    id: 1,
    title: "Plan Operacional",
    monthlyPrice: "3 UF",
    annualPrice: "2.5 UF",
    annualSavings: "Ahorra 6 UF al año",
    isPro: false,
    features: [
      "Dashboard ejecutivo",
      "Actualización automática",
      "Soporte técnico",
      "Ajustes menores",
    ],
  },
  {
    id: 2,
    title: "Plan Optimización",
    monthlyPrice: "5 UF",
    annualPrice: "4.2 UF",
    annualSavings: "Ahorra 9.6 UF al año",
    isPro: true,
    features: [
      "Todo lo del Plan Operacional",
      "Dashboard de recursos",
      "Reunión mensual con analista",
    ],
  },
  {
    id: 3,
    title: "Plan Estratégico",
    monthlyPrice: "8 UF",
    annualPrice: "6.8 UF",
    annualSavings: "Ahorra 14.4 UF al año",
    isPro: false,
    features: [
      "Todo lo del Plan Optimización",
      "Dashboards a medida",
      "2 reuniones mensuales con analista",
    ],
  },
];

export const faqs = [
  {
    id: 1,
    expend: true,
    title: "01. ¿Cómo funciona la plataforma de BI de Chilsmart?",
    description: `Nuestra plataforma organiza toda tu data y facilita la toma de decisiones. Los analistas de datos especialistas crean dashboards profesionales que convierten tus datos en información clara y accionable. Como administrador, puedes asignar diferentes visualizaciones a usuarios específicos, controlando quién accede a qué información. Todo está ordenado y organizado para que tomar decisiones sea lo más fácil posible.`,
  },
  {
    id: 2,
    title: `02. ¿Qué significa que "somos decisiones, no solo dashboards"?`,
    description: `Significa que nuestro enfoque va más allá de mostrar datos. Organizamos toda tu información para facilitar la toma de decisiones estratégicas. Nuestros analistas especialistas entienden qué datos necesitas ver, cómo estructurarlos y cómo presentarlos para que tu equipo pueda tomar las mejores decisiones rápidamente. No es solo visualización, es convertir datos en decisiones.`,
  },
  {
    id: 3,
    title: "03. ¿Cómo organizan mi data para facilitar las decisiones?",
    description: `Nuestros analistas especialistas trabajan contigo para entender qué información necesitas para tomar decisiones estratégicas. Organizan y estructuran tus datos de forma lógica, creando dashboards profesionales que presentan la información más relevante de manera clara y accionable. Cada visualización está diseñada para facilitar una decisión específica, no solo para mostrar datos.`,
  },
  {
    id: 4,
    title: "04. ¿Cómo controlo qué información ve cada usuario?",
    description: `Nuestra plataforma incluye control de acceso inteligente por usuario. Como administrador, puedes asignar visualizaciones específicas a diferentes usuarios o equipos. Esto garantiza que cada persona acceda solo a la información relevante para su rol, permitiendo que tome decisiones con los datos correctos en el momento adecuado.`,
  },
  {
    id: 5,
    title: "05. ¿Qué necesito para comenzar a usar la plataforma de BI?",
    description: `Para comenzar, solo necesitas registrarte en nuestra plataforma. Nuestro equipo te ayudará con el onboarding inicial, organizando tu data y explicándote cómo acceder a la información. Trabajamos contigo para entender qué decisiones necesitas tomar y qué datos son relevantes. Nuestros analistas especialistas crearán dashboards personalizados que faciliten esas decisiones específicas.`,
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
