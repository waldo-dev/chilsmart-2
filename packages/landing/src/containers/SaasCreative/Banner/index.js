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
        "https://wa.me/56940676501?text=Hola,%20quiero%20conocer%20más%20sobre%20la%20plataforma%20de%20BI"
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
              Toda tu Data Ordenada para Mejores Decisiones
            </HighlightPill>
            <Heading
              content="Transforma tus Datos en Decisiones Estratégicas para tu Empresa"
              className="animate__animated animate__fadeInUp"
            />
            <Text
              className="animate__animated animate__fadeInUp"
              content="No somos solo dashboards. Somos decisiones. Organizamos toda tu data para que la toma de decisiones sea lo más fácil posible. Dashboards profesionales creados por analistas especialistas, con control de acceso inteligente. Toda tu información ordenada y lista para tomar acción."
            />
            <FeatureList className="animate__animated animate__fadeInUp">
              <FeatureItem>Toda tu data organizada y ordenada para facilitar la toma de decisiones estratégicas.</FeatureItem>
              <FeatureItem>Dashboards profesionales creados por analistas especialistas que convierten datos en decisiones.</FeatureItem>
              <FeatureItem>Control de acceso inteligente: cada usuario ve solo la información relevante para su rol.</FeatureItem>
            </FeatureList>
            <Subscribe className="animate__animated animate__fadeInUp">
              <Button
                title="Agenda una llamada"
                onClick={handleOnClick}
                className="primary-cta"
              />
              <Button
                title="Ver cómo funciona"
                onClick={handleProductsClick}
                className="secondary-cta"
                variant="textButton"
              />
            </Subscribe>
            <TrustSignal className="animate__animated animate__fadeInUp">
              Plataforma de BI profesional utilizada por empresas en Chile. Convierte tus datos en decisiones estratégicas con toda tu información ordenada y accesible.
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
