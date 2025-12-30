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
      id: "data-organized",
      icon: trendingUp,
      iconColor: "#10b981",
      title: "Toda tu Data Ordenada",
      description:
        "Organizamos y estructuramos toda tu información para que esté lista para la toma de decisiones. No más datos dispersos. Todo ordenado, accesible y fácil de entender para que puedas tomar decisiones estratégicas rápidamente.",
    },
    {
      id: "decision-making",
      icon: code,
      iconColor: "#0ea5e9",
      title: "Facilita la Toma de Decisiones",
      description:
        "Somos decisiones, no solo dashboards. Transformamos tus datos en información clara y accionable que facilita la toma de decisiones estratégicas. Dashboards profesionales creados por analistas especialistas que entienden qué necesitas ver para decidir mejor.",
    },
    {
      id: "access-control",
      icon: dollarSign,
      iconColor: "#8b5cf6",
      title: "Control de Acceso Inteligente",
      description:
        "Cada usuario accede solo a la información relevante para su rol. Control de acceso inteligente que garantiza que las decisiones se tomen con los datos correctos, en el momento adecuado, por las personas indicadas.",
    },
  ];

  return (
    <SectionWrapper id="services">
      <Container>
        <Fade direction="up" triggerOnce delay={100}>
          <SectionHeader>
            <Heading as="h2" content="No Somos Solo Dashboards, Somos Decisiones" />
            <Text as="p" content="Plataforma de Business Intelligence que organiza toda tu data y facilita la toma de decisiones. Convertimos tus datos en información clara y accionable para que tu equipo pueda tomar las mejores decisiones estratégicas." />
            <Text as="p" content="No importa cuánta data tengas. La organizamos, la ordenamos y la presentamos de forma que facilite la toma de decisiones. Dashboards profesionales creados por analistas especialistas, con control de acceso inteligente para que cada usuario vea solo lo que necesita para decidir mejor." />
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
