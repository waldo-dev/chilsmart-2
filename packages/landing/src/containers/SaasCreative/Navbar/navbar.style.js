import styled from 'styled-components';

export const NavbarWrapper = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 50;
  background: rgba(15, 24, 35, 0.8);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(0, 81, 173, 0.1);
  height: 80px;
  display: flex;
  align-items: center;
`;

export const NavbarContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const LogoIcon = styled.div`
  width: 32px;
  height: 32px;
  background: #0051ad;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 20px;
`;

export const LogoText = styled.span`
  font-size: 20px;
  font-weight: bold;
  letter-spacing: -0.02em;
  color: white;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  .highlight {
    color: #0051ad;
  }
`;

export const NavLinks = styled.div`
  display: none;
  align-items: center;
  gap: 32px;
  font-size: 14px;
  font-weight: 500;

  @media (min-width: 768px) {
    display: flex;
  }

  a {
    color: ${props => props.theme.colors?.textSecondary || '#64748b'};
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: #0051ad;
    }
  }
`;

export const ContactButton = styled.a`
  background: #0051ad;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;

  @media (max-width: 768px) {
    display: none;
  }

  &:hover {
    background: rgba(0, 81, 173, 0.9);
  }
`;

