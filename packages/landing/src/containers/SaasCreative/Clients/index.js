import React from "react";
import Container from "common/components/UI/Container";
import Heading from "common/components/Heading";
import Text from "common/components/Text";
import { clients } from "common/data/AgencyClassic";
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
  const carouselLogos = [...clients, ...clients, ...clients];

  return (
    <SectionWrapper id="experience">
      <Container width="100%">
        <SectionHeader>
          <Highlight>Confían en Chilsmart</Highlight>
          <Heading content="Empresas que Ahorran Dinero y Generan Más Ingresos con Nuestro Software a la Medida" />
          <Text
            content="Acompañamos a empresas en Chile con desarrollo de software personalizado que impacta directamente en su rentabilidad. Construimos software a la medida que ayuda a reducir costos operativos y aumentar ingresos mediante automatizaciones, optimización de procesos y sistemas que impulsan el crecimiento."
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
        <ClientWrapper>
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
        </ClientWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default Clients;
