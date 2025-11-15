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
import Pricing from "containers/SaasClassic/Pricing";
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
  const siteUrl = "https://www.chilsmart.cl";
  const title = "Chilsmart | Desarrollo de software a medida y ERP para talleres";
  const description =
    "Diseñamos software personalizado, automatizaciones e implementamos nuestro ERP para talleres mecánicos. Aceleramos operaciones, ventas y soporte con IA e integraciones.";
  const previewImage = `${siteUrl}/preview.jpg`;

  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Head>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta
            name="keywords"
            content="desarrollo de software a medida, ERP talleres mecánicos, automatizaciones para empresas, integraciones con IA, Chilsmart"
          />
          <meta name="theme-color" content="#0ea5e9" />
          <meta name="robots" content="index,follow" />
          <link rel="canonical" href={siteUrl} />
          {/* Open Graph */}
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={siteUrl} />
          <meta property="og:image" content={previewImage} />
          <meta property="og:site_name" content="Chilsmart" />
          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={previewImage} />
          {/* Structured data */}
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
                sameAs: [
                  "https://www.linkedin.com/company/chilsmart",
                  "https://www.instagram.com/chilsmart"
                ],
                contactPoint: {
                  "@type": "ContactPoint",
                  contactType: "sales",
                  availableLanguage: ["Spanish"],
                  telephone: "+56 9 6406 76501"
                }
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
          <Clients />
          <Features />
          {/* <WalletExperience />
					<Testimonial />
					<OurCommunity /> */}
          <Pricing />
          <Faq />
          {/* <CallToAction /> */}
          <Footer />
          <a
            href="https://wa.me/56940676501?text=Hola,%20quiero%20cotizar"
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
              alt="WhatsApp"
              style={{ width: "50px", height: "55px" }}
            />
          </a>
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default SaasCreative;
