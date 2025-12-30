import styled, { keyframes } from "styled-components";
import { themeGet } from "@styled-system/theme-get";

const slideShow = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-33.333%);
  }
`;

const SectionWrapper = styled.section`
  position: relative;
  background: #f8fafc;
  padding: 100px 0;
  overflow: hidden;
  isolation: isolate;
  border-top: 1px solid rgba(15, 23, 42, 0.08);
  border-bottom: 1px solid rgba(15, 23, 42, 0.08);
  
  @media only screen and (max-width: 991px) {
    padding: 80px 0;
  }

  @media only screen and (max-width: 624px) {
    padding: 60px 0;
  }
`;

export const SectionHeader = styled.div`
  max-width: 720px;
  text-align: left;
  margin: 0 auto 60px;
  color: #475569;
  h2 {
    color: #0f172a;
    font-size: 42px;
    line-height: 1.2;
    margin-bottom: 20px;
  }
  p {
    font-size: 18px;
    line-height: 1.8;
  }
  @media only screen and (max-width: 768px) {
    text-align: center;
    h2 {
      font-size: 32px;
    }
  }
`;

export const Highlight = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 6px 16px;
  border-radius: 999px;
  border: 1px solid rgba(14, 165, 233, 0.4);
  background: rgba(14, 165, 233, 0.15);
  color: #0f172a;
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 18px;
`;

export const ExperienceMainWrap = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 30px;
  padding-top: 10px;

  @media only screen and (max-width: 991px) {
    padding-top: 0px;
    padding-bottom: 15px;
  }
`;

export const ClientWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  position: relative;
  padding: 50px 40px;
  border-radius: 24px;
  border: 1px solid rgba(148, 163, 184, 0.2);
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 20px 60px rgba(15, 23, 42, 0.08);
  overflow: hidden;
  backdrop-filter: blur(10px);

  @media only screen and (max-width: 768px) {
    padding: 0;
    border: none;
    background: transparent;
    box-shadow: none;
    backdrop-filter: none;
    border-radius: 0;
  }

  .client__text {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: rgba(71, 85, 105, 0.9);
    text-align: center;
    margin-bottom: 0;
  }
`;

export const SliderMask = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.95), transparent 12%, transparent 88%, rgba(255, 255, 255, 0.95));
  z-index: 1;

  @media only screen and (max-width: 768px) {
    background: linear-gradient(90deg, rgba(248, 251, 255, 0.9), transparent 8%, transparent 92%, rgba(248, 251, 255, 0.9));
  }

  @media only screen and (max-width: 480px) {
    background: linear-gradient(90deg, rgba(248, 251, 255, 0.85), transparent 5%, transparent 95%, rgba(248, 251, 255, 0.85));
  }
`;

export const ExperienceWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 15px;
  position: relative;

  @media only screen and (max-width: 991px) {
    padding: 0;
  }

  .experience__item {
    width: 50%;
    margin: 0 0 40px;

    @media only screen and (max-width: 624px) {
      width: 100%;
    }
  }

  .experience__item {
    display: flex;
    align-items: flex-start;
    padding: 0px 70px;

    @media only screen and (max-width: 1366px) {
      padding: 0px 40px;
    }

    @media only screen and (max-width: 1219px) {
      padding: 0px 15px;
    }

    @media only screen and (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 0px 15px;
    }

    @media only screen and (max-width: 624px) {
      padding: 0px 50px;
    }

    @media only screen and (max-width: 480px) {
      padding: 0px;
    }

    .icon__wrapper {
      margin-right: 20px;
      flex-shrink: 0;

      @media only screen and (max-width: 768px) {
        margin-bottom: 15px;
        margin-right: 0px;
      }
    }
  }
`;

export const ImageSlider = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding: 0;
  z-index: 0;

  @media only screen and (max-width: 768px) {
    padding: 20px 0;
  }

  @media only screen and (max-width: 480px) {
    padding: 15px 0;
  }
`;

export const ImageSlide = styled.div`
  height: 60px;
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 30px;

  @media only screen and (max-width: 768px) {
    padding: 0 20px;
    height: 50px;
  }

  @media only screen and (max-width: 480px) {
    padding: 0 15px;
    height: 45px;
  }

  a {
    transition: all 0.3s ease;
    filter: opacity(0.85);
    transform: scale(1);
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      max-height: 70px;
      max-width: 140px;
      transition: inherit;
      object-fit: contain;
      @media only screen and (max-width: 1360px) {
        max-width: 90%;
      }

      @media only screen and (max-width: 991px) {
        max-width: 80%;
      }

      @media only screen and (max-width: 768px) {
        max-height: 50px;
        max-width: 120px;
      }

      @media only screen and (max-width: 480px) {
        max-height: 45px;
        max-width: 100px;
      }
    }

    &:hover {
      filter: opacity(1);
      transform: scale(1.05);
    }
  }
`;

export const SliderTrack = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  min-width: max-content;
  animation: ${slideShow} 40s linear infinite;
  will-change: transform;

  @media only screen and (max-width: 768px) {
    gap: 30px;
  }

  @media only screen and (max-width: 480px) {
    gap: 20px;
  }
`;

export const ClientStats = styled.div`
  display: flex;
  gap: 28px;
  margin-top: 35px;
  flex-wrap: wrap;
  color: #0f172a;
  @media only screen and (max-width: 480px) {
    justify-content: center;
  }
`;

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  span {
    font-size: 34px;
    font-weight: 700;
    color: #0f172a;
  }
  small {
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: rgba(15, 23, 42, 0.55);
  }
`;

export default SectionWrapper;
