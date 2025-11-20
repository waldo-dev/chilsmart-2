import Box from "common/components/Box";
import Text from "common/components/Text";
import Container from "common/components/UI/Container";
import Button from "common/components/Button";
import { FOOTER_DATA } from "common/data/WebApp";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import FooterArea from "./footer.style";

const Footer = () => {
  const { logo, menu, social } = FOOTER_DATA;
  return (
    <FooterArea>
      <Container className="footerContainer">
        <Box className="brand">
          <Link href="/" className="logo">
            <Image src={logo} alt="Chilsmart - Desarrollo de software a medida" />
          </Link>
          <Text
            as="p"
            className="tagline"
            content="Construimos software y automatizaciones para operaciones que no pueden detenerse."
          />
          <Text
            as="span"
            className="copyright"
            content={`© ${new Date().getFullYear()} Chilsmart`}
          />
        </Box>
        <Box className="menu">
          {menu.map(({ link, label }, index) => (
            <Link
              href={link}
              key={`footer-menu-link-${index}`}
              className="menuLink"
            >
              {label}
            </Link>
          ))}
        </Box>
        <Box className="actions">
          <a
            href="https://wa.me/56940676501?text=Hola,%20quiero%20hablar%20con%20Chilsmart"
            target="_blank"
            rel="noopener noreferrer"
            className="ctaLink"
          >
            <Button title="Habla con el equipo" className="ctaButton" />
          </a>
          <Box className="social">
            <Text as="span" content="Síguenos:" />
            {social.map(({ icon, link }, index) => {
              const socialName = link.includes('linkedin') ? 'LinkedIn' : 
                                link.includes('instagram') ? 'Instagram' : 
                                link.includes('twitter') ? 'Twitter' : 
                                link.includes('facebook') ? 'Facebook' : 'Red social';
              return (
                <Link
                  href={link}
                  key={`footer-social-link-${index}`}
                  className="socialLink"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Síguenos en ${socialName}`}
                >
                  <Image src={icon} alt={`${socialName} de Chilsmart`} width={32} height={32} />
                </Link>
              );
            })}
          </Box>
        </Box>
      </Container>
    </FooterArea>
  );
};

export default Footer;
