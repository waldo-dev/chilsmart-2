import React from 'react';
import { Icon } from 'react-icons-kit';
import { arrowRight } from 'react-icons-kit/feather/arrowRight';
import { target } from 'react-icons-kit/feather/target';
import { dollarSign } from 'react-icons-kit/feather/dollarSign';
import { trendingUp } from 'react-icons-kit/feather/trendingUp';
import Container from 'common/components/UI/Container';
import Text from 'common/components/Text';
import Link from 'common/components/Link';
import Heading from 'common/components/Heading';
import Section, {
  Grid,
  Figure,
  Content,
  HighlightPill,
  BulletList,
  BulletItem,
  Signature,
  IconContainer,
  IconGroup,
} from "./analytics.style";
import { Fade } from 'react-awesome-reveal';

const AdvancedAnalytics = () => {
  return (
    <Section id="how-to">
      <Container width="1200px">
        <Grid>
          <Fade direction="up" triggerOnce>
            <Figure>
              <IconContainer>
                <IconGroup>
                  <div className="icon-main">
                    <Icon icon={target} size={80} />
                  </div>
                  <div className="icon-secondary icon-dollar">
                    <Icon icon={dollarSign} size={40} />
                  </div>
                  <div className="icon-secondary icon-trend">
                    <Icon icon={trendingUp} size={40} />
                  </div>
                </IconGroup>
              </IconContainer>
            </Figure>
          </Fade>
          <Content>
            <HighlightPill>Equipo Chilsmart - Desarrollo de Software</HighlightPill>
            <Heading as="h2" content="Software a la Medida que Ayuda a tu Empresa a Ahorrar y Generar Más Dinero" />
            <Text
              className="description"
              content="Somos un equipo de desarrollo de software especializado en crear soluciones a la medida que impactan directamente en la rentabilidad de tu empresa. Cada proyecto está enfocado en ayudarte a ahorrar costos operativos y generar más ingresos mediante automatizaciones inteligentes, optimización de procesos y sistemas que impulsan tu negocio."
            />
            <BulletList>
              <BulletItem>Análisis de procesos para identificar oportunidades de ahorro y generación de ingresos en tu empresa.</BulletItem>
              <BulletItem>Desarrollo de software a medida que automatiza tareas repetitivas, reduce costos y aumenta la eficiencia operativa.</BulletItem>
              <BulletItem>Soluciones personalizadas que optimizan ventas, mejoran la experiencia del cliente y generan más ingresos para tu negocio.</BulletItem>
            </BulletList>
            <Signature>"Aliados cercanos que desarrollan software que realmente impacta en tu rentabilidad: ahorras dinero y generas más ingresos."</Signature>
            <Link href="https://wa.me/56940676501?text=Hola,%20quiero%20saber%20más%20sobre%20su%20equipo" className="explore" target="_blank">
              Agenda una conversación <Icon icon={arrowRight} />
            </Link>
          </Content>
        </Grid>
      </Container>
    </Section>
  );
};

export default AdvancedAnalytics;
