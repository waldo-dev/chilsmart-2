import React from "react";
import Container from "common/components/UI/ContainerTwo";
import NextImage from "common/components/NextImage";
import Text from "common/components/Text";
import Heading from "common/components/Heading";
import FeatureBlock from "common/components/FeatureBlock";
import SectionWrapper, {
  SectionHeader,
  ServiceWrapper,
} from "./services.style";
import { Fade } from "react-awesome-reveal";
import serviceIcon1 from "common/assets/image/agencyModern/services/landing-page.png";
import serviceIcon2 from "common/assets/image/agencyModern/services/online-store.png";
import serviceIcon3 from "common/assets/image/agencyModern/services/settings.png";

const Services = () => {
  const services = [
    {
      id: "erp",
      icon: serviceIcon1,
      title: "ERP para talleres mecánicos",
      description:
        "Gestión completa de órdenes de servicio, cotizaciones, inventario y facturación electrónica, con reportes automáticos y acceso para cada rol del taller.",
    },
    {
      id: "gyms",
      icon: serviceIcon2,
      title: "Automatizaciones para gimnasios y clubes",
      description:
        "Sistemas de membresías, control de asistencia, cobros recurrentes e integraciones con WhatsApp y pasarelas de pago para escalar la experiencia fitness.",
    },
    {
      id: "custom",
      icon: serviceIcon3,
      title: "Desarrollos e integraciones a medida",
      description:
        "Aplicaciones web, APIs y flujos con IA para digitalizar operaciones comerciales, soporte y logística en distintas industrias.",
    },
  ];

  return (
    <SectionWrapper id="services">
      <Container>
        <Fade direction="up" triggerOnce delay={100}>
          <SectionHeader>
            <Heading content="¿Qué hacemos?" />
            <Text content="Construimos plataformas y automatizaciones que resuelven procesos críticos." />
            <Text content="Nuestro ERP impulsa talleres mecánicos y nuestras soluciones a medida optimizan gimnasios y otras industrias, combinando desarrollos propios con integraciones e IA aplicada." />
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
                  <NextImage
                    src={item.icon}
                    alt={item.title || `Servicio ${item.id}`}
                    objectFit="cover"
                  />
                }
                iconPosition="left"
                title={<Heading as="h4" content={item.title} />}
                description={<Text content={item.description} />}
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
