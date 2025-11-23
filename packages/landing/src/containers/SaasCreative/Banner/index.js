import React from "react";
import Container from "common/components/UI/Container";
import Heading from "common/components/Heading";
import Text from "common/components/Text";
import Button from "common/components/Button";
import NextImage from "common/components/NextImage";
import Section, {
  BannerContentWrapper,
  BannerContent,
  Subscribe,
  Figure,
  HighlightPill,
  FeatureList,
  FeatureItem,
  TrustSignal,
} from "./banner.style";
import dashboard from "common/assets/image/saasCreative/banner.webp";

const Banner = () => {
  const handleOnClick = () => {
    if (typeof window !== "undefined") {
      window.open(
        "https://wa.me/56940676501?text=Hola,%20quiero%20cotizar"
      );
    }
  };

  const handleProductsClick = () => {
    if (typeof window !== "undefined") {
      const element = document.querySelector("#solutions");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      window.location.hash = "#solutions";
    }
  };

  return (
    <Section id="home">
      <Container width="1400px">
        <BannerContentWrapper>
          <BannerContent>
            <HighlightPill>
              Desarrollo de Software a la Medida en Chile
            </HighlightPill>
            <Heading
              content="Desarrollo de Software a la Medida que Ayuda a tu Empresa a Ahorrar y Generar Más Dinero"
              className="animate__animated animate__fadeInUp"
            />
            <Text
              className="animate__animated animate__fadeInUp"
              content="Chilsmart es una empresa de desarrollo de software a la medida en Chile. Creamos software personalizado que ayuda a empresas a ahorrar costos operativos y generar más ingresos mediante automatizaciones inteligentes, optimización de procesos y sistemas que impulsan tu rentabilidad."
            />
            <FeatureList className="animate__animated animate__fadeInUp">
              <FeatureItem>Software a medida que reduce costos operativos y aumenta la eficiencia.</FeatureItem>
              <FeatureItem>Automatizaciones que generan más ventas y mejoran la experiencia del cliente.</FeatureItem>
            </FeatureList>
            <Subscribe className="animate__animated animate__fadeInUp">
              <Button
                title="Agenda una llamada"
                onClick={handleOnClick}
                className="primary-cta"
              />
              <Button
                title="Ver nuestros casos de éxito"
                onClick={handleProductsClick}
                className="secondary-cta"
                variant="textButton"
              />
            </Subscribe>
            <TrustSignal className="animate__animated animate__fadeInUp">
              Profesionales calificados ayudando a empresas en Chile a ahorrar costos y aumentar sus ingresos con desarrollo de software a la medida.
            </TrustSignal>
          </BannerContent>
          {/*<Figure className="animate__animated animate__fadeInUp animate__fast shadow-2xl rounded-xl">
            <NextImage
              src={dashboard}
              alt="dashboard"
              width={800}
              height={800}
              quality={100}
            />
          </Figure>*/}
        </BannerContentWrapper>
      </Container>
    </Section>
  );
};

export default Banner;
