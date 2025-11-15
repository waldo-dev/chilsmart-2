import styled, { keyframes } from "styled-components";
import { themeGet } from "@styled-system/theme-get";

const slideShow = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const SectionWrapper = styled.section`
  position: relative;
  background: radial-gradient(circle at top, #f8fbff 0%, #e0f2ff 60%, #d4e9ff 100%);
  padding: 100px 0;
  overflow: hidden;
  isolation: isolate;
  ::before,
  ::after {
    content: "";
    position: absolute;
    inset: 0;
    opacity: 0.4;
    z-index: -1;
  }
  ::before {
    background: radial-gradient(
      circle at 20% 20%,
      rgba(56, 189, 248, 0.35),
      transparent 55%
    );
    filter: blur(140px);
  }
  ::after {
    background: linear-gradient(120deg, rgba(255, 255, 255, 0.8), transparent);
  }
  @media only screen and (max-width: 991px) {
    padding: 60px 0 80px;
  }

  @media only screen and (max-width: 624px) {
    padding: 45px 0 65px;
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
  padding: 40px 30px;
  border-radius: 30px;
  border: 1px solid rgba(148, 163, 184, 0.35);
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0 40px 80px rgba(15, 23, 42, 0.12);
  overflow: hidden;

  @media only screen and (max-width: 624px) {
    padding: 30px 15px;
  }

  @media only screen and (max-width: 480px) {
    padding: 25px 12px;
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
  background: linear-gradient(90deg, #f8fbff, transparent 15%, transparent 85%, #f8fbff);
  opacity: 0.7;
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

  @media only screen and (max-width: 991px) {
    padding-top: 65px;
  }

  @media only screen and (max-width: 624px) {
    padding-top: 45px;
  }
`;

export const ImageSlide = styled.div`
  height: 60px;
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 30px;

  a {
    transition: all 0.3s ease;
    filter: grayscale(1) opacity(0.75);
    transform: scale(1);

    img {
      max-height: 70px;
      max-width: 140px;
      transition: inherit;
      @media only screen and (max-width: 1360px) {
        max-width: 90%;
      }

      @media only screen and (max-width: 991px) {
        max-width: 80%;
      }
    }

    &:hover {
      filter: grayscale(0) opacity(0.95);
      transform: scale(1.03);
    }
  }
`;

export const SliderTrack = styled.div`
  display: flex;
  align-items: center;
  gap: 35px;
  min-width: max-content;
  animation: ${slideShow} 30s linear infinite;
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
