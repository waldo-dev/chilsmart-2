import styled from 'styled-components';

export const Section = styled.section`
  padding: 96px 24px;
  background: #0c141d;

  @media (max-width: 768px) {
    padding: 64px 16px;
  }

  @media (max-width: 480px) {
    padding: 48px 16px;
  }
`;

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

export const FeatureItem = styled.div`
  text-align: center;
`;

export const FeatureTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  color: white;
  margin-bottom: 16px;
`;

export const FeatureDescription = styled.p`
  font-size: 16px;
  color: #94a3b8;
  line-height: 1.6;
`;

