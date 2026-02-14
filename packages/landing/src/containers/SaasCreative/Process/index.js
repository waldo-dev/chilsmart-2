import React from 'react';
import {
  Section,
  Container,
  SectionHeader,
  SectionTitle,
  SectionDescription,
  ProcessContainer,
  ConnectorLine,
  StepsGrid,
  StepItem,
  StepNumber,
  StepTitle,
  StepDescription,
} from './process.style';

const Process = () => {
  const steps = [
    {
      number: '1',
      title: 'Análisis',
      description: 'Entendemos sus necesidades y definimos los objetivos estratégicos.',
    },
    {
      number: '2',
      title: 'Diseño',
      description: 'Creamos la arquitectura técnica y la interfaz de usuario óptima.',
    },
    {
      number: '3',
      title: 'Desarrollo',
      description: 'Construimos la solución con las tecnologías más modernas y seguras.',
    },
    {
      number: '4',
      title: 'Implementación',
      description: 'Despliegue controlado y capacitación para asegurar el éxito.',
    },
    {
      number: '5',
      title: 'Soporte',
      description: 'Mantenimiento continuo y escalabilidad a largo plazo.',
    },
  ];

  return (
    <Section id="proceso">
      <Container>
        <SectionHeader>
          <SectionTitle as="h2">Nuestra Metodología</SectionTitle>
          <SectionDescription>
            Un camino claro desde la idea hasta el soporte continuo.
          </SectionDescription>
        </SectionHeader>
        <ProcessContainer>
          <ConnectorLine />
          <StepsGrid>
            {steps.map((step, index) => (
              <StepItem key={index}>
                <StepNumber>{step.number}</StepNumber>
                <StepTitle as="h3">{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </StepItem>
            ))}
          </StepsGrid>
        </ProcessContainer>
      </Container>
    </Section>
  );
};

export default Process;

