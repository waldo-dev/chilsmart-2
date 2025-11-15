import { rgba } from "polished";
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

const Section = styled.section`
  background: radial-gradient(circle at top, #f8fbff 0%, #e0f2ff 55%, #d9f0ff 100%);
  position: relative;
  min-height: 120vh;
  z-index: 0;
  overflow: hidden;
  padding-bottom: 80px;

  ::before,
  ::after {
    content: "";
    position: absolute;
    width: 200%;
    height: 200%;
    top: -50%;
    left: -50%;
    z-index: -1;
    pointer-events: none;
  }

  ::before {
    background: radial-gradient(
        circle at 30% 30%,
        rgba(14, 165, 233, 0.35),
        transparent 55%
      ),
      radial-gradient(
        circle at 70% 60%,
        rgba(59, 130, 246, 0.2),
        transparent 65%
      ),
      radial-gradient(
        circle at 50% 90%,
        rgba(14, 165, 233, 0.18),
        transparent 75%
      );
    animation: pulseLights 8s ease-in-out infinite;
    filter: blur(60px);
  }

  ::after {
    background: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.55) 65%,
      rgba(255, 255, 255, 0.85) 100%
    );
  }

  @keyframes pulseLights {
    0%, 100% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.05);
      opacity: 0.8;
    }
  }
`;


export const BannerContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 40px;

  @media (max-width: 1024px) {
    gap: 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (min-width: 1280px) {
    min-height: 100vh;
  }
`;

export const BannerContent = styled.div`
  flex: 1 1 50%;
  padding-top: 210px;
  max-width: 720px;
  margin: 0;
  text-align: left;
  @media (max-width: 1024px) {
    max-width: 600px;
    padding-top: 170px;
  }
  @media (max-width: 768px) {
    max-width: 100%;
    padding-top: 150px;
    text-align: center;
  }
  @media (max-width: 480px) {
    padding-top: 100px;
  }
  h2 {
    color: #0f172a;
    font-weight: 700;
    font-size: 54px;
    line-height: 1.15;
    letter-spacing: -1px;
    @media (max-width: 1024px) {
      font-size: 40px;
    }
    @media (max-width: 768px) {
      font-size: 32px;
    }
    @media (max-width: 480px) {
      font-size: 24px;
    }
  }
  p {
    font-weight: 500;
    font-size: 18px;
    line-height: 1.8;
    color: #475569;
    max-width: 100%;
    margin: 0;

    @media (max-width: 480px) {
      font-size: 16px;
      line-height: 1.6;
    }
  }
`;

export const Subscribe = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  margin: 36px 0 12px;

  @media only screen and (max-width: 768px) {
    justify-content: center;
  }

  .reusecore__button {
    border-radius: 12px;
    padding: 0 36px;
    min-height: 60px;
    font-weight: 700;
    font-size: 16px;
    transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
  }

  .primary-cta {
    background: linear-gradient(120deg, #0ea5e9, #38bdf8);
    box-shadow: 0 12px 30px rgba(14, 165, 233, 0.35);
    border: none;
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 18px 36px rgba(14, 165, 233, 0.45);
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
      min-height: 52px;
    }
  }
`;

export const Figure = styled.figure`
  flex: 1 1 50%;
  margin: 80px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
  border-radius: 32px;
  background: rgba(255, 255, 255, 0.85);
  border: 1px solid rgba(148, 163, 184, 0.35);
  box-shadow: 0 30px 60px rgba(15, 23, 42, 0.15);
  backdrop-filter: blur(12px);
  @media (max-width: 1024px) {
    margin-top: 50px;
    width: 100%;
  }
  img {
    width: 100%;
    height: auto;
  }
`;

export const HighlightPill = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 7px 16px;
  border-radius: 999px;
  border: 1px solid rgba(14, 165, 233, 0.4);
  background: rgba(14, 165, 233, 0.15);
  color: #0f172a;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 18px;
  backdrop-filter: blur(6px);
`;

export const FeatureList = styled.ul`
  list-style: none;
  margin: 32px 0 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 18px;
`;

export const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 18px 20px;
  border-radius: 16px;
  border: 1px solid rgba(15, 23, 42, 0.08);
  background: rgba(255, 255, 255, 0.9);
  color: #0f172a;
  font-size: 15px;
  line-height: 1.5;
  box-shadow: 0 18px 35px rgba(15, 23, 42, 0.12);
  backdrop-filter: blur(8px);

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
  font-size: 14px;
  color: rgba(15, 23, 42, 0.6);
  margin: 12px 0 0;
  letter-spacing: 0.03em;
  max-width: 520px;
  @media (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export default Section;
