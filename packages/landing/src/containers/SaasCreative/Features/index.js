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
          <Heading content="Software a la Medida: Implementaciones que Respaldan Nuestra Experiencia" />
          <Description>
            Cada proyecto de desarrollo de software para empresas combina descubrimiento, desarrollo personalizado y soporte continuo. Así hemos creado software a medida para talleres, gimnasios y servicios profesionales en Chile y la región.
          </Description>
        </SectionHeading>
        <Grid>
          {features.map((feature) => (
            <Item key={feature.id}>
              <figure>
                {feature.icon ? (
                  <NextImage src={feature.icon} alt={feature.title || "Característica de Chilsmart"} />
                ) : (
                  <i style={{fontSize: "7rem"}} className="flaticon-settings" aria-label="Configuración"></i>
                )}
              </figure>
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
              ) : (
                <></>
              )}
            </Item>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Features;
