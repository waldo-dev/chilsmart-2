import React from "react";
import Container from "common/components/UI/ContainerTwo";
import Text from "common/components/Text";
import Heading from "common/components/Heading";
import FeatureBlock from "common/components/FeatureBlock";
import SectionWrapper, {
  SectionHeader,
  ServiceWrapper,
  IconWrapper,
} from "./services.style";
import { Fade } from "react-awesome-reveal";
import { Icon } from "react-icons-kit";
import { zap } from "react-icons-kit/feather/zap";
import { settings } from "react-icons-kit/feather/settings";
import { briefcase } from "react-icons-kit/feather/briefcase";
import { barChart2 } from "react-icons-kit/feather/barChart2";

const Services = () => {
  const services = [
    {
      id: "startup-development",
      icon: zap,
      iconColor: "#0ea5e9",
      title: "Desarrollos para Startup",
      description:
        "Desarrollamos productos digitales y plataformas SaaS desde cero para startups que buscan escalar rápidamente. Creamos MVPs funcionales, productos mínimos viables y sistemas escalables que crecen con tu negocio.",
    },
    {
      id: "process-automation",
      icon: settings,
      iconColor: "#10b981",
      title: "Automatización de Procesos",
      description:
        "Automatizamos tareas repetitivas y procesos manuales. Integramos Excel, correo electrónico, hojas de cálculo y otros sistemas para eliminar trabajo manual, reducir errores y aumentar la eficiencia operativa.",
    },
    {
      id: "custom-development",
      icon: briefcase,
      iconColor: "#8b5cf6",
      title: "Desarrollo a la Medida",
      description:
        "Desarrollamos software personalizado para negocios y corporaciones. Sistemas que se adaptan a tus procesos específicos, integran con tus herramientas existentes y crecen con tu empresa.",
    },
    {
      id: "data-analysis",
      icon: barChart2,
      iconColor: "#f59e0b",
      title: "Análisis de Datos para Empresas",
      description:
        "Convertimos tus datos en decisiones accionables. Creamos dashboards, reportes y análisis que te permiten entender tu negocio, identificar oportunidades y tomar decisiones informadas basadas en datos reales.",
    },
  ];

  return (
    <SectionWrapper id="services">
      <Container>
        <Fade direction="up" triggerOnce delay={100}>
          <SectionHeader>
            <Heading as="h2" content="Nuestros Servicios" />
            <Text as="p" content="Ofrecemos soluciones digitales completas que van desde el desarrollo de productos para startups hasta automatizaciones y análisis de datos para empresas establecidas. Cada proyecto está diseñado para ordenar tu operación y convertir datos en decisiones." />
          </SectionHeader>
        </Fade>
        <ServiceWrapper>
          {services.map((item, index) => (
            <Fade
              direction="up"
              triggerOnce
              delay={150 * (index + 1)}
              key={`service-key-${item.id}`}
            >
              <FeatureBlock
                key={`post_key-${index}`}
                id={`post_id-${item.id}`}
                className="service__item"
                icon={
                  <IconWrapper style={{ color: item.iconColor }}>
                    <Icon icon={item.icon} size={56} />
                  </IconWrapper>
                }
                iconPosition="top"
                title={<Heading as="h3" content={item.title} />}
                description={<Text as="p" content={item.description} />}
              />
            </Fade>
          ))}
        </ServiceWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default Services;
