import React from "react";
import Container from "common/components/UI/Container";
import Heading from "common/components/Heading";
import Text from "common/components/Text";
import { Icon } from "react-icons-kit";
import { database } from "react-icons-kit/feather/database";
import { barChart2 } from "react-icons-kit/feather/barChart2";
import { shield } from "react-icons-kit/feather/shield";
import Section, {
  SectionHeading,
  Grid,
  Item,
  IconWrapper,
  HighlightPill,
  Description,
} from "./features.style";

import { features } from "common/data/SaasCreative";

const iconMap = {
  1: database,
  2: barChart2,
  3: shield,
};

const Features = () => {
  return (
    <Section id="testimonial">
      <Container width="1400px">
        <SectionHeading>
          <HighlightPill>Lo que Ofrecemos</HighlightPill>
          <Heading content="Toda tu Data Ordenada para Facilitar la Toma de Decisiones" />
          <Description>
            No somos solo dashboards. Somos decisiones. Nuestra plataforma organiza toda tu información para que tomar decisiones estratégicas sea más fácil. Dashboards profesionales, control de acceso inteligente y toda tu data ordenada en un solo lugar.
          </Description>
        </SectionHeading>
        <Grid>
          {features.map((feature) => (
            <Item key={feature.id}>
              <IconWrapper>
                <Icon icon={iconMap[feature.id]} size={48} />
              </IconWrapper>
              <Heading as="h4" content={feature.title} />
              <Text content={feature.description} />
            </Item>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Features;
