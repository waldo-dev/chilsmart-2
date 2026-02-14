import styled from 'styled-components';

export const Section = styled.section`
  padding: 96px 24px;
  background: #0f1823;

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

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 64px;
`;

export const SectionTitle = styled.h2`
  font-size: 28px;
  font-weight: bold;
  color: white;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    font-size: 36px;
  }

  @media (min-width: 1024px) {
    font-size: 40px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const SectionDivider = styled.div`
  height: 6px;
  width: 80px;
  background: #0051ad;
  border-radius: 9999px;
  margin: 0 auto;
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const ServiceCard = styled.div`
  background: rgba(30, 41, 59, 0.5);
  padding: 32px;
  border-radius: 12px;
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-top: 4px solid #0051ad;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 0 15px rgba(0, 81, 173, 0.3);
    border-color: #0051ad;
    transform: translateY(-4px);
  }
`;

export const ServiceIcon = styled.div`
  display: inline-block;
  padding: 12px;
  border-radius: 8px;
  background: rgba(0, 81, 173, 0.1);
  color: #0051ad;
  margin-bottom: 24px;
  transition: all 0.3s ease;

  .material-icons {
    font-size: 24px;
  }

  ${ServiceCard}:hover & {
    background: #0051ad;
    color: white;
  }
`;

export const ServiceTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  color: white;
  margin-bottom: 16px;
`;

export const ServiceDescription = styled.p`
  font-size: 14px;
  color: #94a3b8;
  line-height: 1.7;
`;

