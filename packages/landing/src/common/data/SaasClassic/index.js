import Screenshot1 from '../../assets/image/saasClassic/screen-1.png';

import AuthorOne from '../../assets/image/saasClassic/author-1.jpg';
import AuthorTwo from '../../assets/image/saasClassic/author-2.jpg';
import AuthorThree from '../../assets/image/saasClassic/author-3.jpg';

import { ic_monetization_on } from 'react-icons-kit/md/ic_monetization_on';
import { ic_settings } from 'react-icons-kit/md/ic_settings';
import { pieChart } from 'react-icons-kit/icomoon/pieChart';
import { briefcase } from 'react-icons-kit/fa/briefcase';

export const MENU_ITEMS = [
  {
    label: 'Home',
    path: '#banner_section',
    offset: '0',
  },
  {
    label: 'Screenshot',
    path: '#screenshot_section',
    offset: '0',
  },
  {
    label: 'Feature',
    path: '#feature_section',
    offset: '0',
  },
  {
    label: 'Pricing',
    path: '#pricing_section',
    offset: '0',
  },
  {
    label: 'Testimonial',
    path: '#testimonial_section',
    offset: '0',
  },
];

export const SERVICE_ITEMS = [
  {
    icon: 'flaticon-stopwatch-1',
    title: 'Fast Performance',
  },
  {
    icon: 'flaticon-prototype',
    title: 'Prototyping',
  },
  {
    icon: 'flaticon-code',
    title: 'Coade Export',
  },
  {
    icon: 'flaticon-vectors',
    title: 'Vector Editing',
  },
  {
    icon: 'flaticon-export',
    title: 'Export Presets',
  },
];

export const MONTHLY_PRICING_TABLE = [
  {
    name: 'Atención al Cliente y Agendamiento Automático',
    description: 'Optimiza la experiencia del cliente con atención instantánea por WhatsApp o web. Facilita la gestión de citas con nuestro sistema automático, permitiendo programar y cancelar fácilmente.',
    price: '$100.000',
    priceLabel: '',
    buttonLabel: 'Solicitar Cotización',
    url: '#',
    listItems: [
         {
        content: 'Respuestas automáticas para consultas frecuentes',
      },
      {
        content: 'Integración con WhatsApp Business',
      },
      {
        content: 'Sistema de notificaciones para recordatorios de citas',
      },
      {
        content: 'Historial de interacciones con los clientes',
      },
      {
        content: 'Configuración de horarios y disponibilidad',
      },
      {
        content: 'Análisis de satisfacción del cliente',
      },
      {
        content: 'Interacción multicanal (web, móvil, etc.)',
      },
    ],
  },
  {
    name: 'Creación de Contenido para Redes Sociales',
    description: 'Mejora tu presencia online con nuestro servicio de generación de contenido para redes sociales. Creamos publicaciones atractivas que impulsan la interacción de tu audiencia.',
    price: '$120.000',
    priceLabel: 'Hasta 20 publicaciones',
    buttonLabel: 'Solicitar Cotización',
    url: '#',
    trialButtonLabel: '',
    trialURL: '#',
    listItems: [
       {
        content: 'Publicaciones gráficas personalizadas',
      },
      {
        content: 'Calendario de contenido para programación',
      },
      {
        content: 'Utilización de hashtags estratégicos',
      },
      {
        content: 'Análisis de rendimiento de las publicaciones',
      },
      {
        content: 'Interacción con seguidores y respuesta a comentarios',
      },
    ],
  },
  {
    name: 'Reportes Personalizados de Negocio',
    description: 'Recibe informes detallados directamente en tu chat preferido. Mantente al tanto del rendimiento de tu negocio con análisis rápidos y accesibles.',
    price: '$180.000',
    priceLabel: '(Desde)',
    buttonLabel: 'Solicitar Cotización',
    url: '#',
    trialButtonLabel: '',
    trialURL: '#',
    listItems: [
      {
        content: 'Reportes de desempeño semanal y mensual',
      },
      {
        content: 'Analítica de clientes y tendencias de compra',
      },
      {
        content: 'Gráficos visuales sobre métricas clave',
      },
      {
        content: 'Alertas sobre cambios significativos en el rendimiento',
      },
      {
        content: 'Informes sobre efectividad de campañas',
      },
    ],
  },
];

