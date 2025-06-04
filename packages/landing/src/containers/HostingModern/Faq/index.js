import React from 'react';
import Container from 'common/components/UI/ContainerTwo';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import SectionHeading from '../SectionHeading';
import SectionWrapper, { ContentWrapper, FaqItem } from './faq.style';
import { faqs } from 'common/data/HostingModern';
import { Fade } from 'react-awesome-reveal';

const Faq = () => {
  return (
    <SectionWrapper id="faq">
      <Container>
        <Fade direction='up' triggerOnce delay={100}>
          <SectionHeading
            slogan="Ideal solutions for you"
            title="Didn’t find what you were looking for?"
          />
        </Fade>
        <ContentWrapper>
          {faqs.map((faq) => (
            <Fade key={faq.id} direction='up' triggerOnce delay={100 * faq.id}>
              <FaqItem>
                <Heading as="h4" content={faq.title} />
                <Text content={faq.desc} />
              </FaqItem>
            </Fade>
          ))}
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default Faq;
