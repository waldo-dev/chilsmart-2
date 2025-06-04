import React from 'react';
import Container from 'common/components/UI/ContainerTwo';
import Text from 'common/components/Text';
import NextImage from 'common/components/NextImage';
import Button from 'common/components/Button';
import Heading from 'common/components/Heading';
import Input from 'common/components/Input';
import BannerWrapper, {
  BannerContent,
  Subscribe,
  SponsoredBy,
  ImageGroup,
} from './banner.style';

import paypal from 'common/assets/image/agencyModern/paypal.png';
import google from 'common/assets/image/agencyModern/google.png';
import dropbox from 'common/assets/image/agencyModern/dropbox.png';
import { backgroundColor, borderRadius } from 'styled-system';

const Banner = () => {
  return (
    <BannerWrapper id="home">
      <Container>
        <BannerContent>
          <Heading
            as="h1"
            content="Tu negocio necesita más que solo presencia online"
          />

          <Text
            className="banner-caption"
            content="Diseñamos experiencias digitales a medida: sitios, tiendas y software que funcionan.
            Desde una landing atractiva hasta un sistema a medida, te acompañamos en cada paso."
          />

          <Subscribe>
            <Button title="¡Transforma tu negocio hoy!" type="submit" style={{backgroundColor: "#1F6BFF", borderRadius: "16px"}} />
          </Subscribe>

          <SponsoredBy>
            <Text className="sponsoredBy" content="Sponsored by:" />
            <ImageGroup>
              <NextImage src={paypal} alt="Paypal" />
              <NextImage src={google} alt="Google" />
              <NextImage src={dropbox} alt="Dropbox" />
            </ImageGroup>
          </SponsoredBy>
        </BannerContent>
      </Container>
    </BannerWrapper>
  );
};

export default Banner;
