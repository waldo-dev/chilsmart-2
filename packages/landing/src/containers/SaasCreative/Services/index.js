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
import data from "common/data/AgencyModern";
import { Fade } from "react-awesome-reveal";
import { fontSize } from "styled-system";

const Services = () => {
  return (
    <SectionWrapper id="services">
      <Container>
        <Fade direction="up" triggerOnce delay={100}>
          <SectionHeader>
            <Heading content="¿Qué hacemos?" />
            <Text content="Soluciones de automatización que se adaptan a tu negocio" />
            <Text content="Desde bots que responden automáticamente a tus clientes, hasta sistemas que integran tus ventas, reportes y marketing: diseñamos e implementamos soluciones a medida usando IA, APIs y herramientas líderes como n8n, OpenAi" />
          </SectionHeader>
        </Fade>
        <ServiceWrapper>
          {data.services.map((item, index) => (
            <Fade
              direction="up"
              triggerOnce
              delay={130 * item.id}
              key={`service-key-${item.id}`}
            >
              <FeatureBlock
                key={`post_key-${index}`}
                id={`post_id-${item.id}`}
                className="service__item"
                icon={
                  <NextImage
                    src={item.icon}
                    alt={`Blog Image ${item.id}`}
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
