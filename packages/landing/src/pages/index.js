import React, { Fragment } from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import Sticky from "react-stickynode";
import { DrawerProvider } from "common/contexts/DrawerContext";
import { theme } from "common/theme/saasCreative";
import ResetCSS from "common/assets/css/style";
import BannerSection from "containers/SaasCreative/Banner";
import Navbar from "containers/SaasCreative/Navbar";
import Clients from "containers/SaasCreative/Clients";
import HowItWorks from "containers/SaasCreative/Services";
import AdvancedAnalytics from "containers/SaasCreative/AdvancedAnalytics";
import Features from "containers/SaasCreative/Features";
import WalletExperience from "containers/SaasCreative/WalletExperience";
import Testimonial from "containers/SaasCreative/Testimonial";
import Pricing from "containers/SaasCreative/Pricing";
import OurCommunity from "containers/SaasCreative/OurCommunity";
import Faq from "containers/SaasCreative/Faq";
import CallToAction from "containers/SaasCreative/CallToAction";
import Footer from "containers/WebApp/Footer";
import {
  GlobalStyle,
  ContentWrapper,
} from "containers/SaasCreative/saasCreative.style";
import "animate.css";
import wspLogo from "common/assets/image/saasCreative/wsp-logo.png";

const SaasCreative = () => {
  const siteUrl = "https://www.chilsmart.com";
  const title = "Chilsmart | Plataforma de BI - Toda tu Data Ordenada para Tomar las Mejores Decisiones";
  const description =
    "Plataforma de Business Intelligence que organiza toda tu data y facilita la toma de decisiones. Dashboards profesionales creados por analistas especialistas, con control de acceso inteligente. Convierte tus datos en decisiones estratégicas para tu empresa en Chile.";
  const previewImage = `${siteUrl}/preview.jpg`;

  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Head>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta
            name="keywords"
            content="plataforma BI, business intelligence, toma de decisiones, datos ordenados, análisis de datos, BI para empresas, plataforma de analytics, dashboards empresariales, control de acceso dashboards, business intelligence chile, visualización de datos, analistas de datos, plataforma BI chile, decisiones basadas en datos"
          />
          <meta name="author" content="Chilsmart" />
          <meta name="theme-color" content="#0ea5e9" />
          <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
          <meta name="googlebot" content="index,follow" />
          <meta name="language" content="Spanish" />
          <meta name="geo.region" content="CL" />
          <meta name="geo.placename" content="Chile" />
          <link rel="canonical" href={siteUrl} />
          <link rel="alternate" hrefLang="es" href={siteUrl} />
          <link rel="alternate" hrefLang="x-default" href={siteUrl} />
          
          {/* Open Graph */}
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={siteUrl} />
          <meta property="og:image" content={previewImage} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:alt" content="Chilsmart - Plataforma de BI para Toma de Decisiones" />
          <meta property="og:site_name" content="Chilsmart" />
          <meta property="og:locale" content="es_CL" />
          
          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={previewImage} />
          <meta name="twitter:image:alt" content="Chilsmart - Plataforma de BI para Toma de Decisiones" />
          
          {/* Structured data - Organization */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "Chilsmart",
                url: siteUrl,
                logo: `${siteUrl}/logo.png`,
                description,
                address: {
                  "@type": "PostalAddress",
                  addressCountry: "CL"
                },
                sameAs: [
                  "https://www.linkedin.com/company/chilsmart",
                  "https://www.instagram.com/chilsmart"
                ],
                contactPoint: {
                  "@type": "ContactPoint",
                  contactType: "sales",
                  availableLanguage: ["Spanish"],
                  telephone: "+56-9-6406-76501",
                  areaServed: "CL",
                  contactOption: "TollFree"
                }
              })
            }}
          />
          
          {/* Structured data - WebSite */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "Chilsmart",
                url: siteUrl,
                description,
                publisher: {
                  "@type": "Organization",
                  name: "Chilsmart",
                  logo: {
                    "@type": "ImageObject",
                    url: `${siteUrl}/logo.png`
                  }
                },
                potentialAction: {
                  "@type": "SearchAction",
                  target: {
                    "@type": "EntryPoint",
                    urlTemplate: `${siteUrl}/?s={search_term_string}`
                  },
                  "query-input": "required name=search_term_string"
                }
              })
            }}
          />
          
          {/* Structured data - Service */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Service",
                name: "Plataforma de BI para Toma de Decisiones",
                provider: {
                  "@type": "Organization",
                  name: "Chilsmart",
                  url: siteUrl
                },
                areaServed: {
                  "@type": "Country",
                  name: "Chile"
                },
                description: "Plataforma de Business Intelligence que organiza toda tu data y facilita la toma de decisiones. Dashboards profesionales creados por analistas especialistas, con control de acceso por usuario. Convierte tus datos en decisiones estratégicas.",
                offers: {
                  "@type": "Offer",
                  description: "Plataforma de BI que organiza tus datos para facilitar la toma de decisiones con control de acceso inteligente",
                  name: "Plataforma de Business Intelligence"
                },
                serviceType: ["Business Intelligence", "Plataforma BI", "Análisis de Datos", "Toma de Decisiones", "Visualización de Datos", "Data Analytics"]
              })
            }}
          />
          {/* Load google fonts */}
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter&family=Manrope:wght@400;500;700;800&display=swap"
          />
        </Head>

        <ResetCSS />
        <GlobalStyle />

        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <BannerSection />
          <Clients />
          <HowItWorks />
          <AdvancedAnalytics />
          <Features />
          {/* <WalletExperience />
					<Testimonial />
					<OurCommunity /> */}
          <Pricing />
          <Faq />
          {/* <CallToAction /> */}
          <Footer />
          <a
            href="https://wa.me/56940676501?text=Hola,%20quiero%20conocer%20más%20sobre%20la%20plataforma%20de%20BI"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              position: "fixed",
              width: "60px",
              height: "60px",
              bottom: "20px",
              right: "20px",
              // backgroundColor: "#25D366",
              color: "white",
              borderRadius: "50%",
              textAlign: "center",
              fontSize: "30px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
              zIndex: 1000,
            }}
          >
            <img
              src={wspLogo.src}
              alt="Contactar por WhatsApp - Chilsmart"
              style={{ width: "50px", height: "55px" }}
            />
          </a>
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default SaasCreative;
