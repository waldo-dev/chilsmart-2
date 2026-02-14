import React, { Fragment } from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import Sticky from "react-stickynode";
import { DrawerProvider } from "common/contexts/DrawerContext";
import { theme } from "common/theme/saasCreative";
import ResetCSS from "common/assets/css/style";
import { trackWhatsAppClick, trackViewContent } from "common/hooks/useFacebookPixel";
import Hero from "containers/SaasCreative/Hero";
import Navbar from "containers/SaasCreative/Navbar";
import ProblemSolution from "containers/SaasCreative/ProblemSolution";
import ServicesGrid from "containers/SaasCreative/ServicesGrid";
import WhyChilsmart from "containers/SaasCreative/WhyChilsmart";
import Process from "containers/SaasCreative/Process";
import Testimonials from "containers/SaasCreative/Testimonials";
import FinalCTA from "containers/SaasCreative/FinalCTA";
import Footer from "containers/SaasCreative/Footer";
import {
  GlobalStyle,
  ContentWrapper,
} from "containers/SaasCreative/saasCreative.style";
import "animate.css";
import wspLogo from "common/assets/image/saasCreative/wsp-logo.png";

const SaasCreative = () => {
  const siteUrl = "https://www.chilsmart.com";
  const title = "Chilsmart | Sistemas que ordenan tu operación y convierten datos en decisiones";
  const description =
    "Diseñamos y construimos sistemas digitales que ordenan la operación de las empresas y convierten sus datos en decisiones accionables. No somos una empresa de dashboards ni solo de desarrollo: diseñamos sistemas donde el software captura la realidad del negocio y los analistas convierten esa información en decisiones.";
  const previewImage = `${siteUrl}/preview.jpg`;

  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Head>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta
            name="keywords"
            content="desarrollo de software, sistemas de datos, software a medida, productos SaaS, análisis de datos, sistemas operativos, ordenar operación, decisiones accionables, pymes, software para empresas, sistemas integrados, inteligencia operativa, desarrollo a medida chile, sistemas de datos chile"
          />
          <meta name="author" content="Chilsmart" />
          <meta name="theme-color" content="#0ea5e9" />
          <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
          <meta name="googlebot" content="index,follow" />
          <meta name="bingbot" content="index,follow" />
          <meta name="language" content="Spanish" />
          <meta name="geo.region" content="CL" />
          <meta name="geo.placename" content="Chile" />
          <meta name="rating" content="general" />
          <meta name="distribution" content="global" />
          <meta name="revisit-after" content="7 days" />
          <link rel="canonical" href={siteUrl} />
          <link rel="alternate" hrefLang="es" href={siteUrl} />
          <link rel="alternate" hrefLang="es-CL" href={siteUrl} />
          <link rel="alternate" hrefLang="x-default" href={siteUrl} />
          
          {/* Mobile optimization */}
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <meta name="apple-mobile-web-app-title" content="Chilsmart" />
          
          {/* Performance hints */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link rel="dns-prefetch" href="https://wa.me" />
          <link rel="dns-prefetch" href="https://www.linkedin.com" />
          <link rel="dns-prefetch" href="https://www.instagram.com" />
          
          {/* Open Graph */}
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={siteUrl} />
          <meta property="og:image" content={previewImage} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:alt" content="Chilsmart - Sistemas que ordenan tu operación y convierten datos en decisiones" />
          <meta property="og:site_name" content="Chilsmart" />
          <meta property="og:locale" content="es_CL" />
          <meta property="og:locale:alternate" content="es_ES" />
          <meta property="article:author" content="Chilsmart" />
          
          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={previewImage} />
          <meta name="twitter:image:alt" content="Chilsmart - Sistemas que ordenan tu operación y convierten datos en decisiones" />
          <meta name="twitter:site" content="@chilsmart" />
          <meta name="twitter:creator" content="@chilsmart" />
          
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
                name: "Sistemas digitales que ordenan operaciones y convierten datos en decisiones",
                provider: {
                  "@type": "Organization",
                  name: "Chilsmart",
                  url: siteUrl
                },
                areaServed: {
                  "@type": "Country",
                  name: "Chile"
                },
                description: "Diseñamos y construimos sistemas digitales que ordenan la operación de las empresas y convierten sus datos en decisiones accionables. No somos una empresa de dashboards ni solo de desarrollo: diseñamos sistemas donde el software captura la realidad del negocio y los analistas convierten esa información en decisiones.",
                offers: {
                  "@type": "Offer",
                  description: "Sistemas digitales que ordenan operaciones y convierten datos en decisiones accionables",
                  name: "Desarrollo de software y sistemas de datos"
                },
                serviceType: ["Desarrollo de Software", "Sistemas de Datos", "Software a Medida", "Productos SaaS", "Análisis de Datos", "Sistemas Operativos", "Inteligencia Operativa"]
              })
            }}
          />
          
          {/* Structured data - FAQPage */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "¿Cómo funciona la plataforma de BI de Chilsmart?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Nuestra plataforma organiza toda tu data y facilita la toma de decisiones. Los analistas de datos especialistas crean dashboards profesionales que convierten tus datos en información clara y accionable. Como administrador, puedes asignar diferentes visualizaciones a usuarios específicos, controlando quién accede a qué información. Todo está ordenado y organizado para que tomar decisiones sea lo más fácil posible."
                    }
                  },
                  {
                    "@type": "Question",
                    name: '¿Qué significa que "somos decisiones, no solo dashboards"?',
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Significa que nuestro enfoque va más allá de mostrar datos. Organizamos toda tu información para facilitar la toma de decisiones estratégicas. Nuestros analistas especialistas entienden qué datos necesitas ver, cómo estructurarlos y cómo presentarlos para que tu equipo pueda tomar las mejores decisiones rápidamente. No es solo visualización, es convertir datos en decisiones."
                    }
                  },
                  {
                    "@type": "Question",
                    name: "¿Cómo organizan mi data para facilitar las decisiones?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Nuestros analistas especialistas trabajan contigo para entender qué información necesitas para tomar decisiones estratégicas. Organizan y estructuran tus datos de forma lógica, creando dashboards profesionales que presentan la información más relevante de manera clara y accionable. Cada visualización está diseñada para facilitar una decisión específica, no solo para mostrar datos."
                    }
                  },
                  {
                    "@type": "Question",
                    name: "¿Cómo controlo qué información ve cada usuario?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Nuestra plataforma incluye control de acceso inteligente por usuario. Como administrador, puedes asignar visualizaciones específicas a diferentes usuarios o equipos. Esto garantiza que cada persona acceda solo a la información relevante para su rol, permitiendo que tome decisiones con los datos correctos en el momento adecuado."
                    }
                  },
                  {
                    "@type": "Question",
                    name: "¿Qué necesito para comenzar a usar la plataforma de BI?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Para comenzar, solo necesitas registrarte en nuestra plataforma. Nuestro equipo te ayudará con el onboarding inicial, organizando tu data y explicándote cómo acceder a la información. Trabajamos contigo para entender qué decisiones necesitas tomar y qué datos son relevantes. Nuestros analistas especialistas crearán dashboards personalizados que faciliten esas decisiones específicas."
                    }
                  }
                ]
              })
            }}
          />
          
          {/* Structured data - BreadcrumbList */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Inicio",
                    item: siteUrl
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Proyectos",
                    item: `${siteUrl}#proyectos`
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Servicios",
                    item: `${siteUrl}#services`
                  },
                  {
                    "@type": "ListItem",
                    position: 4,
                    name: "Contacto",
                    item: `${siteUrl}#contacto`
                  },
                  {
                    "@type": "ListItem",
                    position: 5,
                    name: "Preguntas Frecuentes",
                    item: `${siteUrl}#faq`
                  }
                ]
              })
            }}
          />
          {/* Load google fonts */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Manrope:wght@400;500;700;800&display=swap"
          />
          {/* Material Icons */}
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
            rel="stylesheet"
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
          <Hero />
          <ProblemSolution />
          <ServicesGrid />
          <WhyChilsmart />
          <Process />
          <Testimonials />
          <FinalCTA />
          <Footer />
          <a
            href="https://wa.me/56940676501?text=Hola,%20quiero%20conversar%20sobre%20cómo%20ordenar%20la%20operación%20de%20mi%20empresa"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
            onClick={() => trackWhatsAppClick()}
            style={{
              position: "fixed",
              width: "60px",
              height: "60px",
              bottom: "20px",
              right: "20px",
              color: "white",
              borderRadius: "50%",
              textAlign: "center",
              fontSize: "30px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
              zIndex: 999,
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
              e.currentTarget.style.boxShadow = "0 6px 16px rgba(0,0,0,0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.25)";
            }}
          >
            <img
              src={wspLogo.src}
              alt="Contactar por WhatsApp - Chilsmart"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </a>
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default SaasCreative;

