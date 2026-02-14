import React, { useState, useEffect } from "react";
import Heading from "common/components/Heading";
import Text from "common/components/Text";
import Button from "common/components/Button";
import NextImage from "common/components/NextImage";
import { trackWhatsAppClick } from "common/hooks/useFacebookPixel";
import Section, {
  BannerContentWrapper,
  BannerContent,
  Subscribe,
  Figure,
  HighlightPill,
  FeatureList,
  FeatureItem,
  TrustSignal,
  TypewriterText,
  AnimatedBadge,
  GlowEffect,
} from "./banner.style";
import dashboard from "common/assets/image/saasCreative/banner-2.png";
import dashboardMobile from "common/assets/image/saasCreative/banner-mobile.png";

const Typewriter = ({ text, speed = 50, delay = 0 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, speed + (currentIndex === 0 ? delay : 0));

      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [currentIndex, text, speed, delay]);

  return (
    <TypewriterText>
      {displayedText}
      {!isComplete && <span className="cursor">|</span>}
    </TypewriterText>
  );
};

const Banner = () => {
  const handleOnClick = () => {
    trackWhatsAppClick();
    if (typeof window !== "undefined") {
      window.open(
        "https://wa.me/56940676501?text=Hola,%20quiero%20conversar%20sobre%20cómo%20ordenar%20la%20operación%20de%20mi%20empresa"
      );
    }
  };

  return (
    <Section id="home">
      <BannerContentWrapper>
        <Figure className="desktop-image" suppressHydrationWarning>
          <NextImage
            src={dashboard}
            alt="Chilsmart - Sistemas digitales que ordenan la operación de empresas y convierten datos en decisiones accionables. Software a medida para pymes en Latinoamérica."
            width={1920}
            height={1080}
            quality={100}
            priority
          />
        </Figure>
        <Figure className="mobile-image" suppressHydrationWarning>
          <NextImage
            src={dashboardMobile}
            alt="Chilsmart - Sistemas digitales que ordenan la operación de empresas y convierten datos en decisiones accionables. Software a medida para pymes en Latinoamérica."
            width={800}
            height={1200}
            quality={100}
            priority
          />
        </Figure>
        <BannerContent>
          <AnimatedBadge className="animate__animated animate__fadeInDown">
            SOFTWARE A MEDIDA
          </AnimatedBadge>
          <Heading
            as="h2"
            className="main-heading animate__animated animate__fadeInUp"
          >
            <Typewriter
              text="Software a la Medida"
              speed={80}
              delay={300}
            />
          </Heading>
          <Text
            className="description-text animate__animated animate__fadeInUp"
            content="Diseñamos y construimos sistemas digitales que ordenan la operación de las empresas y convierten sus datos en decisiones accionables."
          />
          <Subscribe className="animate__animated animate__fadeInUp">
            <Button
              title="Contáctanos"
              onClick={handleOnClick}
              className="primary-cta"
            />
          </Subscribe>
          <TrustSignal className="animate__animated animate__fadeInUp">
            Trabajamos con pymes en Latinoamérica que necesitan sistemas digitales que funcionen en la operación diaria.
          </TrustSignal>
        </BannerContent>
      </BannerContentWrapper>
    </Section>
  );
};

export default Banner;
