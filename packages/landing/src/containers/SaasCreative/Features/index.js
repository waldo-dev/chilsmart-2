import React from "react";
import Container from "common/components/UI/Container";
import Heading from "common/components/Heading";
import Text from "common/components/Text";
import { Icon } from "react-icons-kit";
import { users } from "react-icons-kit/feather/users";
import { target } from "react-icons-kit/feather/target";
import { zap } from "react-icons-kit/feather/zap";
import { heart } from "react-icons-kit/feather/heart";
import { Fade } from "react-awesome-reveal";
import Section, {
  SectionHeading,
  ValuesGrid,
  ValueItem,
  IconWrapper,
  HighlightPill,
  Description,
  AboutSection,
  AboutContent,
  AboutText,
  AboutGrid,
  AboutCard,
} from "./features.style";

const values = [
  {
    id: 1,
    icon: users,
    iconColor: "#0ea5e9",
    title: "Orientación al Cliente",
    description: "Conocemos a fondo las necesidades de tu negocio para entregar soluciones que generen valor real y resultados medibles.",
  },
  {
    id: 2,
    icon: heart,
    iconColor: "#10b981",
    title: "Satisfacción del Usuario",
    description: "Creamos soluciones que facilitan el trabajo diario, mejorando la experiencia y la percepción del servicio en cada interacción.",
  },
  {
    id: 3,
    icon: target,
    iconColor: "#8b5cf6",
    title: "Focalización Estratégica",
    description: "Identificamos dónde la tecnología aporta mayor valor a tu negocio, priorizando lo que realmente impacta en tus resultados.",
  },
  {
    id: 4,
    icon: zap,
    iconColor: "#f59e0b",
    title: "Optimización de Recursos",
    description: "Garantizamos el uso racional y eficiente de los recursos disponibles, maximizando el retorno de tu inversión tecnológica.",
  },
];

const Features = () => {
  return (
    <Section id="nosotros">
      <Container width="1400px">
        {/* Sección de Valores */}
        <Fade direction="up" triggerOnce>
          <SectionHeading>
            <HighlightPill>Nuestros Valores</HighlightPill>
            <Heading content="Lo que nos guía en cada proyecto" />
            <Description>
              Estos principios fundamentan nuestro trabajo y definen cómo colaboramos con nuestros clientes para alcanzar sus objetivos.
            </Description>
          </SectionHeading>
        </Fade>

        <ValuesGrid>
          {values.map((value, index) => (
            <Fade
              direction="up"
              triggerOnce
              delay={100 * (index + 1)}
              key={value.id}
            >
              <ValueItem>
                <IconWrapper style={{ color: value.iconColor }}>
                  <Icon icon={value.icon} size={48} />
                </IconWrapper>
                <Heading as="h4" content={value.title} />
                <Text content={value.description} />
              </ValueItem>
            </Fade>
          ))}
        </ValuesGrid>

        {/* Sección Sobre Nosotros */}
        <Fade direction="up" triggerOnce delay={500}>
          <AboutSection>
            <SectionHeading>
              <HighlightPill>Sobre Nosotros</HighlightPill>
              <Heading content="Un equipo dedicado a tu crecimiento" />
            </SectionHeading>

            <AboutContent>
              <AboutText>
                <Heading as="h3" content="Ingeniería y Pasión" />
                <Text
                  content="En Chilsmart combinamos nuestra pasión por la tecnología con un compromiso genuino hacia nuestros clientes. No solo desarrollamos software: creamos soluciones que ayudan a tu negocio a crecer de manera sostenible."
                />
              </AboutText>

              <AboutGrid>
                <AboutCard>
                  <IconWrapper style={{ color: "#0ea5e9" }}>
                    <Icon icon={target} size={40} />
                  </IconWrapper>
                  <Heading as="h4" content="Nuestra Visión" />
                  <Text
                    content="Nos preocupamos por entender profundamente tus necesidades para contribuir con soluciones que permitan crear valor real en tu operación."
                  />
                </AboutCard>

                <AboutCard>
                  <IconWrapper style={{ color: "#10b981" }}>
                    <Icon icon={users} size={40} />
                  </IconWrapper>
                  <Heading as="h4" content="Quiénes Somos" />
                  <Text
                    content="Un equipo de profesionales que apoya y colabora en conjunto con nuestros clientes para encontrar soluciones que resuelvan sus problemas de negocio de manera efectiva."
                  />
                </AboutCard>

                <AboutCard>
                  <IconWrapper style={{ color: "#8b5cf6" }}>
                    <Icon icon={heart} size={40} />
                  </IconWrapper>
                  <Heading as="h4" content="Entendemos tu Negocio" />
                  <Text
                    content="Cada proyecto comienza con una comprensión profunda de cómo funciona tu empresa, tus procesos y tus desafíos únicos. Solo así podemos crear soluciones que realmente funcionen."
                  />
                </AboutCard>
              </AboutGrid>
            </AboutContent>
          </AboutSection>
        </Fade>
      </Container>
    </Section>
  );
};

export default Features;
