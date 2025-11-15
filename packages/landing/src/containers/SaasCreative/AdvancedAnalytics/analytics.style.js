import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const Section = styled.section`
  padding: 110px 0;
  background: radial-gradient(circle at top, #f8fbff 0%, #e0f2ff 55%, #d9f0ff 100%);
  position: relative;
  overflow: hidden;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 60%;
    height: 60%;
    border-radius: 50%;
    filter: blur(120px);
    opacity: 0.4;
    z-index: 0;
  }

  &::before {
    top: -10%;
    left: -10%;
    background: rgba(59, 130, 246, 0.35);
  }

  &::after {
    bottom: -15%;
    right: -5%;
    background: rgba(14, 165, 233, 0.3);
  }

  @media (max-width: 1280px) {
    padding: 80px 0;
  }
  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;


export const Grid = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
  position: relative;
  z-index: 1;
  @media (max-width: 1200px) {
    gap: 40px;
  }
  @media (max-width: 1024px) {
    gap: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 768px) {
    display: block;
  }
`;

export const Figure = styled.figure`
  margin: 0;
  text-align: center;
  flex: 1;
  display: flex;
  justify-content: center;

  img {
    border-radius: 24px;
    border: 1px solid rgba(148, 163, 184, 0.35);
    max-width: 100%;
    height: auto;
    object-fit: cover;
    box-shadow: 0 30px 80px rgba(15, 23, 42, 0.2);

    @media (max-width: 768px) {
      max-width: 90%;
    }
  }
`;


export const Content = styled.div`
  padding: 40px;
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 32px;
  border: 1px solid rgba(148, 163, 184, 0.35);
  box-shadow: 0 35px 80px rgba(15, 23, 42, 0.15);
  margin-left: 40px;
  margin-top: 0;
  color: #0f172a;

  @media (max-width: 1024px) {
    margin-left: 0;
    margin-top: 0;
    padding: 32px;
  }

  h2 {
    font-size: 40px;
    margin-bottom: 20px;
    font-weight: 700;
    color: #0f172a;
  }

  .description {
    font-size: 18px;
    line-height: 1.8;
    color: #475569;
    margin-bottom: 24px;
  }

  .explore {
    display: inline-flex;
    align-items: center;
    color: #0ea5e9;
    font-weight: 600;
    font-size: 16px;
    transition: all 0.3s ease;
    border: 1px solid rgba(14, 165, 233, 0.3);
    border-radius: 999px;
    padding: 10px 20px;
    background: rgba(14, 165, 233, 0.08);

    i {
      margin-left: 8px;
      transition: transform 0.3s ease;
    }

    &:hover {
      background: rgba(14, 165, 233, 0.15);
      border-color: rgba(14, 165, 233, 0.5);
      i {
        transform: translateX(5px);
      }
    }
  }
`;

export const HighlightPill = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 6px 16px;
  border-radius: 999px;
  border: 1px solid rgba(14, 165, 233, 0.4);
  background: rgba(14, 165, 233, 0.1);
  color: #0f172a;
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const BulletList = styled.ul`
  list-style: none;
  margin: 0 0 24px;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const BulletItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 16px;
  color: #334155;
  line-height: 1.6;

  &::before {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-top: 8px;
    background: linear-gradient(145deg, #0ea5e9, #38bdf8);
    flex-shrink: 0;
  }
`;

export const Signature = styled.p`
  font-size: 14px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: rgba(15, 23, 42, 0.6);
  margin-bottom: 24px;
`;

export default Section;
