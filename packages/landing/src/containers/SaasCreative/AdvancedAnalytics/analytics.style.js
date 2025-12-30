import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const Section = styled.section`
  padding: 100px 0;
  background: #ffffff;
  position: relative;
  overflow: hidden;
  border-top: 1px solid rgba(15, 23, 42, 0.08);
  border-bottom: 1px solid rgba(15, 23, 42, 0.08);

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
  align-items: center;

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

export const IconContainer = styled.div`
  width: 100%;
  max-width: 400px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: linear-gradient(135deg, rgba(14, 165, 233, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
  border-radius: 32px;
  border: 2px solid rgba(14, 165, 233, 0.2);
  box-shadow: 0 30px 80px rgba(15, 23, 42, 0.15);
  backdrop-filter: blur(10px);

  @media (max-width: 1024px) {
    max-width: 100%;
    height: 350px;
  }

  @media (max-width: 768px) {
    height: 300px;
    margin-bottom: 40px;
  }
`;

export const IconGroup = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .icon-main {
    position: relative;
    z-index: 2;
    width: 160px;
    height: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #0ea5e9 0%, #8b5cf6 100%);
    border-radius: 50%;
    box-shadow: 0 20px 60px rgba(14, 165, 233, 0.4);
    color: white;
    animation: pulse 3s ease-in-out infinite;

    @media (max-width: 768px) {
      width: 120px;
      height: 120px;
    }

    svg {
      filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
    }
  }

  .icon-secondary {
    position: absolute;
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ffffff;
    border-radius: 20px;
    box-shadow: 0 4px 16px rgba(15, 23, 42, 0.1);
    border: 1px solid rgba(15, 23, 42, 0.1);
    animation: float 4s ease-in-out infinite;

    @media (max-width: 768px) {
      width: 80px;
      height: 80px;
    }

    svg {
      color: #0ea5e9;
    }
  }

  .icon-dollar {
    top: 20%;
    right: 10%;
    animation-delay: 0s;
    background: linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%);
    border-color: rgba(16, 185, 129, 0.3);

    svg {
      color: #10b981;
    }
  }

  .icon-trend {
    bottom: 20%;
    left: 10%;
    animation-delay: 1.5s;
    background: linear-gradient(135deg, rgba(14, 165, 233, 0.1) 0%, rgba(14, 165, 233, 0.05) 100%);
    border-color: rgba(14, 165, 233, 0.3);

    svg {
      color: #0ea5e9;
    }
  }

  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
      box-shadow: 0 20px 60px rgba(14, 165, 233, 0.4);
    }
    50% {
      transform: scale(1.05);
      box-shadow: 0 25px 70px rgba(14, 165, 233, 0.5);
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-15px);
    }
  }
`;


export const Content = styled.div`
  padding: 40px;
  background-color: #f8fafc;
  border-radius: 24px;
  border: 1px solid rgba(15, 23, 42, 0.1);
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.08);
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
