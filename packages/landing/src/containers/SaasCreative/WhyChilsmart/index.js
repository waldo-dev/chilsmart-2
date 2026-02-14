import React from 'react';
import {
  Section,
  Container,
  FeaturesGrid,
  FeatureItem,
  FeatureTitle,
  FeatureDescription,
} from './whyChilsmart.style';

const WhyChilsmart = () => {
  const features = [
    {
      title: 'Soluciones Personalizadas',
      description: 'No creemos en soluciones genéricas. Cada línea de código está pensada para su contexto empresarial específico.',
    },
    {
      title: 'Comunicación Directa',
      description: 'Trato cercano y transparente. Usted habla directamente con los ingenieros que construyen su futuro digital.',
    },
    {
      title: 'Enfoque en ROI',
      description: 'Nuestra prioridad es la rentabilidad. Desarrollamos herramientas que generan valor tangible desde el primer día.',
    },
  ];

  return (
    <Section id="nosotros">
      <Container>
        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureItem key={index}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureItem>
          ))}
        </FeaturesGrid>
      </Container>
    </Section>
  );
};

export default WhyChilsmart;

