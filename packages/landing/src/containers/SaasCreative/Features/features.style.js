import styled from 'styled-components';
import { rgba } from 'polished';
import { themeGet } from '@styled-system/theme-get';

const Section = styled.section`
  background: #ffffff;
  padding: 100px 0 90px;

  @media (max-width: 1024px) {
    padding: 80px 0 70px;
  }
  @media (max-width: 768px) {
    padding: 70px 0 60px;
  }
  @media (max-width: 480px) {
    padding: 60px 0 50px;
  }
`;


export const SectionHeading = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 50px;
  
  h2 {
    color: #0f172a;
    font-weight: 700;
    line-height: 1.25;
    letter-spacing: -0.02em;
    font-size: 40px;
    margin-bottom: 20px;
    
    @media (max-width: 768px) {
      font-size: 32px;
    }
    
    @media (max-width: 480px) {
      font-size: 28px;
    }
  }
  
  p {
    color: #64748b;
    font-size: 18px;
    line-height: 1.7;
    
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-top: 70px;
  
  @media (max-width: 1024px) {
    gap: 24px;
  }
  
  @media (max-width: 768px) {
    margin-top: 50px;
    grid-template-columns: repeat(1, 1fr);
    gap: 24px;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  }
  
  @media (max-width: 480px) {
    margin-top: 40px;
    gap: 20px;
  }
`;

export const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 16px;
  background: linear-gradient(135deg, #0ea5e9 0%, #8b5cf6 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 28px;
  transition: all 0.3s ease;
  color: #ffffff;
  
  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
    margin-bottom: 24px;
  }
  
  svg {
    transition: transform 0.3s ease;
  }
`;

export const Item = styled.div`
  color: #0f172a;
  border-radius: 20px;
  padding: 40px 32px;
  text-align: center;
  transition: all 0.3s ease;
  background: #ffffff;
  border: 1px solid rgba(15, 23, 42, 0.08);
  box-shadow: 0 4px 20px rgba(15, 23, 42, 0.06);
  display: flex;
  flex-direction: column;
  height: 100%;
  
  @media (max-width: 1024px) {
    padding: 36px 28px;
  }
  @media (max-width: 768px) {
    padding: 32px 24px;
  }
  @media (max-width: 480px) {
    padding: 28px 20px;
  }
  
  :hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(15, 23, 42, 0.12);
    border-color: rgba(14, 165, 233, 0.2);
    
    ${IconWrapper} {
      transform: scale(1.05);
      
      svg {
        transform: scale(1.1);
      }
    }
  }
  
  h4 {
    margin: 0 0 16px;
    font-size: 24px;
    font-weight: 700;
    color: #0f172a;
    text-align: center;
    line-height: 1.3;
    
    @media (max-width: 768px) {
      font-size: 22px;
    }
  }
  
  p {
    color: #475569;
    line-height: 1.75;
    margin: 0;
    font-size: 16px;
    text-align: center;
    flex-grow: 1;
    
    @media (max-width: 768px) {
      font-size: 15px;
    }
  }
`;

export const ExternalLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  background-color: rgba(14, 165, 233, 0.1);
  color: #0ea5e9;
  text-decoration: none;
  border-radius: 999px;
  font-weight: 600;
  font-size: 15px;
  transition: all 0.3s ease;
  border: 2px solid rgba(14, 165, 233, 0.3);
  margin: 0 auto;
  width: fit-content;
  min-width: 140px;

  &:hover {
    background-color: #0ea5e9;
    color: white;
    border-color: #0ea5e9;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(14, 165, 233, 0.3);
  }

  &:visited {
    color: #0ea5e9;
  }
  
  &:hover:visited {
    color: white;
  }
`;

export const HighlightPill = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 20px;
  border-radius: 8px;
  border: 1px solid rgba(14, 165, 233, 0.2);
  background: rgba(14, 165, 233, 0.08);
  color: #0ea5e9;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

export const Description = styled.p`
  font-size: 17px;
  line-height: 1.75;
  color: #64748b;
  margin-top: 16px;
`;

export default Section;
