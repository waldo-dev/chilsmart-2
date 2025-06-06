import React from 'react';
import { Icon } from 'react-icons-kit';
import { arrowRight } from 'react-icons-kit/feather/arrowRight';
import Container from 'common/components/UI/Container';
import NextImage from 'common/components/NextImage';
import Text from 'common/components/Text';
import Link from 'common/components/Link';
import Heading from 'common/components/Heading';
import analytics from 'common/assets/image/saasCreative/quienes-somos.jpg';
import Section, { Grid, Figure, Content } from './analytics.style';
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
            <Heading as="h2" content="Quiénes Somos" />
            <Text
              className="description"
              content="Somos un equipo de profesionales con más de 4 años de experiencia en desarrollo web. Nos apasiona transformar ideas en proyectos digitales efectivos y personalizados, siempre enfocados en la calidad y la satisfacción del cliente."
            />
            <Link href="https://wa.me/56940676501?text=Hola,%20quiero%20saber%20más%20sobre%20su%20equipo" className="explore" target="_blank">
              Conoce más <Icon icon={arrowRight} />
            </Link>
          </Content>
        </Grid>
      </Container>
    </Section>
  );
};

export default AdvancedAnalytics;
