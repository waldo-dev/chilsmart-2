import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

const SectionWrapper = styled.section`
  background: linear-gradient(180deg, #f8fafc 0%, #e0f2ff 55%, #f5fbff 100%);
  color: #0f172a;
  width: 100%;
  padding: 100px 0 60px;
  position: relative;
  overflow: hidden;
  z-index: 0;

  /* Luces difusas grandes */
  ::before {
    content: "";
    position: absolute;
    top: 15%;
    left: 5%;
    width: 360px;
    height: 360px;
    background: radial-gradient(
      circle,
      rgba(56, 189, 248, 0.25) 0%,
      transparent 70%
    );
    filter: blur(90px);
    animation: pulseLightLarge 6s ease-in-out infinite;
    z-index: -1;
    pointer-events: none;
  }

  /* Luces difusas medianas */
  ::after {
    content: "";
    position: absolute;
    top: 60%;
    right: 15%;
    width: 260px;
    height: 260px;
    background: radial-gradient(
      circle,
      rgba(14, 165, 233, 0.2) 0%,
      transparent 80%
    );
    filter: blur(80px);
    animation: pulseLightMedium 5s ease-in-out infinite alternate;
    z-index: -1;
    pointer-events: none;
  }

  /* Puntos de luz pequeños */
  .sparkle {
    position: absolute;
    width: 6px;
    height: 6px;
    background: rgba(14, 165, 233, 0.9);
    border-radius: 50%;
    filter: drop-shadow(0 0 6px rgba(14, 165, 233, 0.5));
    animation: sparkleAnim 3s ease-in-out infinite;
  }

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

export const ServiceWrapper = styled.div`
  gap: 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 64px;
  @media only screen and (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }
  .service__item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    padding: 32px;
    border-radius: 28px;
    background: rgba(255, 255, 255, 0.75);
    box-shadow: 0 25px 60px rgba(15, 23, 42, 0.15);
    border: 1px solid rgba(148, 163, 184, 0.2);
    backdrop-filter: blur(6px);

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
      justify-content: flex-start;

      @media only screen and (max-width: 768px) {
        justify-content: center;
      }
    }

    h4 {
      margin: 0 0 10px;
      font-weight: 700;
      font-size: 20px;
      line-height: 30px;
      text-align: left;
      color: #0f172a;

      @media only screen and (max-width: 1440px) {
        margin: 0 0 5px;
      }
      @media only screen and (max-width: 1360px) {
        font-size: 18px;
      }
      @media only screen and (max-width: 768px) {
        text-align: center;
      }
    }

    p {
      font-size: 16px;
      line-height: 28px;
      text-align: left;
      color: #475569;
      @media only screen and (max-width: 1440px) {
        font-size: 16px;
      }
      @media only screen and (max-width: 1360px) {
        font-size: 15px;
        line-height: 26px;
      }
      @media only screen and (max-width: 768px) {
        text-align: center;
      }
    }
  }
`;

export default SectionWrapper;