export const YEARLY_PRICING_TABLE = [
  {
    name: 'Basic Account',
    description: 'For a single client or team who need to build website ',
    price: '$0',
    priceLabel: 'Only for first month',
    buttonLabel: 'Start for free',
    url: '#',
    listItems: [
      {
        content: 'Drag & Drop Builder',
      },
      {
        content: '1,000s of Templates Ready',
      },
      {
        content: 'Blog Tools',
      },
      {
        content: 'eCommerce Store ',
      },
      {
        content: '30+ Webmaster Tools',
      },
    ],
  },
  {
    name: 'Business Account',
    description: 'For Small teams or group who need to build website ',
    price: '$6.00',
    priceLabel: 'Per month & subscription yearly',
    buttonLabel: 'Register Now',
    url: '#',
    trialButtonLabel: 'Or Start 14 Days trail',
    trialURL: '#',
    listItems: [
      {
        content: 'Unlimited secure storage',
      },
      {
        content: '2,000s of Templates Ready',
      },
      {
        content: 'Blog Tools',
      },
      {
        content: '24/7 phone support',
      },
      {
        content: '50+ Webmaster Tools',
      },
    ],
  },
  {
    name: 'Premium Account',
    description: 'For Large teams or group who need to build website ',
    price: '$9.99',
    priceLabel: 'Per month & subscription yearly',
    buttonLabel: 'Register Now',
    url: '#',
    trialButtonLabel: 'Or Start 14 Days trail',
    trialURL: '#',
    listItems: [
      {
        content: 'Drag & Drop Builder',
      },
      {
        content: '3,000s of Templates Ready',
      },
      {
        content: 'Advanced branding',
      },
      {
        content: 'Knowledge base support',
      },
      {
        content: '80+ Webmaster Tools',
      },
    ],
  },
];

export const FAQ_DATA = [
  {
    expend: true,
    title: 'How to contact with Customer Service?',
    description:
      'Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!. ',
  },
  {
    title: 'App installation failed, how to update system information?',
    description:
      'Please read the documentation carefully . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum . ',
  },
  {
    title: 'Website reponse taking time, how to improve?',
    description:
      'At first, Please check your internet connection . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum .',
  },
  {
    title: 'New update fixed all bug and issues?',
    description:
      'We are giving the update of this theme continuously . You will receive an email Notification when we push an update. Always try to be updated with us .',
  },
];

export const FOOTER_WIDGET = [
  {
    title: 'About Us',
    menuItems: [
      {
        url: '#',
        text: 'Support Center',
      },
      {
        url: '#',
        text: 'Customer Support',
      },
      {
        url: '#',
        text: 'About Us',
      },
      {
        url: '#',
        text: 'Copyright',
      },
      {
        url: '#',
        text: 'Popular Campaign',
      },
    ],
  },
  {
    title: 'Our Information',
    menuItems: [
      {
        url: '#',
        text: 'Return Policy',
      },
      {
        url: '#',
        text: 'Privacy Policy',
      },
      {
        url: '#',
        text: 'Terms & Conditions',
      },
      {
        url: '#',
        text: 'Site Map',
      },
      {
        url: '#',
        text: 'Store Hours',
      },
    ],
  },
  {
    title: 'My Account',
    menuItems: [
      {
        url: '#',
        text: 'Press inquiries',
      },
      {
        url: '#',
        text: 'Social media directories',
      },
      {
        url: '#',
        text: 'Images & B-roll',
      },
      {
        url: '#',
        text: 'Permissions',
      },
      {
        url: '#',
        text: 'Speaker requests',
      },
    ],
  },
  {
    title: 'Policy',
    menuItems: [
      {
        url: '#',
        text: 'Application security',
      },
      {
        url: '#',
        text: 'Software principles',
      },
      {
        url: '#',
        text: 'Unwanted software policy',
      },
      {
        url: '#',
        text: 'Responsible supply chain',
      },
    ],
  },
];

export const FEATURES = [
  {
    icon: 'flaticon-hourglass',
    title: 'App Development',
    description:
      'Get your proof tests delivered home collect a sample from the news get design.',
  },
  {
    icon: 'flaticon-trophy-1',
    title: '10 Times Award',
    description:
      'Get your proof tests delivered home collect a sample from the news get design.',
  },
  {
    icon: 'flaticon-upload',
    title: 'Cloud Storage',
    description:
      'Get your proof tests delivered home collect a sample from the news get design.',
  },
  {
    icon: 'flaticon-settings',
    title: 'Customization',
    description:
      'Get your proof tests delivered home collect a sample from the news get design.',
  },
  {
    icon: 'flaticon-strategy',
    title: 'UX Planning',
    description:
      'Get your proof tests delivered home collect a sample from the news get design.',
  },
  {
    icon: 'flaticon-conversation',
    title: 'Customer Support',
    description:
      'Get your proof tests delivered home collect a sample from the news get design.',
  },
];

export const SCREENSHOTS = [
  {
    icon: ic_monetization_on,
    title: 'Budget Overview',
    image: Screenshot1,
  },
  {
    icon: ic_settings,
    title: 'Create & Adjust',
    image: Screenshot1,
  },
  {
    icon: pieChart,
    title: 'View Reports',
    image: Screenshot1,
  },
  {
    icon: briefcase,
    title: 'Integrations',
    image: Screenshot1,
  },
];

export const TESTIMONIALS = [
  {
    title: 'Modern look & trending design',
    review:
      'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
    name: 'Jon Doe',
    designation: 'CEO of Dell Co.',
    avatar: AuthorOne,
  },
  {
    title: 'Modern look & trending design',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore features Lorem ipsum dolor sit amet consectetur.',
    name: 'Jon Doe',
    designation: 'Co Founder of IBM',
    avatar: AuthorTwo,
  },
  {
    title: 'Modern look & trending design',
    review:
      'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
    name: 'Jeny Doe',
    designation: 'Manager of Hp co.',
    avatar: AuthorThree,
  },
];
