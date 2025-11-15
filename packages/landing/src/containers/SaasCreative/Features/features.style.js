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
  border-radius: 30px;
  padding: 48px;
  text-align: left;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(148, 163, 184, 0.2);
  box-shadow: 0 35px 70px rgba(15, 23, 42, 0.12);
  @media (max-width: 1024px) {
    padding: 28px;
  }
  @media (max-width: 768px) {
    padding: 32px;
  }
  @media (max-width: 480px) {
    padding: 28px;
  }
  :hover {
    transform: translateY(-8px);
    box-shadow: 0 45px 90px rgba(15, 23, 42, 0.18);
  }
  figure {
    margin: 0 0 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 120px;
    background: rgba(14, 165, 233, 0.08);
    border-radius: 24px;
    img {
      margin: 0;
      max-height: 80px;
      @media (min-width: 769px) and (max-width: 1024px) {
        max-width: 75px;
      }
    }
  }
  p {
    color: #475569;
    line-height: 1.75;
    margin: 0;
  }
`;

export const ExternalLink = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: rgba(14, 165, 233, 0.12);
  color: #0ea5e9;
  text-decoration: none;
  border-radius: 999px;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 1px solid rgba(14, 165, 233, 0.4);

  &:hover {
    background-color: rgba(14, 165, 233, 0.2);
    border-color: rgba(14, 165, 233, 0.6);
  }

  &:visited {
    color: #0ea5e9;
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
