import React from 'react';
import {
  Section,
  Container,
  SectionHeader,
  SectionTitle,
  SectionDivider,
  ServicesGrid as ServicesGridStyled,
  ServiceCard,
  ServiceIcon,
  ServiceTitle,
  ServiceDescription,
} from './servicesGrid.style';

const ServicesGrid = () => {
  const services = [
    {
      icon: 'code',
      title: 'Software a medida',
      description: 'Desarrollamos aplicaciones robustas y escalables diseñadas específicamente para resolver sus desafíos de negocio únicos.',
    },
    {
      icon: 'settings_suggest',
      title: 'Automatización',
      description: 'Optimizamos sus procesos repetitivos mediante flujos inteligentes que liberan el potencial de su capital humano.',
    },
    {
      icon: 'hub',
      title: 'Integraciones',
      description: 'Conectamos sus herramientas existentes (CRM, ERP, APIs) para crear un ecosistema de datos unificado y coherente.',
    },
    {
      icon: 'language',
      title: 'Plataformas Web',
      description: 'Experiencias digitales de alto rendimiento enfocadas en la conversión y la mejor experiencia de usuario para su cliente.',
    },
  ];

  return (
    <Section id="servicios">
      <Container>
        <SectionHeader>
          <SectionTitle as="h2">Nuestros Servicios</SectionTitle>
          <SectionDivider />
        </SectionHeader>
        <ServicesGridStyled>
          {services.map((service, index) => (
            <ServiceCard key={index}>
              <ServiceIcon>
                <span className="material-icons">{service.icon}</span>
              </ServiceIcon>
              <ServiceTitle as="h3">{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceCard>
          ))}
        </ServicesGridStyled>
      </Container>
    </Section>
  );
};

export default ServicesGrid;

