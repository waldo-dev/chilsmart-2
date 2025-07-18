import React from "react";
import Container from "common/components/UI/Container";
import Heading from "common/components/Heading";
import Text from "common/components/Text";
import Input from "common/components/Input";
import Button from "common/components/Button";
import NextImage from "common/components/NextImage";
import Section, {
  BannerContentWrapper,
  BannerContent,
  Subscribe,
  Figure,
} from "./banner.style";
import dashboard from "common/assets/image/saasCreative/banner.webp";
import { redirect } from "next/navigation";

const Banner = () => {
  const handleOnClick = () => {
    window.open(
      "https://wa.me/56940676501?text=Hola,%20quiero%20cotizar",
      // "_blank",
      // "noopener,noreferrer,width=500,height=700"
    );
  };

  return (
    <Section id="home">
      <Container width="1400px">
        <BannerContentWrapper>
          <BannerContent>
            <Heading
              content="Automatización inteligente para escalar tu negocio sin esfuerzo"
              className="animate__animated animate__fadeInUp"
            />
            <Text
              className="animate__animated animate__fadeInUp"
              content="En Chilsmart Automatizaciones, desarrollamos herramientas digitales personalizadas que automatizan tareas repetitivas, mejoran tu productividad y te permiten enfocarte en lo que realmente importa: hacer crecer tu negocio."
            />
            <Subscribe className="animate__animated animate__fadeInUp">
              <Button title="¡Transforma tu negocio hoy!" onClick={handleOnClick} />
            </Subscribe>
          </BannerContent>
          <Figure className="animate__animated animate__fadeInUp animate__fast shadow-2xl rounded-xl">
            <NextImage
              src={dashboard}
              alt="dashboard"
              width={800}
              height={800}
              quality={100}
            />
          </Figure>
        </BannerContentWrapper>
      </Container>
    </Section>
  );
};

export default Banner;
