import styled from 'styled-components';
import { rgba } from 'polished';
import { themeGet } from '@styled-system/theme-get';

const Section = styled.section`
  background: linear-gradient(180deg, #f8fbff 0%, #e0f2ff 55%, #d9f0ff 100%);
  padding: 120px 0 100px;

  @media (max-width: 1024px) {
    padding-bottom: 70px;
  }
  @media (max-width: 768px) {
    padding-top: 70px;
    padding-bottom: 70px;
  }
  @media (max-width: 480px) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
`;


export const SectionHeading = styled.div`
  text-align: center;
  max-width: 720px;
  margin: 0 auto 60px;
  h2 {
    color: #0f172a;
    font-weight: 800;
    line-height: 1.2;
    letter-spacing: -0.5px;
    font-size: 42px;
    @media (max-width: 480px) {
      font-size: 30px;
    }
  }
  p {
    color: #475569;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 80px;
  @media (max-width: 768px) {
    margin-top: 50px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    margin-top: 50px;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Item = styled.div`
  color: #0f172a;
  border-radius: 24px;
  padding: 32px;
  text-align: center;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid rgba(148, 163, 184, 0.2);
  box-shadow: 0 20px 60px rgba(15, 23, 42, 0.1);
  display: flex;
  flex-direction: column;
  height: 100%;
  cursor: ${props => props.hasUrl ? 'pointer' : 'default'};
  
  @media (max-width: 1024px) {
    padding: 28px;
  }
  @media (max-width: 768px) {
    padding: 24px;
  }
  @media (max-width: 480px) {
    padding: 20px;
  }
  
  :hover {
    transform: translateY(-6px);
    box-shadow: 0 30px 80px rgba(15, 23, 42, 0.15);
    border-color: rgba(14, 165, 233, 0.3);
  }
  
  figure {
    margin: 0 0 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    aspect-ratio: 16 / 9;
    min-height: 200px;
    background: linear-gradient(135deg, rgba(14, 165, 233, 0.06) 0%, rgba(139, 92, 246, 0.06) 100%);
    border-radius: 16px;
    border: 1px solid rgba(148, 163, 184, 0.15);
    padding: 12px;
    overflow: hidden;
    position: relative;
    transition: all 0.3s ease;
    
    @media (max-width: 1024px) {
      min-height: 180px;
    }
    
    @media (max-width: 768px) {
      min-height: 160px;
    }
    
    a {
      display: block;
      width: 100%;
      height: 100%;
      text-decoration: none;
      color: inherit;
    }
    
    img {
      margin: 0;
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
      border-radius: 10px;
      transition: transform 0.3s ease;
    }
    
    &:hover {
      border-color: rgba(14, 165, 233, 0.3);
      background: linear-gradient(135deg, rgba(14, 165, 233, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
      
      img {
        transform: scale(1.03);
      }
    }
  }
  
  h4 {
    margin: 0 0 12px;
    font-size: 22px;
    font-weight: 700;
    color: #0f172a;
    text-align: center;
    
    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
  
  p {
    color: #475569;
    line-height: 1.7;
    margin: 0 0 20px;
    font-size: 15px;
    text-align: center;
    flex-grow: 1;
    
    @media (max-width: 768px) {
      font-size: 14px;
      margin-bottom: 16px;
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
  padding: 6px 16px;
  border-radius: 999px;
  border: 1px solid rgba(14, 165, 233, 0.4);
  background: rgba(14, 165, 233, 0.12);
  color: #0f172a;
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Description = styled.p`
  font-size: 16px;
  line-height: 1.8;
  color: #475569;
  margin-top: 16px;
`;

export default Section;
