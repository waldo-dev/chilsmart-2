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
      id: "software-reality",
      icon: code,
      iconColor: "#0ea5e9",
      title: "El software captura la realidad del negocio",
      description:
        "Desarrollamos software que se adapta a cómo trabajas realmente y captura la realidad de tu operación. Sistemas que registran ventas, inventario, clientes y procesos de forma que reflejen cómo funciona tu negocio realmente. No adaptas tu negocio al software: el software captura tu realidad.",
    },
    {
      id: "analysts-decisions",
      icon: trendingUp,
      iconColor: "#10b981",
      title: "Los analistas convierten información en decisiones",
      description:
        "No solo construimos sistemas que capturan datos: nuestros analistas entienden qué información importa, cómo se relaciona y cómo presentarla para que se convierta en decisiones accionables. El software captura la realidad, los analistas la convierten en decisiones claras y medibles.",
    },
    {
      id: "integrated-systems",
      icon: dollarSign,
      iconColor: "#8b5cf6",
      title: "Todo conectado, todo ordenado",
      description:
        "Construimos sistemas que integran toda tu operación. Ventas conectadas con inventario, clientes vinculados con producción, costos relacionados con resultados. Una sola fuente de verdad que ordena tu operación y facilita las decisiones.",
    },
  ];

  return (
    <SectionWrapper id="services">
      <Container>
        <Fade direction="up" triggerOnce delay={100}>
          <SectionHeader>
            <Heading as="h2" content="Nuestra solución" />
            <Text as="p" content="No somos una empresa de dashboards ni solo de desarrollo. Diseñamos sistemas donde el software captura la realidad del negocio y los analistas convierten esa información en decisiones. Combinamos desarrollo de software y análisis de datos para construir sistemas que ordenan tu operación desde la base y la convierten en algo claro, medible y controlable." />
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
