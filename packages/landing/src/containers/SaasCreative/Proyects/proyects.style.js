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

export const ProjectsCarousel = styled.div`
  position: relative;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 768px) {
    margin-top: 40px;
  }
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.visibleCards || 3}, 1fr);
  gap: 40px;
  width: 100%;
  margin-bottom: 50px;
  align-items: start;

  @media only screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 32px;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const ProjectCard = styled.div`
  background: #ffffff;
  border-radius: 24px;
  padding: 0;
  box-shadow: 0 8px 30px rgba(15, 23, 42, 0.08),
              0 0 0 1px rgba(148, 163, 184, 0.1);
  width: 100%;
  position: relative;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  animation: slideIn 0.5s ease-out;
  border: 1px solid rgba(148, 163, 184, 0.12);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #0ea5e9, #8b5cf6);
    z-index: 3;
  }

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 50px rgba(15, 23, 42, 0.12),
                0 0 0 1px rgba(14, 165, 233, 0.2);
    border-color: rgba(14, 165, 233, 0.25);
  }

  @media only screen and (max-width: 768px) {
    border-radius: 20px;
  }

  @media only screen and (max-width: 480px) {
    border-radius: 16px;
  }
`;

export const ProjectImageWrapper = styled.div`
  width: 100%;
  min-height: 650px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.35;
    transition: opacity 0.3s ease, transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
  }

  &:hover img {
    opacity: 0.4;
    transform: scale(1.02);
  }

  @media only screen and (max-width: 1200px) {
    min-height: 600px;
  }

  @media only screen and (max-width: 1024px) {
    min-height: 550px;
  }

  @media only screen and (max-width: 768px) {
    min-height: 500px;
  }

  @media only screen and (max-width: 480px) {
    min-height: 450px;
  }
`;

export const ProjectContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 40px 32px;
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    to top,
    rgba(15, 23, 42, 0.96) 0%,
    rgba(15, 23, 42, 0.88) 40%,
    rgba(15, 23, 42, 0.75) 100%
  );
  backdrop-filter: blur(20px);
  z-index: 2;

  @media only screen and (max-width: 768px) {
    padding: 32px 24px;
  }

  @media only screen and (max-width: 480px) {
    padding: 28px 20px;
  }
`;

export const ProjectHeader = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const ProjectTitle = styled.h3`
  font-size: 26px;
  font-weight: 800;
  color: #ffffff;
  margin: 0 0 12px 0;
  line-height: 1.2;
  letter-spacing: -0.02em;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.4);

  @media only screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media only screen and (max-width: 480px) {
    font-size: 22px;
  }
`;

export const ProjectType = styled.span`
  display: inline-block;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  background: linear-gradient(135deg, rgba(14, 165, 233, 0.3), rgba(139, 92, 246, 0.3));
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.3);
  margin-top: 4px;
  backdrop-filter: blur(10px);
`;

export const ProjectDescription = styled.p`
  font-size: 15px;
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.95);
  margin: 0 0 24px 0;
  max-width: 100%;
  text-shadow: 0 1px 6px rgba(0, 0, 0, 0.3);

  @media only screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 1.7;
    margin-bottom: 20px;
  }
`;

export const TechnologiesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 28px;

  @media only screen and (max-width: 768px) {
    margin-bottom: 24px;
  }
`;

export const TechTag = styled.span`
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 500;
  background: rgba(255, 255, 255, 0.2);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.2s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    border-color: rgba(255, 255, 255, 0.4);
    transform: translateY(-1px);
  }
`;

export const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  padding: 14px 28px;
  background: linear-gradient(135deg, #0ea5e9, #38bdf8);
  color: #ffffff;
  font-weight: 600;
  font-size: 15px;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(14, 165, 233, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(14, 165, 233, 0.4);
    background: linear-gradient(135deg, #0284c7, #0ea5e9);
  }

  &:active {
    transform: translateY(0);
  }

  @media only screen and (max-width: 480px) {
    width: 100%;
    justify-content: center;
  }
`;

export const CarouselControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  margin-top: 40px;

  @media only screen and (max-width: 480px) {
    gap: 16px;
    margin-top: 32px;
  }
`;

export const ControlButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 2px solid rgba(14, 165, 233, 0.3);
  background: #ffffff;
  color: #0ea5e9;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.08);

  &:hover {
    border-color: #0ea5e9;
    background: linear-gradient(135deg, #0ea5e9, #38bdf8);
    color: #ffffff;
    transform: scale(1.1);
    box-shadow: 0 6px 20px rgba(14, 165, 233, 0.3);
  }

  &:active {
    transform: scale(0.95);
  }

  @media only screen and (max-width: 480px) {
    width: 40px;
    height: 40px;
  }
`;

export const CarouselDots = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Dot = styled.button`
  width: ${props => props.active ? '32px' : '12px'};
  height: 12px;
  border-radius: 6px;
  border: none;
  background: ${props => props.active 
    ? 'linear-gradient(135deg, #0ea5e9, #8b5cf6)' 
    : 'rgba(148, 163, 184, 0.4)'};
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${props => props.active 
    ? '0 2px 8px rgba(14, 165, 233, 0.3)' 
    : 'none'};

  &:hover {
    background: ${props => props.active 
      ? 'linear-gradient(135deg, #0284c7, #7c3aed)' 
      : 'rgba(14, 165, 233, 0.6)'};
    transform: scale(1.1);
  }
`;

export default SectionWrapper;
