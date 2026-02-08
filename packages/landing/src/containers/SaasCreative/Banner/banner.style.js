import { rgba } from "polished";
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  z-index: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    min-height: 90vh;
  }
  
  @media (max-width: 480px) {
    min-height: 85vh;
  }
`;


export const BannerContentWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    height: auto;
    min-height: 90vh;
  }

  @media (max-width: 768px) {
    min-height: 85vh;
    padding-top: 80px;
    padding-bottom: 60px;
  }

  @media (max-width: 480px) {
    min-height: 80vh;
    padding-top: 70px;
    padding-bottom: 40px;
  }
`;

export const BannerContent = styled.div`
  position: relative;
  z-index: 3;
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 60px;
  color: #ffffff;
  text-align: left;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100vw;
    height: 100vh;
    background: radial-gradient(circle at center, rgba(14, 165, 233, 0.15) 0%, transparent 70%);
    pointer-events: none;
    z-index: -1;

    @media (max-width: 768px) {
      width: 100%;
      height: 100%;
    }
  }

  @media (max-width: 1200px) {
    max-width: 100%;
    padding: 0 48px;
  }

  @media (max-width: 1024px) {
    padding: 0 40px;
  }

  @media (max-width: 768px) {
    padding: 0 32px;
    align-items: center;
    text-align: center;
  }

  @media (max-width: 480px) {
    padding: 0 20px;
  }

  @media (max-width: 360px) {
    padding: 0 16px;
  }

  h1,
  h2 {
    margin: 0;
  }

  .main-heading {
    color: #ffffff;
    font-weight: 800;
    font-size: 56px;
    line-height: 1.1;
    letter-spacing: -0.03em;
    margin-bottom: 24px;
    position: relative;
    z-index: 2;

    @media (max-width: 1200px) {
      font-size: 48px;
    }

    @media (max-width: 1024px) {
      font-size: 42px;
    }

    @media (max-width: 768px) {
      font-size: 36px;
      line-height: 1.15;
      margin-bottom: 20px;
    }

    @media (max-width: 480px) {
      font-size: 28px;
      line-height: 1.2;
      margin-bottom: 16px;
    }

    @media (max-width: 360px) {
      font-size: 24px;
    }
  }

  .description-text {
    margin-top: 24px;
    max-width: 600px;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.95);
    position: relative;
    z-index: 2;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);

    @media (max-width: 1024px) {
      max-width: 550px;
      font-size: 17px;
    }

    @media (max-width: 768px) {
      max-width: 100%;
      font-size: 16px;
      line-height: 1.65;
      margin-top: 20px;
    }

    @media (max-width: 480px) {
      font-size: 15px;
      line-height: 1.6;
      margin-top: 16px;
    }

    @media (max-width: 360px) {
      font-size: 14px;
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const Subscribe = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  margin: 40px 0 0;
  position: relative;
  z-index: 1;
  animation: fadeInUp 1s ease-out 2s both;

  @media (max-width: 768px) {
    justify-content: center;
    margin-top: 32px;
    gap: 16px;
  }

  @media (max-width: 480px) {
    margin-top: 24px;
    gap: 12px;
    width: 100%;
  }

  .reusecore__button {
    border-radius: 12px;
    padding: 0 42px;
    min-height: 64px;
    font-weight: 700;
    font-size: 17px;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    position: relative;
    overflow: hidden;

    @media (max-width: 768px) {
      padding: 0 36px;
      min-height: 60px;
      font-size: 16px;
    }

    @media (max-width: 480px) {
      padding: 0 32px;
      min-height: 56px;
      font-size: 15px;
    }
  }

  .primary-cta {
    background: linear-gradient(120deg, #0ea5e9, #38bdf8, #0ea5e9);
    background-size: 200% 200%;
    animation: gradientMove 3s ease infinite;
    box-shadow: 0 12px 40px rgba(14, 165, 233, 0.4),
                0 0 20px rgba(14, 165, 233, 0.3);
    border: none;
    color: #fff;
    
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

    &:hover {
      transform: translateY(-4px) scale(1.02);
      box-shadow: 0 20px 50px rgba(14, 165, 233, 0.5),
                  0 0 30px rgba(14, 165, 233, 0.4);
      
      &::before {
        left: 100%;
      }
    }

    &:active {
      transform: translateY(-2px) scale(0.98);
    }
  }

  @keyframes gradientMove {
    0%, 100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }

  .secondary-cta {
    background: transparent;
    border: 1px solid rgba(15, 23, 42, 0.15);
    color: #0f172a;
    box-shadow: none;
    &:hover {
      background: rgba(148, 163, 184, 0.15);
      border-color: rgba(15, 23, 42, 0.25);
    }
  }

  @media only screen and (max-width: 480px) {
    .reusecore__button {
      width: 100%;
      min-height: 56px;
    }
  }
`;

