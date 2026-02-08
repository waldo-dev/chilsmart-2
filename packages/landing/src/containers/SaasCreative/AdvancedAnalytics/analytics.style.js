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
  max-width: 450px;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: linear-gradient(135deg, rgba(14, 165, 233, 0.08) 0%, rgba(139, 92, 246, 0.08) 100%);
  border-radius: 32px;
  border: 2px solid rgba(14, 165, 233, 0.15);
  box-shadow: 0 20px 60px rgba(15, 23, 42, 0.1),
              inset 0 1px 0 rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(20px);
  overflow: hidden;
  transition: all 0.4s ease;

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(14, 165, 233, 0.1) 0%, transparent 70%);
    animation: rotate 20s linear infinite;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 1024px) {
    max-width: 100%;
    height: 380px;
  }

  @media (max-width: 768px) {
    height: 320px;
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
  z-index: 1;

  .icon-main {
    position: relative;
    z-index: 3;
    width: 180px;
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #0ea5e9 0%, #8b5cf6 100%);
    border-radius: 50%;
    box-shadow: 0 20px 60px rgba(14, 165, 233, 0.4),
                0 0 0 4px rgba(255, 255, 255, 0.1);
    color: white;
    animation: pulse 3s ease-in-out infinite;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }

    @media (max-width: 768px) {
      width: 140px;
      height: 140px;
    }

    svg {
      filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3));
      transition: transform 0.3s ease;
    }

    &:hover svg {
      transform: rotate(10deg);
    }
  }

  .icon-secondary {
    position: absolute;
    width: 110px;
    height: 110px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
    border-radius: 24px;
    box-shadow: 0 8px 24px rgba(15, 23, 42, 0.12),
                0 0 0 1px rgba(148, 163, 184, 0.1);
    border: 2px solid rgba(255, 255, 255, 0.8);
    animation: float 4s ease-in-out infinite;
    z-index: 2;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-5px) scale(1.05);
      box-shadow: 0 12px 32px rgba(15, 23, 42, 0.15);
    }

    @media (max-width: 768px) {
      width: 90px;
      height: 90px;
      border-radius: 20px;
    }

    svg {
      transition: transform 0.3s ease;
    }

    &:hover svg {
      transform: scale(1.1);
    }
  }

  .icon-dollar {
    top: 15%;
    right: 8%;
    animation-delay: 0s;
    background: linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(16, 185, 129, 0.05) 100%);
    border-color: rgba(16, 185, 129, 0.25);

    svg {
      color: #10b981;
    }
  }

  .icon-trend {
    bottom: 15%;
    left: 8%;
    animation-delay: 1.5s;
    background: linear-gradient(135deg, rgba(14, 165, 233, 0.15) 0%, rgba(14, 165, 233, 0.05) 100%);
    border-color: rgba(14, 165, 233, 0.25);

    svg {
      color: #0ea5e9;
    }
  }

  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
      box-shadow: 0 20px 60px rgba(14, 165, 233, 0.4),
                  0 0 0 4px rgba(255, 255, 255, 0.1);
    }
    50% {
      transform: scale(1.08);
      box-shadow: 0 25px 70px rgba(14, 165, 233, 0.5),
                  0 0 0 6px rgba(255, 255, 255, 0.15);
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-20px) rotate(2deg);
    }
  }
`;


export const Content = styled.div`
  flex: 1;
  padding: 48px;
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  border-radius: 28px;
  border: 1px solid rgba(148, 163, 184, 0.15);
  box-shadow: 0 12px 40px rgba(15, 23, 42, 0.08),
              0 0 0 1px rgba(255, 255, 255, 0.5);
  margin-left: 40px;
  margin-top: 0;
  color: #0f172a;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #0ea5e9, #8b5cf6);
    border-radius: 28px 28px 0 0;
  }

  @media (max-width: 1024px) {
    margin-left: 0;
    margin-top: 0;
    padding: 40px 32px;
  }

  @media (max-width: 768px) {
    padding: 32px 24px;
  }

  h2 {
    font-size: 42px;
    margin-bottom: 24px;
    font-weight: 800;
    color: #0f172a;
    line-height: 1.2;
    letter-spacing: -0.02em;

    @media (max-width: 768px) {
      font-size: 32px;
    }
  }

  .description {
    font-size: 18px;
    line-height: 1.8;
    color: #475569;
    margin-bottom: 32px;

    @media (max-width: 768px) {
      font-size: 16px;
      margin-bottom: 28px;
    }
  }

`;

export const ExploreLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #ffffff;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: none;
  border-radius: 12px;
  padding: 14px 28px;
  background: linear-gradient(135deg, #0ea5e9, #38bdf8);
  box-shadow: 0 8px 24px rgba(14, 165, 233, 0.3);
  text-decoration: none;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.5s;
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 32px rgba(14, 165, 233, 0.4);
    background: linear-gradient(135deg, #0284c7, #0ea5e9);

    &::before {
      left: 100%;
    }

    svg {
      transform: translateX(5px);
    }
  }

  &:active {
    transform: translateY(0);
  }
`;

export const HighlightPill = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 8px 20px;
  border-radius: 50px;
  border: 1px solid rgba(14, 165, 233, 0.3);
  background: linear-gradient(135deg, rgba(14, 165, 233, 0.12), rgba(139, 92, 246, 0.08));
  color: #0ea5e9;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(14, 165, 233, 0.1);
  backdrop-filter: blur(10px);
`;

export const BulletList = styled.ul`
  list-style: none;
  margin: 0 0 32px;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const BulletItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  font-size: 17px;
  color: #334155;
  line-height: 1.75;
  padding: 16px 20px;
  background: rgba(14, 165, 233, 0.04);
  border-radius: 12px;
  border-left: 3px solid #0ea5e9;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(14, 165, 233, 0.08);
    transform: translateX(4px);
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 14px 18px;
    gap: 14px;
  }

  strong {
    color: #0f172a;
    font-weight: 700;
  }

  &::before {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-top: 10px;
    background: linear-gradient(135deg, #0ea5e9, #8b5cf6);
    flex-shrink: 0;
    box-shadow: 0 2px 8px rgba(14, 165, 233, 0.4);
  }
`;

export const Signature = styled.p`
  font-size: 15px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: rgba(14, 165, 233, 0.8);
  margin-bottom: 32px;
  font-weight: 600;
  font-style: italic;
  padding: 16px 24px;
  background: linear-gradient(135deg, rgba(14, 165, 233, 0.08), rgba(139, 92, 246, 0.05));
  border-radius: 12px;
  border-left: 4px solid #0ea5e9;
  position: relative;


  @media (max-width: 768px) {
    font-size: 14px;
    padding: 14px 20px;
    margin-bottom: 28px;
  }
`;

export default Section;
