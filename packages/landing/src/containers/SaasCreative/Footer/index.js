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
            <SocialLink 
              href="https://www.linkedin.com/company/chilsmart" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Síguenos en LinkedIn"
            >
              LinkedIn
            </SocialLink>
            <SocialLink 
              href="https://github.com/chilsmart" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Visita nuestro GitHub"
            >
              GitHub
            </SocialLink>
          </SocialLinks>
        </FooterContent>
      </Container>
    </FooterSection>
  );
};

export default Footer;
