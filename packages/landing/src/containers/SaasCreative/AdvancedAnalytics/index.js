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
            <HighlightPill>El problema que resolvemos</HighlightPill>
            <Heading as="h2" content="Tres problemas comunes que frenan el crecimiento" />
            <Text
              className="description"
              content="Muchas empresas operativas trabajan con operaciones desordenadas: datos dispersos, procesos desconectados, decisiones tomadas sin información suficiente. Ayudamos a empresas a transformar operaciones desordenadas en sistemas claros, medibles y controlables."
            />
            <BulletList>
              <BulletItem><strong>Operaciones que no escalan:</strong> Tu negocio crece, pero los sistemas no. Terminas usando Excel para todo, con información dispersa en múltiples herramientas, sin integraciones reales.</BulletItem>
              <BulletItem><strong>Datos sin propósito:</strong> Tienes datos en distintos lugares: ventas en un sistema, inventario en otro, clientes en un Excel. Los datos existen, pero no conversan entre sí.</BulletItem>
              <BulletItem><strong>Decisiones sin información suficiente:</strong> Cuando no hay sistemas que ordenen la operación ni datos claros, las decisiones se toman con intuición o con información incompleta.</BulletItem>
            </BulletList>
            <Signature>"Transformamos operaciones desordenadas en sistemas claros, medibles y controlables."</Signature>
            <Link href="https://wa.me/56940676501?text=Hola,%20quiero%20conversar%20sobre%20cómo%20ordenar%20la%20operación%20de%20mi%20empresa" className="explore" target="_blank">
              Conversemos <Icon icon={arrowRight} />
            </Link>
          </Content>
        </Grid>
      </Container>
    </Section>
  );
};

export default AdvancedAnalytics;
