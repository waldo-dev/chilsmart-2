import React, { useState, useEffect } from 'react';
import Button from 'common/components/Button';
import { trackWhatsAppClick } from 'common/hooks/useFacebookPixel';
import {
  HeroSection,
  HeroContent,
  Badge,
  BadgePing,
  Title,
  Description,
  CTAButtons,
  GradientBackground,
  TypewriterText,
} from './hero.style';

const Typewriter = ({ text, speed = 50, delay = 0, highlightText = '' }) => {
  const [displayedText, setDisplayedText] = useState('');
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

  // Función para renderizar el texto con highlight
  const renderText = () => {
    if (!highlightText || !displayedText.includes(highlightText)) {
      return displayedText;
    }

    const highlightIndex = displayedText.indexOf(highlightText);
    const beforeHighlight = displayedText.substring(0, highlightIndex);
    const afterHighlight = displayedText.substring(highlightIndex + highlightText.length);

    return (
      <>
        {beforeHighlight}
        <span className="highlight">{highlightText}</span>
        {afterHighlight}
      </>
    );
  };

  return (
    <TypewriterText>
      {renderText()}
      {!isComplete && <span className="cursor">|</span>}
    </TypewriterText>
  );
};

const Hero = () => {
  const handlePrimaryClick = () => {
    if (typeof window !== 'undefined' && window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/waldo-chilsmart/30min'
      });
    } else if (typeof window !== 'undefined') {
      window.open(
        'https://calendly.com/waldo-chilsmart/30min',
        '_blank',
        'width=700,height=600'
      );
    }
  };

  const handleWhatsAppClick = () => {
    trackWhatsAppClick();
    if (typeof window !== 'undefined') {
      window.open(
        'https://wa.me/56940676501?text=Hola,%20quiero%20solicitar%20una%20cotización%20para%20mi%20proyecto',
        '_blank'
      );
    }
  };

  const handleSecondaryClick = (e) => {
    e.preventDefault();
    const serviciosSection = document.getElementById('servicios');
    if (serviciosSection) {
      serviciosSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroSection id="home">
      <GradientBackground />
      <HeroContent>
        <Badge>
          <BadgePing>
            <span className="ping"></span>
            <span className="dot"></span>
          </BadgePing>
          Software Engineering Excellence
        </Badge>
        <Title itemProp="headline">
          <Typewriter
            text="Transformamos su visión en software escalable y eficiente"
            highlightText="software escalable"
            speed={60}
            delay={500}
          />
        </Title>
        <Description itemProp="description">
          Desarrollo a medida, automatización y soluciones digitales diseñadas para impulsar el crecimiento de su empresa en Chile.
        </Description>
        <CTAButtons>
          <Button
            title="Agendar reunión"
            onClick={handlePrimaryClick}
            className="primary-button"
          />
          <Button
            title="Ver servicios"
            onClick={handleSecondaryClick}
            className="secondary-button"
          />
        </CTAButtons>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;

