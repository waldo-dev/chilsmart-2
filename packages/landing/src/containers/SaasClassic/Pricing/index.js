import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Button from 'common/components/Button';
import Container from 'common/components/UI/Container';
import GlideCarousel from 'common/components/GlideCarousel';
import GlideSlide from 'common/components/GlideCarousel/glideSlide';
import { MONTHLY_PRICING_TABLE } from 'common/data/SaasClassic';
import PricingTable, {
  PricingHead,
  PricingPrice,
  PricingButton,
  PricingList,
  ListItem,
  PricingButtonWrapper,
  PricingTableWrapper,
  SectionBadge,
  SectionDescription,
} from "./pricing.style";

const PricingSection = ({
  sectionWrapper,
  secTitleWrapper,
  secHeading,
  secText,
  nameStyle,
  descriptionStyle,
  priceStyle,
  priceLabelStyle,
  buttonFillStyle,
  listContentStyle,
}) => {
  const [state, setState] = useState({
    data: MONTHLY_PRICING_TABLE,
    active: true,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(true);
    }, 500);
    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  const data = state.data;
  const activeStatus = state.active;
  const pricingCarouselOptions = {
    type: 'slider',
    perView: 2,
    gap: 30,
    bound: true,
    breakpoints: {
      1199: {
        perView: 2,
        type: 'carousel',
        peek: {
          before: 100,
          after: 100,
        },
      },
      990: {
        type: 'carousel',
        perView: 1,
        peek: {
          before: 100,
          after: 100,
        },
      },
      767: {
        type: 'carousel',
        perView: 1,
        peek: {
          before: 80,
          after: 80,
        },
      },
      575: {
        type: 'carousel',
        perView: 1,
        gap: 15,
        peek: {
          before: 20,
          after: 20,
        },
      },
    },
  };

  return (
    <Box {...sectionWrapper} id="products_section">
      <Container>
        <Box {...secTitleWrapper}>
          <SectionBadge>Soluciones principales</SectionBadge>
          <Heading
            {...secHeading}
            style={{ fontSize: "3rem" }}
            content="Nuestros Productos"
          />
          <SectionDescription>
            Desarrollamos plataformas a la medida y un ERP especializado para talleres mecánicos. Cada
            entrega incluye discovery, despliegue guiado y soporte continuo del equipo fundador.
          </SectionDescription>
        </Box>
        <PricingTableWrapper>
          <GlideCarousel
            carouselSelector="products-carousel"
            options={pricingCarouselOptions}
            controls={false}
          >
            <>
              {data.map((pricingTable, index) => (
                <GlideSlide key={`product-table-${index}`}>
                  <PricingTable
                    freePlan={pricingTable.freePlan}
                    className="pricing_table"
                  >
                    <PricingHead>
                      <Heading content={pricingTable.name} {...nameStyle} />
                      <Text
                        content={pricingTable.description}
                        {...descriptionStyle}
                      />
                    </PricingHead>
                    <PricingPrice>
                      <Text
                        content={pricingTable.price || "A medida"}
                        {...priceStyle}
                      />
                      <Text
                        content={
                          pricingTable.priceLabel ||
                          "Propuesta personalizada"
                        }
                        {...priceLabelStyle}
                      />
                    </PricingPrice>
                    <PricingList>
                      {pricingTable.listItems.map((item, index) => (
                        <ListItem key={`product-table-list-${index}`}>
                          <Text content={item.content} {...listContentStyle} />
                        </ListItem>
                      ))}
                    </PricingList>
                    <PricingButton>
                      <a
                        href={`https://wa.me/56940676501?text=${encodeURIComponent(
                          `Hola, quiero cotizar ${pricingTable.name}`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          title={pricingTable.buttonLabel}
                          {...buttonFillStyle}
                        />
                      </a>
                    </PricingButton>
                  </PricingTable>
                </GlideSlide>
              ))}
            </>
          </GlideCarousel>
        </PricingTableWrapper>
      </Container>
    </Box>
  );
};


PricingSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    pt: ['60px', '80px', '80px', '80px', '100px'],
    pb: '20px',
    background: 'linear-gradient(180deg, #f8fbff 0%, #e0f2ff 55%, #d9f0ff 100%)',
  },
  secTitleWrapper: {
    mb: ['30px', '40px'],
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#ff4362',
    mb: '12px',
  },
  secHeading: {
    textAlign: 'center',
    fontSize: ['20px', '24px', '36px', '36px'],
    fontWeight: '700',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
    ml: 'auto',
    mr: 'auto',
    lineHeight: '1.12',
    width: '500px',
    maxWidth: '100%',
  },
  nameStyle: {
    fontSize: ["20px", "20px", "24px", "24px", "24px"],
    fontWeight: "700",
    color: "#0f172a",
    letterSpacing: "-0.025em",
    textAlign: "left",
    mb: "12px",
  },
  descriptionStyle: {
    fontSize: ["15px", "16px", "16px", "16px", "16px"],
    color: "#475569",
    lineHeight: "1.7",
    textAlign: "left",
    mb: "0",
  },
  priceStyle: {
    as: "span",
    display: "block",
    fontSize: ["34px", "36px", "40px", "40px", "40px"],
    color: "#0f172a",
    textAlign: "left",
    mb: "5px",
    letterSpacing: "-0.025em",
    fontWeight: "600",
  },
  priceLabelStyle: {
    fontSize: ["13px", "14px", "14px", "14px", "14px"],
    color: "#64748b",
    lineHeight: "1.6",
    textAlign: "left",
    mb: "0",
  },
  buttonStyle: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '600',
    borderRadius: '4px',
    pl: '10px',
    pr: '10px',
    bg: '#fff',
    color: '#2aa275',
    colors: 'primaryWithBg',
    width: '222px',
    maxWidth: '100%',
  },
  buttonFillStyle: {
    type: "button",
    fontSize: "15px",
    fontWeight: "700",
    color: "#fff",
    borderRadius: "999px",
    pl: "24px",
    pr: "24px",
    bg: "#0ea5e9",
    minWidth: ["180px", "210px"],
    maxWidth: "100%",
    height: "52px",
    boxShadow: "0 18px 30px rgba(14, 165, 233, 0.35)",
  },
  listContentStyle: {
    fontSize: ["15px", "16px", "16px", "16px", "16px"],
    color: "#475569",
    mb: "0",
    textAlign: "left",
  },
};

export default PricingSection;
