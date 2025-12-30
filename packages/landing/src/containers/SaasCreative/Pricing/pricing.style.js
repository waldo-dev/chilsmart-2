import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const Section = styled.section`
  background: linear-gradient(180deg, #0f172a 0%, #1e293b 100%);
  padding-top: 100px;
  padding-bottom: 120px;
  @media (max-width: 1024px) {
    padding-top: 80px;
    padding-bottom: 100px;
  }
  @media (max-width: 768px) {
    padding-top: 60px;
    padding-bottom: 80px;
  }
`;

export const SectionHeading = styled.div`
  text-align: center;
  margin-bottom: 60px;
  @media (max-width: 1024px) {
    margin-bottom: 50px;
  }
  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const PricingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const SetupCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 40px;
  max-width: 800px;
  margin: 0 auto 40px;
  @media (max-width: 768px) {
    padding: 32px 24px;
  }
  h3 {
    color: #fff;
  }
`;

export const ToggleWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 50px;
  background: rgba(255, 255, 255, 0.1);
  padding: 6px;
  border-radius: 12px;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
`;

export const ToggleButton = styled.button`
  background: ${props => props.active ? 'linear-gradient(135deg, #0ea5e9 0%, #8b5cf6 100%)' : 'transparent'};
  border: none;
  color: ${props => props.active ? '#fff' : '#cbd5e1'};
  font-weight: ${props => props.active ? '700' : '500'};
  font-size: 16px;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    color: #fff;
  }
  @media (max-width: 480px) {
    font-size: 14px;
    padding: 10px 16px;
  }
`;

export const PlansGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

export const PriceCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: ${props => props.isPro ? '2px solid #0ea5e9' : '1px solid rgba(255, 255, 255, 0.1)'};
  border-radius: 24px;
  padding: 40px 32px;
  position: relative;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: ${props => props.isPro 
      ? '0 20px 60px rgba(14, 165, 233, 0.3)' 
      : '0 20px 60px rgba(0, 0, 0, 0.3)'};
    border-color: ${props => props.isPro ? '#8b5cf6' : 'rgba(255, 255, 255, 0.2)'};
  }
  
  .popular-badge {
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(135deg, #0ea5e9 0%, #8b5cf6 100%);
    color: #fff;
    font-weight: 700;
    font-size: 12px;
    padding: 6px 16px;
    border-radius: 20px;
    letter-spacing: 0.5px;
  }
  
  @media (max-width: 768px) {
    padding: 32px 24px;
  }
`;

export const PriceHeader = styled.div`
  text-align: center;
  margin-bottom: 32px;
  padding-bottom: 32px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  
  h3 {
    color: #fff;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 20px;
    @media (max-width: 768px) {
      font-size: 22px;
    }
  }
`;

export const PriceTag = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 8px;
  
  .price-amount {
    color: #fff;
    font-size: 42px;
    font-weight: 800;
    line-height: 1;
    @media (max-width: 768px) {
      font-size: 36px;
    }
  }
  
  .price-period {
    color: #94a3b8;
    font-size: 16px;
    font-weight: 500;
  }
`;

export const PriceContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  flex: 1;
`;

export const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  color: #e2e8f0;
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 16px;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  span {
    flex: 1;
  }
  
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export default Section;
