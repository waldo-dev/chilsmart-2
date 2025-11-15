import React from 'react';
import { Icon } from 'react-icons-kit';
import { arrowRight } from 'react-icons-kit/feather/arrowRight';
import Container from 'common/components/UI/Container';
import NextImage from 'common/components/NextImage';
import Text from 'common/components/Text';
import Link from 'common/components/Link';
import Heading from 'common/components/Heading';
import analytics from 'common/assets/image/saasCreative/quienes-somos.jpg';
import Section, {
  Grid,
  Figure,
  Content,
  HighlightPill,
  BulletList,
  BulletItem,
  Signature,
} from "./analytics.style";
import { Fade } from 'react-awesome-reveal';

const AdvancedAnalytics = () => {
  return (
    <Section id="how-to">
      <Container width="1200px">
        <Grid>
          <Fade direction="up" triggerOnce>
            <Figure>
              <NextImage
                src={analytics}
                alt="Equipo de desarrollo"
                style={{
                  borderRadius: '12px',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                  maxWidth: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                }}
              />
            </Figure>
          </Fade>
          <Content>
            <HighlightPill>Equipo Chilsmart</HighlightPill>
            <Heading as="h2" content="Construimos productos y automatizaciones con foco en negocio" />
            <Text
              className="description"
              content="Somos un equipo compacto de founders técnicos que diseña, desarrolla y acompaña soluciones a medida: desde nuestro ERP para talleres mecánicos hasta automatizaciones para gimnasios y compañías que necesitan escalar sin fricción."
            />
            <BulletList>
              <BulletItem>Discovery y roadmap compartido con tus líderes de operación y tecnología.</BulletItem>
              <BulletItem>Construcción end-to-end: producto, integraciones y soporte continuo.</BulletItem>
              <BulletItem>Implementaciones rápidas gracias a componentes propios probados en LatAm.</BulletItem>
            </BulletList>
            <Signature>“Aliados cercanos, entregas rápidas y foco en métricas del negocio.”</Signature>
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
