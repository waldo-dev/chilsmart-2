import styled from 'styled-components';

export const Section = styled.section`
  padding: 96px 24px;
  background: #0c141d;

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

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  > div:first-child {
    h2 {
      font-size: 28px;
      font-weight: bold;
      color: white;
      line-height: 1.2;
      margin-bottom: 32px;

      @media (min-width: 768px) {
        font-size: 36px;
      }

      @media (min-width: 1024px) {
        font-size: 40px;
      }

      @media (max-width: 480px) {
        font-size: 24px;
        margin-bottom: 24px;
      }
    }
  }
`;

export const ProblemsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ProblemItem = styled.div`
  display: flex;
  gap: 16px;
`;

export const ProblemIcon = styled.div`
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  border-radius: 8px;
  background: rgba(239, 68, 68, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ef4444;

  .material-icons {
    font-size: 24px;
  }
`;

export const ProblemContent = styled.div`
  h4 {
    font-size: 18px;
    font-weight: 600;
    color: white;
    margin-bottom: 4px;
  }

  p {
    font-size: 16px;
    color: #94a3b8;
    line-height: 1.6;
  }
`;

export const SolutionCard = styled.div`
  background: rgba(0, 81, 173, 0.05);
  border: 1px solid rgba(0, 81, 173, 0.2);
  padding: 32px;
  border-radius: 16px;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 24px;
  }
`;

export const SolutionHeader = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 16px;

  .material-icons {
    font-size: 48px;
    color: rgba(0, 81, 173, 0.2);
  }
`;

export const SolutionTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  color: #0051ad;
  margin-bottom: 24px;
`;

export const SolutionDescription = styled.p`
  font-size: 18px;
  color: #cbd5e1;
  line-height: 1.7;
  margin-bottom: 32px;
`;

export const SolutionList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const SolutionListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  color: #e2e8f0;
  font-size: 16px;

  .material-icons {
    font-size: 20px;
    color: #10b981;
  }
`;

