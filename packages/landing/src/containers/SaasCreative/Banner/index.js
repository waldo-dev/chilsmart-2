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
        "https://wa.me/56940676501?text=Hola,%20quiero%20conversar%20sobre%20cómo%20ordenar%20la%20operación%20de%20mi%20empresa"
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
              Sistemas que ordenan tu operación
            </HighlightPill>
            <Heading
              as="h1"
              content="Sistemas digitales que ordenan tu operación y convierten tus datos en decisiones"
              className="animate__animated animate__fadeInUp"
            />
            <Text
              className="animate__animated animate__fadeInUp"
              content="Diseñamos y construimos sistemas digitales que ordenan la operación de las empresas y convierten sus datos en decisiones accionables. No somos una empresa de dashboards ni solo de desarrollo: diseñamos sistemas donde el software captura la realidad del negocio y los analistas convierten esa información en decisiones."
            />
            <FeatureList className="animate__animated animate__fadeInUp">
              <FeatureItem>Sistemas que ordenan tu operación desde la base</FeatureItem>
              <FeatureItem>Datos convertidos en decisiones claras y accionables</FeatureItem>
              <FeatureItem>Ingeniería de software combinada con análisis de datos</FeatureItem>
            </FeatureList>
            <Subscribe className="animate__animated animate__fadeInUp">
              <Button
                title="Conversemos"
                onClick={handleOnClick}
                className="primary-cta"
              />
              <Button
                title="Ver cómo trabajamos"
                onClick={handleProductsClick}
                className="secondary-cta"
                variant="textButton"
              />
            </Subscribe>
            <TrustSignal className="animate__animated animate__fadeInUp">
              Trabajamos con pymes en Latinoamérica que necesitan sistemas operativos y de datos que funcionen en la operación diaria.
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
