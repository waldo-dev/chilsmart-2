import styled from 'styled-components';

export const Section = styled.section`
  padding: 96px 24px;
  background: #0f1823;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 64px 16px;
  }

  @media (max-width: 480px) {
    padding: 48px 16px;
  }
`;

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 80px;

  @media (max-width: 768px) {
    margin-bottom: 60px;
  }

  @media (max-width: 480px) {
    margin-bottom: 40px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 28px;
  font-weight: bold;
  color: white;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    font-size: 36px;
  }

  @media (min-width: 1024px) {
    font-size: 40px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const SectionDescription = styled.p`
  font-size: 16px;
  color: #94a3b8;
`;

export const ProcessContainer = styled.div`
  position: relative;
`;

export const ConnectorLine = styled.div`
  display: none;
  position: absolute;
  top: 40px;
  left: 0;
  width: 100%;
  height: 2px;
  background: rgba(148, 163, 184, 0.2);
  z-index: 0;

  @media (min-width: 1024px) {
    display: block;
  }
`;

export const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 32px;
  position: relative;
  z-index: 10;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

export const StepItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (min-width: 1024px) {
    align-items: flex-start;
    text-align: left;
  }
`;

export const StepNumber = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(30, 41, 59, 0.5);
  border: 2px solid #0051ad;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0051ad;
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 24px;
  transition: all 0.3s ease;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);

  ${StepItem}:hover & {
    background: #0051ad;
    color: white;
  }
`;

export const StepTitle = styled.h4`
  font-size: 18px;
  font-weight: bold;
  color: white;
  margin-bottom: 8px;
`;

export const StepDescription = styled.p`
  font-size: 14px;
  color: #94a3b8;
  line-height: 1.6;
`;

