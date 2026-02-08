import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

const SectionWrapper = styled.section`
  background: #f8fafc;
  color: #0f172a;
  width: 100%;
  padding: 100px 0 80px;
  position: relative;
  overflow: hidden;
  z-index: 0;
  border-top: 1px solid rgba(15, 23, 42, 0.08);
  border-bottom: 1px solid rgba(15, 23, 42, 0.08);


  .sparkle:nth-child(1) {
    top: 30%;
    left: 25%;
    animation-delay: 0s;
  }
  .sparkle:nth-child(2) {
    top: 45%;
    left: 40%;
    animation-delay: 1s;
  }
  .sparkle:nth-child(3) {
    top: 70%;
    left: 60%;
    animation-delay: 2s;
  }
  .sparkle:nth-child(4) {
    top: 50%;
    left: 75%;
    animation-delay: 2.5s;
  }
  .sparkle:nth-child(5) {
    top: 65%;
    left: 20%;
    animation-delay: 1.7s;
  }

  @keyframes pulseLightLarge {
    0%,
    100% {
      opacity: 0.4;
      transform: scale(1);
    }
    50% {
      opacity: 0.7;
      transform: scale(1.1);
    }
  }

  @keyframes pulseLightMedium {
    0%,
    100% {
      opacity: 0.3;
      transform: scale(1);
    }
    50% {
      opacity: 0.6;
      transform: scale(1.1);
    }
  }

  @keyframes sparkleAnim {
    0%,
    100% {
      opacity: 0.8;
      transform: scale(1);
    }
    50% {
      opacity: 0.3;
      transform: scale(1.3);
    }
  }

  @media only screen and (max-width: 1440px) {
    padding: 70px 0 0px;
  }

  @media only screen and (max-width: 768px) {
    padding: 70px 0 40px;
  }
`;

export const SectionHeader = styled.header`
  text-align: center;
  margin-bottom: 60px;
  @media only screen and (max-width: 1440px) {
    margin-bottom: 50px;
  }
  @media only screen and (max-width: 991px) {
    margin-bottom: 40px;
  }
  @media only screen and (max-width: 480px) {
    margin-bottom: 25px;
  }

  h2 {
    font-size: 3.4rem;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 14px;
    color: #0f172a;

    @media only screen and (max-width: 991px) {
      font-size: 4rem;
      margin-bottom: 10px;
    }
    @media only screen and (max-width: 767px) {
      font-size: 3rem;
    }
    @media screen and (max-width: 480px) {
      font-size: 3rem;
      line-height: 50px;
      margin-bottom: 20px;
    }
  }

  p {
    font-weight: 400;
    font-size: 1.05rem;
    line-height: 1.9;
    margin-bottom: 0;
    max-width: 640px;
    margin: 0 auto;
    width: 100%;
    color: #334155;
    @media only screen and (max-width: 1440px) {
      font-size: 16px;
      line-height: 1.6;
    }
    @media only screen and (max-width: 991px) {
      font-size: 15px;
      line-height: 28px;
    }
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 90px;
  border-radius: 22px;
  background: linear-gradient(135deg, ${props => props.style?.color || '#0ea5e9'}20, ${props => props.style?.color || '#0ea5e9'}08);
  border: 2px solid ${props => props.style?.color || '#0ea5e9'}25;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  
  &::after {
    content: "";
    position: absolute;
    inset: -2px;
    border-radius: 22px;
    padding: 2px;
    background: linear-gradient(135deg, ${props => props.style?.color || '#0ea5e9'}, transparent);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  svg {
    transition: all 0.4s ease;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
  }

  @media only screen and (max-width: 768px) {
    width: 80px;
    height: 80px;
    border-radius: 20px;
  }
`;

export const ServiceWrapper = styled.div`
  gap: 32px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 64px;
  
  @media only screen and (max-width: 991px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
  
  @media only screen and (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 24px;
  }
  .service__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    padding: 40px 32px;
    border-radius: 24px;
    background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
    box-shadow: 0 10px 40px rgba(15, 23, 42, 0.08),
                0 0 0 1px rgba(148, 163, 184, 0.1);
    border: 1px solid rgba(148, 163, 184, 0.15);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    text-align: center;
    position: relative;
    overflow: hidden;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, #0ea5e9, #8b5cf6);
      transform: scaleX(0);
      transition: transform 0.4s ease;
    }

    &:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 60px rgba(15, 23, 42, 0.15),
                  0 0 0 1px rgba(14, 165, 233, 0.2);
      
      &::before {
        transform: scaleX(1);
      }
      
      ${IconWrapper} {
        transform: scale(1.15) rotate(5deg);
        box-shadow: 0 8px 24px rgba(14, 165, 233, 0.25);
      }
    }

    @media only screen and (max-width: 768px) {
      align-items: center;
      gap: 15px;
      text-align: center;
      padding: 28px;
    }

    img {
      max-width: 64px;
      height: auto;
      object-fit: contain;
    }

    .icon__wrapper {
      display: inline-flex;
      justify-content: center;
      width: 100%;
    }

    h3 {
      margin: 0 0 16px;
      font-weight: 800;
      font-size: 22px;
      line-height: 1.3;
      text-align: center;
      color: #0f172a;
      letter-spacing: -0.02em;

      @media only screen and (max-width: 1440px) {
        margin: 0 0 12px;
        font-size: 20px;
      }
      @media only screen and (max-width: 1360px) {
        font-size: 19px;
      }
    }

    h4 {
      margin: 0 0 10px;
      font-weight: 700;
      font-size: 20px;
      line-height: 30px;
      text-align: center;
      color: #0f172a;

      @media only screen and (max-width: 1440px) {
        margin: 0 0 5px;
      }
      @media only screen and (max-width: 1360px) {
        font-size: 18px;
      }
    }

    p {
      font-size: 16px;
      line-height: 28px;
      text-align: center;
      color: #475569;
      @media only screen and (max-width: 1440px) {
        font-size: 16px;
      }
      @media only screen and (max-width: 1360px) {
        font-size: 15px;
        line-height: 26px;
      }
    }
  }
`;

export default SectionWrapper;
