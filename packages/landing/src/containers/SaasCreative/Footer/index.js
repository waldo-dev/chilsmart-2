import React from 'react';
import {
  FooterSection,
  Container,
  FooterContent,
  LogoContainer,
  LogoIcon,
  LogoText,
  Copyright,
  SocialLinks,
  SocialLink,
} from './footer.style';

const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <FooterContent>
          <LogoContainer>
            <LogoIcon>C</LogoIcon>
            <LogoText>
              CHIL<span className="highlight">SMART</span>
            </LogoText>
          </LogoContainer>
          <Copyright>
            © 2024 CHILSMART SpA. Todos los derechos reservados. Santiago, Chile.
          </Copyright>
          <SocialLinks>
            <SocialLink href="#" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </SocialLink>
            <SocialLink href="#" target="_blank" rel="noopener noreferrer">
              GitHub
            </SocialLink>
          </SocialLinks>
        </FooterContent>
      </Container>
    </FooterSection>
  );
};

export default Footer;
