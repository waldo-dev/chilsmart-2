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

export const SectionTitle = styled.h2`
  font-size: 28px;
  font-weight: bold;
  color: white;
  text-align: center;
  margin-bottom: 64px;

  @media (min-width: 768px) {
    font-size: 36px;
  }

  @media (min-width: 1024px) {
    font-size: 40px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
    margin-bottom: 48px;
  }
`;

export const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const TestimonialCard = styled.div`
  padding: 32px;
  border-radius: 12px;
  background: rgba(30, 41, 59, 0.4);
  border: 1px solid rgba(148, 163, 184, 0.2);
`;

export const Stars = styled.div`
  display: flex;
  gap: 4px;
  color: #0051ad;
  margin-bottom: 16px;

  .material-icons {
    font-size: 16px;
  }
`;

export const TestimonialText = styled.p`
  font-style: italic;
  color: #cbd5e1;
  line-height: 1.7;
  margin-bottom: 24px;
`;

export const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const AuthorAvatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(71, 85, 105, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;

  .material-icons {
    color: #94a3b8;
  }
`;

export const AuthorInfo = styled.div``;

export const AuthorName = styled.p`
  font-weight: bold;
  color: white;
  margin-bottom: 4px;
`;

export const AuthorRole = styled.p`
  font-size: 12px;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

