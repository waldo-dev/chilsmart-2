import { rgba } from "polished";
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import shape from "common/assets/image/saasCreative/shape.svg";

const Section = styled.section`
  background-color: #000;
  position: relative;
  min-height: 120vh;
  z-index: 0;
  ::before,
  ::after {
    content: "";
    position: absolute;
    width: 100%;
    z-index: -1;
  }
  ::before {
    background: transparent url(${shape?.src}) no-repeat;
    bottom: 147px;
    height: 232px;
    @media (max-width: 768px) {
      bottom: -30px;
    }
    @media (max-width: 480px) {
      bottom: -80px;
    }
  }
  ::after {
    background-color: #fff;
    bottom: 0;
    height: 150px;
    @media (max-width: 768px) {
      height: 0;
    }
  }
`;

export const BannerContentWrapper = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-between;
align-items: flex-start;
 @media (max-width: 768px) {
    flex-direction: column; /* en columnas en móvil */
  }

  @media (min-width: 1280px) {
    min-height: 100vh;
  }
`;

export const BannerContent = styled.div`
  flex: 1 1 50%;
  padding-top: 210px;
  max-width: 870px;
  margin: 0 auto;
  text-align: center;
  @media (max-width: 1024px) {
    max-width: 660px;
    padding-top: 170px;
  }
  @media (max-width: 768px) {
    max-width: 550px;
    padding-top: 150px;
  }
  @media (max-width: 480px) {
    padding-top: 100px;
  }
  h2 {
    color: ${themeGet("colors.white")};
    font-weight: 700;
    font-size: 54px;
    line-height: 1.3;
    text-align: center;
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
    line-height: 2.11;
    color: ${themeGet("colors.textColorLight")};
    max-width: 600px;
    margin: 0 auto;

    @media (max-width: 480px) {
      font-size: 16px;
      line-height: 1.6;
    }
  }
`;

export const Subscribe = styled.div`
  display: flex;
  justify-content: center;
  max-width: 540px;
  margin: 28px auto 0;
  @media screen and (max-width: 1366px) {
    max-width: 80%;
  }
  @media only screen and (max-width: 768px) {
    max-width: 80%;
    margin: 30px auto 0;
  }
  @media only screen and (max-width: 480px) {
    max-width: initial;
    display: block;
  }
  .reusecore__input {
    width: 100%;
  }
  .field-wrapper {
    margin-right: 15px;
    @media only screen and (max-width: 480px) {
      margin-right: 0;
    }
    input {
      border-color: #e9edf5;
      border-radius: 8px;
      font-size: 16px;
      min-height: 60px;
      padding: 0 24px;
      &::placeholder {
        color: ${rgba("#02073E", 0.4)};
        opacity: 1; /* Firefox */
      }
      @media only screen and (max-width: 1280px) {
        min-height: 50px;
      }
    }
  }
  button {
    border-radius: 8px;
    white-space: nowrap;
    padding: 0 30px;
    min-height: 60px;
    background: linear-gradient(145deg, #00bfff, #0077b6);
    color: white;
    font-weight: bold;
    border: none;
    cursor: pointer;
    box-shadow: 0 8px 16px rgba(0, 191, 255, 0.3),
      inset 0 0 0 rgba(255, 255, 255, 0);
    transition: all 0.3s ease;

    position: relative;
    overflow: hidden;
  }

  button::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.2) 0%,
      transparent 70%
    );
    transform: rotate(45deg);
    animation: glowMove 3s linear infinite;
    pointer-events: none;
  }

  @keyframes glowMove {
    0% {
      transform: translate(-100%, -100%) rotate(45deg);
    }
    100% {
      transform: translate(100%, 100%) rotate(45deg);
    }
  }

  button:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 24px rgba(0, 191, 255, 0.4),
      inset 0 0 8px rgba(255, 255, 255, 0.2);
  }

  @media only screen and (max-width: 1200px) {
    button {
      min-height: 50px;
    }
  }

  @media only screen and (max-width: 480px) {
    button {
      margin-top: 15px;
      min-height: 45px;
      width: 100%;
    }
  }
`;

export const Figure = styled.figure`
  flex: 1 1 50%;
  margin: 80px 0 0;
  @media (max-width: 1024px) {
    margin-top: 50px;
  }
`;

export default Section;
