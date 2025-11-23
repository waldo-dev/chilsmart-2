import React from "react";
import Container from "common/components/UI/Container";
import NextImage from "common/components/NextImage";
import Heading from "common/components/Heading";
import Text from "common/components/Text";
import Section, {
  SectionHeading,
  Grid,
  Item,
  ExternalLink,
  HighlightPill,
  Description,
} from "./features.style";

import { features } from "common/data/SaasCreative";
import Link from "next/link";

const Features = () => {
  return (
    <Section id="testimonial">
      <Container width="1400px">
        <SectionHeading>
          <HighlightPill>Casos Reales de Desarrollo de Software</HighlightPill>
          <Heading content="Empresas que Ahorran Dinero y Generan Más Ingresos con Nuestro Software a la Medida" />
          <Description>
            Cada proyecto de desarrollo de software para empresas está enfocado en impactar la rentabilidad. Hemos ayudado a empresas en Chile y la región a reducir costos operativos y aumentar sus ingresos mediante software personalizado que automatiza procesos, optimiza ventas y mejora la eficiencia.
          </Description>
        </SectionHeading>
        <Grid>
          {features.map((feature) => (
            <Item key={feature.id} hasUrl={!!feature.url}>
              {feature.url ? (
                <a
                  href={feature.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <figure>
                    {feature.icon ? (
                      <NextImage src={feature.icon} alt={`Pantallazo del software desarrollado para ${feature.title} - Chilsmart`} />
                    ) : (
                      <i style={{fontSize: "7rem"}} className="flaticon-settings" aria-label="Configuración"></i>
                    )}
                  </figure>
                </a>
              ) : (
                <figure>
                  {feature.icon ? (
                    <NextImage src={feature.icon} alt={`Pantallazo del software desarrollado para ${feature.title} - Chilsmart`} />
                  ) : (
                    <i style={{fontSize: "7rem"}} className="flaticon-settings" aria-label="Configuración"></i>
                  )}
                </figure>
              )}
              <Heading as="h4" content={feature.title} />
              <Text content={feature.description} />
              {feature.url ? (
                <ExternalLink
                  href={feature.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visitar Sitio
                </ExternalLink>
              ) : null}
            </Item>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Features;
