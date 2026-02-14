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
    trackWhatsAppClick();
    if (typeof window !== 'undefined') {
      window.open(
        'https://wa.me/56940676501?text=Hola,%20quiero%20agendar%20una%20llamada%20para%20conversar%20sobre%20mi%20proyecto',
        '_blank'
      );
    }
  };

  return (
    <Section>
      <BackgroundGradient />
      <Container>
        <Title>¿Listo para llevar su empresa al siguiente nivel tecnológico?</Title>
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

