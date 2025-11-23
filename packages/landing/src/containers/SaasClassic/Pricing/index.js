import React from 'react';
import PropTypes from 'prop-types';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Button from 'common/components/Button';
import Container from 'common/components/UI/Container';
import { Icon } from 'react-icons-kit';
import { PROCESS_STEPS } from 'common/data/SaasClassic/process';
import {
  ProcessWrapper,
  ProcessGrid,
  ProcessCard,
  ProcessIcon,
  ProcessNumber,
  SectionBadge,
  SectionDescription,
  CTAWrapper,
} from "./pricing.style";

const ProcessSection = ({
  sectionWrapper,
  secTitleWrapper,
  secHeading,
  buttonFillStyle,
}) => {
  return (
    <Box {...sectionWrapper} id="process_section">
      <Container>
        <Box {...secTitleWrapper}>
          <SectionBadge>Nuestro Proceso de Trabajo</SectionBadge>
          <Heading
            {...secHeading}
            content="Cómo Desarrollamos Software que Ahorra Dinero y Genera Ingresos"
          />
          <SectionDescription>
            Trabajamos con un proceso estructurado y transparente que garantiza resultados medibles. Desde el análisis inicial hasta el soporte continuo, cada paso está diseñado para maximizar el impacto en la rentabilidad de tu empresa.
          </SectionDescription>
        </Box>
        <ProcessWrapper>
          <ProcessGrid>
            {PROCESS_STEPS.map((step, index) => (
              <ProcessCard key={`process-step-${step.id}`}>
                <ProcessNumber>{step.id}</ProcessNumber>
                <ProcessIcon style={{ color: step.iconColor }}>
                  <Icon icon={step.icon} size={48} />
                </ProcessIcon>
                <Heading
                  as="h3"
                  content={step.title}
                  style={{
                    fontSize: '22px',
                    fontWeight: '700',
                    color: '#0f172a',
                    marginBottom: '12px',
                    textAlign: 'center',
                  }}
                />
                <Text
                  content={step.description}
                  style={{
                    fontSize: '15px',
                    color: '#475569',
                    lineHeight: '1.7',
                    textAlign: 'center',
                    margin: '0',
                  }}
                />
              </ProcessCard>
            ))}
          </ProcessGrid>
          <CTAWrapper>
            <Heading
              as="h3"
              content="¿Listo para Ahorrar Dinero y Generar Más Ingresos?"
              style={{
                fontSize: '28px',
                fontWeight: '700',
                color: '#0f172a',
                marginBottom: '16px',
                textAlign: 'center',
              }}
            />
            <Text
              content="Solicita una consultoría gratuita y descubre cómo nuestro software a la medida puede impactar la rentabilidad de tu empresa."
              style={{
                fontSize: '16px',
                color: '#475569',
                lineHeight: '1.7',
                textAlign: 'center',
                marginBottom: '32px',
                maxWidth: '600px',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            />
            <a
              href={`https://wa.me/56940676501?text=${encodeURIComponent(
                'Hola, quiero una consultoría gratuita para ver cómo el software a la medida puede ayudar a mi empresa a ahorrar dinero y generar más ingresos.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', display: 'inline-block' }}
            >
              <Button
                title="Solicitar Consultoría Gratuita"
                {...buttonFillStyle}
              />
            </a>
          </CTAWrapper>
        </ProcessWrapper>
      </Container>
    </Box>
  );
};


ProcessSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    pt: ['60px', '80px', '80px', '80px', '100px'],
    pb: ['60px', '80px', '80px', '80px', '100px'],
    background: 'linear-gradient(180deg, #f8fbff 0%, #e0f2ff 55%, #d9f0ff 100%)',
  },
  secTitleWrapper: {
    mb: ['40px', '50px', '60px'],
    textAlign: 'center',
  },
  secHeading: {
    textAlign: 'center',
    fontSize: ['28px', '32px', '40px', '42px'],
    fontWeight: '700',
    color: '#0f172a',
    letterSpacing: '-0.025em',
    mb: '20px',
    ml: 'auto',
    mr: 'auto',
    lineHeight: '1.2',
    maxWidth: '800px',
  },
  buttonFillStyle: {
    type: "button",
    fontSize: "16px",
    fontWeight: "700",
    color: "#fff",
    borderRadius: "999px",
    pl: "32px",
    pr: "32px",
    bg: "#0ea5e9",
    minWidth: ["200px", "240px"],
    maxWidth: "100%",
    height: "56px",
    boxShadow: "0 18px 30px rgba(14, 165, 233, 0.35)",
  },
};

export default ProcessSection;