export const Figure = styled.figure`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  z-index: 1;
  overflow: hidden;
  
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(circle at center, rgba(14, 165, 233, 0.3) 0%, rgba(15, 23, 42, 0.6) 100%);
    z-index: 2;
    pointer-events: none;

    @media (max-width: 768px) {
      background: 
        radial-gradient(circle at center, rgba(14, 165, 233, 0.35) 0%, rgba(15, 23, 42, 0.7) 100%);
    }
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;

    @media (max-width: 768px) {
      object-position: center center;
    }
  }
`;

export const HighlightPill = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 6px 14px;
  border-radius: 999px;
  border: 1px solid rgba(148, 163, 184, 0.6);
  background: rgba(15, 23, 42, 0.35);
  color: #e5e7eb;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 12px;
  backdrop-filter: blur(10px);
`;

export const FeatureList = styled.ul`
  display: none;
`;

export const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 18px 20px;
  border-radius: 16px;
  border: 1px solid rgba(15, 23, 42, 0.12);
  background: #f8fafc;
  color: #0f172a;
  font-size: 15px;
  line-height: 1.5;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.08);

  &::before {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-top: 6px;
    background: linear-gradient(145deg, #0ea5e9, #38bdf8);
    box-shadow: 0 0 10px rgba(14, 165, 233, 0.6);
    flex-shrink: 0;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const TrustSignal = styled.p`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.9);
  margin: 24px 0 0 0;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  position: relative;
  z-index: 2;
  animation: fadeInUp 1s ease-out 2.5s both;
  display: flex;
  align-items: center;
  gap: 8px;
  text-shadow: 0 1px 6px rgba(0, 0, 0, 0.3);

  &::before {
    content: "✓";
    color: #10b981;
    font-weight: bold;
    font-size: 16px;
    animation: checkPulse 2s ease-in-out infinite;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    margin-top: 20px;
    gap: 6px;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;

    &::before {
      font-size: 14px;
    }
  }

  @media (max-width: 480px) {
    font-size: 11px;
    margin-top: 16px;
    letter-spacing: 0.05em;
    line-height: 1.4;

    &::before {
      font-size: 12px;
    }
  }

  @keyframes checkPulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
  }
`;

export const TypewriterText = styled.span`
  display: inline-block;
  position: relative;

  .cursor {
    display: inline-block;
    width: 3px;
    height: 1em;
    background: linear-gradient(180deg, #0ea5e9, #38bdf8);
    margin-left: 4px;
    animation: blink 1s infinite;
    vertical-align: baseline;
    box-shadow: 0 0 8px rgba(14, 165, 233, 0.8);
  }

  @keyframes blink {
    0%, 50% {
      opacity: 1;
    }
    51%, 100% {
      opacity: 0;
    }
  }
`;

export const AnimatedBadge = styled.span`
  display: inline-block;
  padding: 12px 28px;
  border-radius: 50px;
  font-size: 36px;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(239, 246, 255, 0.95);
  background: rgba(14, 165, 233, 0.2);
  border: 1px solid rgba(14, 165, 233, 0.4);
  backdrop-filter: blur(10px);
  margin-bottom: 24px;
  position: relative;
  z-index: 2;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    background: rgba(14, 165, 233, 0.3);
    border-color: rgba(14, 165, 233, 0.5);
  }

  @media (max-width: 1200px) {
    font-size: 28px;
    padding: 10px 24px;
  }

  @media (max-width: 1024px) {
    font-size: 24px;
    padding: 10px 22px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    padding: 8px 20px;
    margin-bottom: 20px;
    letter-spacing: 0.12em;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 6px 16px;
    letter-spacing: 0.1em;
    margin-bottom: 16px;
  }

  @media (max-width: 360px) {
    font-size: 12px;
    padding: 5px 12px;
    letter-spacing: 0.08em;
  }
`;

export const GlowEffect = styled.div`
  display: none;
`;

export default Section;
