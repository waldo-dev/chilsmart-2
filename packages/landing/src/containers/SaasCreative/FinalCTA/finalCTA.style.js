import styled from 'styled-components';

export const Section = styled.section`
  padding: 96px 24px;
  background: #0f1823;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 64px 16px;
  }

  @media (max-width: 480px) {
    padding: 48px 16px;
  }
`;

export const BackgroundGradient = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.3;
  pointer-events: none;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 500px;
    height: 500px;
    background: rgba(0, 81, 173, 0.2);
    border-radius: 50%;
    filter: blur(100px);
    transform: translate(50%, -50%);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 400px;
    height: 400px;
    background: rgba(0, 81, 173, 0.1);
    border-radius: 50%;
    filter: blur(100px);
    transform: translate(-50%, 50%);
  }
`;

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 10;
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: white;
  margin-bottom: 32px;
  line-height: 1.2;

  @media (min-width: 768px) {
    font-size: 48px;
  }

  @media (min-width: 1024px) {
    font-size: 56px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    margin-bottom: 24px;
  }
`;

export const Description = styled.p`
  font-size: 20px;
  color: #94a3b8;
  margin-bottom: 48px;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 32px;
  }
`;

export const CTAWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;

  @media (min-width: 640px) {
    flex-direction: row;
  }

  .reusecore__button {
    border-radius: 12px;
    padding: 0 40px;
    min-height: 64px;
    font-weight: bold;
    font-size: 20px;
    transition: all 0.2s ease;
    box-shadow: 0 20px 25px -5px rgba(0, 81, 173, 0.4);

    @media (max-width: 640px) {
      width: 100%;
    }
  }

  .cta-button {
    background: #0051ad;
    color: white;

    &:hover {
      background: rgba(0, 81, 173, 0.9);
      transform: translateY(-2px);
      box-shadow: 0 25px 30px -5px rgba(0, 81, 173, 0.5);
    }
  }
`;

export const ScheduleInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;

  .material-icons {
    color: #0051ad;
    font-size: 20px;
  }
`;

