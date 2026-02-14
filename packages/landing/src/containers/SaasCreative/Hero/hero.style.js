import styled, { keyframes } from 'styled-components';

const ping = keyframes`
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
`;

export const HeroSection = styled.section`
  position: relative;
  padding-top: 176px;
  padding-bottom: 128px;
  padding-left: 24px;
  padding-right: 24px;
  overflow: hidden;
  background: #0f1823;
  background-image: radial-gradient(circle at top right, rgba(0, 81, 173, 0.15), transparent 40%),
                    radial-gradient(circle at bottom left, rgba(0, 81, 173, 0.05), transparent 40%);

  @media (max-width: 768px) {
    padding-top: 120px;
    padding-bottom: 80px;
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const GradientBackground = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.2;
  pointer-events: none;

  &::before {
    content: '';
    position: absolute;
    top: 25%;
    left: 25%;
    width: 256px;
    height: 256px;
    background: rgba(0, 81, 173, 0.2);
    border-radius: 50%;
    filter: blur(120px);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 25%;
    right: 25%;
    width: 384px;
    height: 384px;
    background: rgba(0, 81, 173, 0.1);
    border-radius: 50%;
    filter: blur(150px);
  }
`;

export const HeroContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  text-align: center;
`;

export const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 4px 12px;
  border-radius: 9999px;
  background: rgba(0, 81, 173, 0.1);
  border: 1px solid rgba(0, 81, 173, 0.2);
  color: #0051ad;
  font-size: 10px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 32px;

  @media (min-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    margin-bottom: 24px;
  }
`;

export const BadgePing = styled.span`
  position: relative;
  display: flex;
  height: 8px;
  width: 8px;

  .ping {
    position: absolute;
    display: inline-flex;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    background: #0051ad;
    opacity: 0.75;
    animation: ${ping} 1s cubic-bezier(0, 0, 0.2, 1) infinite;
  }

  .dot {
    position: relative;
    display: inline-flex;
    border-radius: 50%;
    height: 8px;
    width: 8px;
    background: #0051ad;
  }
`;

export const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;
  color: white;
  line-height: 1.1;
  margin-bottom: 32px;
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;

  .highlight {
    color: #0051ad;
  }

  @media (min-width: 768px) {
    font-size: 72px;
  }

  @media (max-width: 480px) {
    font-size: 40px;
    margin-bottom: 24px;
  }
`;

export const Description = styled.p`
  font-size: 18px;
  color: #94a3b8;
  max-width: 672px;
  margin: 0 auto 48px;

  @media (min-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    margin-bottom: 32px;
  }
`;

export const CTAButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  width: 100%;

  @media (min-width: 640px) {
    flex-direction: row;
    width: auto;
  }

  .reusecore__button {
    border-radius: 12px;
    padding: 0 32px;
    min-height: 56px;
    font-weight: bold;
    font-size: 16px;
    transition: all 0.2s ease;
    width: 100%;

    @media (min-width: 640px) {
      width: auto;
      font-size: 18px;
    }
  }

  .primary-button {
    background: #0051ad;
    color: white;
    box-shadow: 0 10px 15px -3px rgba(0, 81, 173, 0.2);

    &:hover {
      background: rgba(0, 81, 173, 0.9);
      transform: translateY(-2px);
      box-shadow: 0 20px 25px -5px rgba(0, 81, 173, 0.3);
    }
  }

  .secondary-button {
    background: transparent;
    border: 1px solid rgba(148, 163, 184, 0.3);
    color: white;

    &:hover {
      border-color: #0051ad;
      color: #0051ad;
    }
  }
`;

export const TypewriterText = styled.span`
  display: inline-block;
  position: relative;

  .highlight {
    color: #0051ad;
  }

  .cursor {
    display: inline-block;
    width: 3px;
    height: 1em;
    background: #0051ad;
    margin-left: 4px;
    animation: blink 1s infinite;
    vertical-align: baseline;
    box-shadow: 0 0 8px rgba(0, 81, 173, 0.8);
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

