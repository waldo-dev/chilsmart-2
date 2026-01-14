import React, { useState } from 'react';
import { Icon } from 'react-icons-kit';
import { check } from 'react-icons-kit/feather/check';
import { database } from 'react-icons-kit/feather/database';
import { users } from 'react-icons-kit/feather/users';
import { settings } from 'react-icons-kit/feather/settings';
import Container from 'common/components/UI/Container';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Button from 'common/components/Button';
import Section, { SectionHeading, PricingWrapper, SetupCard, PlansGrid, PriceCard, PriceHeader, PriceContent, PriceTag, FeatureList, FeatureItem, ToggleWrapper, ToggleButton } from './pricing.style';

import { pricing, setupInicial } from 'common/data/SaasCreative';
import { Fade } from 'react-awesome-reveal';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <Section id="pricing">
      <Container width="1400px">
        <SectionHeading>
          <Heading content="Planes para tu Plataforma de BI" style={{fontSize: "3rem", color: "#fff"}}/>
          <Text content="Elige el plan que mejor se adapte a las necesidades de tu empresa" style={{color: "#e2e8f0", fontSize: "18px", marginTop: "16px"}} />
        </SectionHeading>

        {/* Setup Inicial */}
        <Fade direction='up' triggerOnce>
          <SetupCard>
            <div style={{display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px'}}>
              <div style={{background: 'linear-gradient(135deg, #0ea5e9 0%, #8b5cf6 100%)', padding: '12px', borderRadius: '12px'}}>
                <Icon icon={settings} size={24} style={{color: '#fff'}} />
              </div>
              <div style={{flex: 1}}>
                <Heading as="h3" content={setupInicial.title} style={{margin: 0, fontSize: '24px', fontWeight: '700'}} />
                <Text content={setupInicial.price} style={{fontSize: '14px', color: '#94a3b8', marginTop: '4px', fontWeight: '500'}} />
              </div>
            </div>
            {setupInicial.description && (
              <Text content={setupInicial.description} style={{fontSize: '15px', color: '#e2e8f0', marginBottom: '20px', lineHeight: '1.6'}} />
            )}
            <FeatureList>
              {setupInicial.features.map((feature, i) => (
                <FeatureItem key={i}>
                  <Icon icon={check} size={20} style={{color: '#10b981', flexShrink: 0}} />
                  <span>{feature}</span>
                </FeatureItem>
              ))}
            </FeatureList>
          </SetupCard>
        </Fade>

        {/* Toggle Mensual/Anual */}
        <ToggleWrapper>
          <ToggleButton active={!isAnnual} onClick={() => setIsAnnual(false)}>
            Mensual
          </ToggleButton>
          <ToggleButton active={isAnnual} onClick={() => setIsAnnual(true)}>
            Anual
            <span style={{fontSize: '12px', marginLeft: '4px', opacity: 0.8}}>(Ahorra más)</span>
          </ToggleButton>
        </ToggleWrapper>

        {/* Planes */}
        <PlansGrid>
          {pricing.map((plan) => (
            <Fade key={plan.id} direction='up' triggerOnce delay={100 * plan.id}>
              <PriceCard isPro={plan.isPro}>
                {plan.isPro && <div className="popular-badge">Más Popular</div>}
                <PriceHeader>
                  <Heading as="h3" content={plan.title} />
                  <PriceTag>
                    <span className="price-amount">
                      {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className="price-period">/mes</span>
                  </PriceTag>
                  {isAnnual && plan.annualSavings && (
                    <Text content={plan.annualSavings} 
                      style={{fontSize: '14px', color: '#10b981', marginTop: '8px', fontWeight: '600'}} />
                  )}
                </PriceHeader>
                <PriceContent>
                  <FeatureList>
                    {plan.features.map((feature, i) => (
                      <FeatureItem key={i}>
                        <Icon icon={check} size={20} style={{color: '#10b981', flexShrink: 0}} />
                        <span>{feature}</span>
                      </FeatureItem>
                    ))}
                  </FeatureList>
                  <Button
                    title="Solicitar Demo"
                    onClick={() => window.open(`https://wa.me/56940676501?text=${encodeURIComponent(`Hola, estoy interesado en el ${plan.title}`)}`, '_blank')}
                    style={{
                      width: '100%',
                      marginTop: '32px',
                      background: plan.isPro ? 'linear-gradient(135deg, #0ea5e9 0%, #8b5cf6 100%)' : '#0ea5e9',
                      border: 'none',
                      color: '#fff',
                      fontWeight: '700',
                      padding: '16px 32px',
                      borderRadius: '12px',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                  />
                </PriceContent>
              </PriceCard>
            </Fade>
          ))}
        </PlansGrid>
      </Container>
    </Section>
  );
};

export default Pricing;
