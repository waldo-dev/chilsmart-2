import React from 'react';
import Container from 'common/components/UI/Container';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Button from 'common/components/Button';
import Section, { Content } from './cta.style';

const CallToAction = () => {
  const handleOnClick = () => {
    if (typeof window !== "undefined") {
      window.open(
        "https://wa.me/56940676501?text=Hola,%20quiero%20conversar%20sobre%20cómo%20ordenar%20la%20operación%20de%20mi%20empresa"
      );
    }
  };

  return (
    <Section>
      <Container>
        <Content>
          <Heading content="Conversemos sobre tu operación" />
          <Text content="Si tu empresa necesita transformar operaciones desordenadas en sistemas claros, medibles y controlables, conversemos. Entendamos juntos cómo podemos ayudarte a ordenar tu operación y convertir tus datos en decisiones accionables." />
          <Button
            title="Conversemos"
            onClick={handleOnClick}
            className="primary-cta"
          />
          <span>
            Sin compromisos. Sin promesas exageradas. Solo una conversación clara sobre cómo podemos ayudarte.
          </span>
        </Content>
      </Container>
    </Section>
  );
};

export default CallToAction;
