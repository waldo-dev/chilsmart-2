import React from 'react';
import Button from 'common/components/Button';
import { trackWhatsAppClick } from 'common/hooks/useFacebookPixel';
import {
  Section,
  BackgroundGradient,
  Container,
  Title,
  Description,
  CTAWrapper,
  ScheduleInfo,
} from './finalCTA.style';

const FinalCTA = () => {
  const handleClick = () => {
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

  return (
    <Section>
      <BackgroundGradient />
      <Container>
        <Title as="h2">¿Listo para llevar su empresa al siguiente nivel tecnológico?</Title>
        <Description>
          Hablemos sobre su proyecto y cómo podemos ayudarle a automatizar y escalar sus operaciones.
        </Description>
        <CTAWrapper>
          <Button
            title="Agenda una llamada"
            onClick={handleClick}
            className="cta-button"
          />
          <ScheduleInfo>
            <span className="material-icons">schedule</span>
            Respuesta en menos de 24 horas
          </ScheduleInfo>
        </CTAWrapper>
      </Container>
    </Section>
  );
};

export default FinalCTA;

