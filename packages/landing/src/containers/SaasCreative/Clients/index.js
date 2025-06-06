import React from 'react';
import Container from 'common/components/UI/Container';
import Text from 'common/components/Text';
import { clients } from 'common/data/AgencyClassic';
import Logo from 'common/components/UIElements/Logo';

import SectionWrapper, { ClientWrapper, ImageSlider, ImageSlide } from './clients.style';

const Clients = () => {
  return (
    <SectionWrapper id="experience">
      <Container width="100%">
        <ClientWrapper>
          <ImageSlider>
            <ImageSlide>
              {clients.map((item, index) => (
                <Logo key={`slide1__key_0${index}`} href="#" logoSrc={item} />
              ))}
            </ImageSlide>
            <ImageSlide>
              {clients.map((item, index) => (
                <Logo key={`slide1__key_1${index}`} href="#" logoSrc={item} />
              ))}
            </ImageSlide>
            <ImageSlide>
              {clients.map((item, index) => (
                <Logo key={`slide1__key_2${index}`} href="#" logoSrc={item} />
              ))}
            </ImageSlide>
          </ImageSlider>
        </ClientWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default Clients;
