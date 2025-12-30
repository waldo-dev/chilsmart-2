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
            <HighlightPill>Transforma Datos en Decisiones</HighlightPill>
            <Heading as="h2" content="Toda tu Data Ordenada para que Tomar Decisiones sea Fácil" />
            <Text
              className="description"
              content="No somos solo dashboards. Somos decisiones. Organizamos toda tu información para que la toma de decisiones estratégicas sea lo más simple posible. Dashboards profesionales creados por analistas especialistas que entienden qué datos necesitas ver para decidir mejor."
            />
            <BulletList>
              <BulletItem>Toda tu data organizada y estructurada. No más información dispersa. Todo ordenado y listo para tomar decisiones.</BulletItem>
              <BulletItem>Dashboards profesionales que convierten datos complejos en información clara y accionable para facilitar la toma de decisiones estratégicas.</BulletItem>
              <BulletItem>Control de acceso inteligente: cada usuario accede solo a la información relevante para su rol, garantizando decisiones informadas con los datos correctos.</BulletItem>
            </BulletList>
            <Signature>"La mejor manera de organizar tus datos y facilitar la toma de decisiones estratégicas en tu empresa."</Signature>
            <Link href="https://wa.me/56940676501?text=Hola,%20quiero%20conocer%20más%20sobre%20su%20plataforma%20de%20BI" className="explore" target="_blank">
              Agenda una demo gratuita <Icon icon={arrowRight} />
            </Link>
          </Content>
        </Grid>
      </Container>
    </Section>
  );
};

export default AdvancedAnalytics;
