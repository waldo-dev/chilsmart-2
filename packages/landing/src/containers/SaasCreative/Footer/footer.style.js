import styled from 'styled-components';

export const FooterSection = styled.footer`
  padding: 48px 24px;
  background: #0f1823;
  border-top: 1px solid #1e293b;

  @media (max-width: 768px) {
    padding: 32px 16px;
  }

  @media (max-width: 480px) {
    padding: 24px 16px;
  }
`;

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const LogoIcon = styled.div`
  width: 24px;
  height: 24px;
  background: #0051ad;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 14px;
`;

export const LogoText = styled.span`
  font-size: 18px;
  font-weight: bold;
  letter-spacing: -0.02em;
  color: white;

  .highlight {
    color: #0051ad;
  }
`;

export const Copyright = styled.p`
  font-size: 14px;
  color: #64748b;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 24px;
`;

export const SocialLink = styled.a`
  color: #94a3b8;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s ease;

  &:hover {
    color: #0051ad;
  }
`;
