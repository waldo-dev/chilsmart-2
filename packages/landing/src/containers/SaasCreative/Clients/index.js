import React from "react";
import Container from "common/components/UI/Container";
import Heading from "common/components/Heading";
import Text from "common/components/Text";
import Logo from "common/components/UIElements/Logo";

import SectionWrapper, {
  SectionHeader,
  Highlight,
  ClientWrapper,
  SliderMask,
  ImageSlider,
  SliderTrack,
  ImageSlide,
  ClientStats,
  StatItem,
} from "./clients.style";

const Clients = () => {
  // Duplicamos los logos 3 veces para un loop perfecto sin delay
  // const carouselLogos = [...clients, ...clients, ...clients];

  return (
    <SectionWrapper id="experience">
      <Container width="100%">
        <SectionHeader>
          <Highlight>Empresas que Toman Mejores Decisiones con Nuestra Plataforma</Highlight>
          <Heading content="Plataforma de BI Utilizada por Empresas que Necesitan Organizar su Data para Tomar Decisiones Estratégicas" />
          <Text
            content="Nuestra plataforma de Business Intelligence ayuda a empresas en Chile a organizar toda su data y facilitar la toma de decisiones. Con dashboards profesionales creados por analistas especialistas y control de acceso inteligente, convertimos tus datos en decisiones estratégicas."
          />
          <ClientStats>
            <StatItem>
              <span>40+</span>
              <small>implementaciones activas</small>
            </StatItem>
            <StatItem>
              <span>100%</span>
              <small>profesionales calificados</small>
            </StatItem>
            {/*<StatItem>
              <span>5</span>
              <small>industrias clave en LatAm</small>
            </StatItem>*/}
          </ClientStats>
        </SectionHeader>
        {/*<ClientWrapper>
          <SliderMask />
          <ImageSlider>
            <SliderTrack>
              {carouselLogos.map((item, index) => (
                <ImageSlide key={`client_logo_${index}`}>
                  <Logo href="#" logoSrc={item} className="client-logo" />
                </ImageSlide>
              ))}
            </SliderTrack>
          </ImageSlider>
        </ClientWrapper>*/}
      </Container>
    </SectionWrapper>
  );
};

export default Clients;
