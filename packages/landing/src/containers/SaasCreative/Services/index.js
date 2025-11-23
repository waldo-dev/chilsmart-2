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
import { dollarSign } from "react-icons-kit/feather/dollarSign";
import { trendingUp } from "react-icons-kit/feather/trendingUp";
import { code } from "react-icons-kit/feather/code";

const Services = () => {
  const services = [
    {
      id: "cost-reduction",
      icon: dollarSign,
      iconColor: "#10b981",
      title: "Sistemas que Reducen Costos Operativos",
      description:
        "Desarrollamos software a la medida que automatiza procesos, reduce errores y elimina tareas manuales. Esto se traduce en ahorro de tiempo y dinero, permitiendo que tu equipo se enfoque en actividades que generan valor.",
    },
    {
      id: "revenue-increase",
      icon: trendingUp,
      iconColor: "#0ea5e9",
      title: "Software que Aumenta tus Ingresos",
      description:
        "Creamos sistemas personalizados que optimizan ventas, mejoran la experiencia del cliente y automatizan procesos comerciales. Software a medida que ayuda a tu empresa a generar más dinero mediante mejor conversión y retención de clientes.",
    },
    {
      id: "custom-development",
      icon: code,
      iconColor: "#8b5cf6",
      title: "Desarrollo de Software a la Medida e Integraciones",
      description:
        "Desarrollamos software personalizado para empresas: aplicaciones web, APIs y automatizaciones con IA que digitalizan operaciones y optimizan procesos. Cada solución está diseñada para ayudarte a ahorrar dinero y aumentar tus ingresos.",
    },
  ];

  return (
    <SectionWrapper id="services">
      <Container>
        <Fade direction="up" triggerOnce delay={100}>
          <SectionHeader>
            <Heading as="h2" content="Desarrollo de Software para Empresas que Ahorran Dinero y Generan Más Ingresos" />
            <Text as="p" content="Somos especialistas en desarrollo de software a la medida. Construimos plataformas y automatizaciones que optimizan procesos, reducen costos operativos y aumentan los ingresos de tu empresa." />
            <Text as="p" content="Ofrecemos desarrollo de software personalizado para empresas de todas las industrias. Cada solución está diseñada para ayudarte a ahorrar dinero en operaciones y generar más ingresos mediante mejoras en eficiencia, automatización de procesos y optimización de ventas." />
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
          <div className="sparkle" />
          <div className="sparkle" />
          <div className="sparkle" />
          <div className="sparkle" />
          <div className="sparkle" />
          <div className="sparkle" />
          <div className="sparkle" />
          <div className="sparkle" />
    </SectionWrapper>
  );
};

export default Services;
