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
} from "./features.style";

import { features } from "common/data/SaasCreative";
import Link from "next/link";

const Features = () => {
  return (
    <Section id="testimonial">
      <Container width="1400px">
        <SectionHeading>
          <Heading
            style={{ fontSize: "3rem" }}
            content="Quienes han confiado en nosotros"
          />
        </SectionHeading>
        <Grid>
          {features.map((feature) => (
            <Item key={feature.id}>
              <figure>
                {feature.icon ? (
                  <NextImage src={feature.icon} alt="icon" />
                ) : (
                  <i style={{fontSize: "7rem"}} className="flaticon-settings"></i>
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
