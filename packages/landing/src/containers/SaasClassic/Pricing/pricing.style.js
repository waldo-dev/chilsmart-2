import styled from "styled-components";

export const ProcessWrapper = styled.div`
  margin-top: 60px;
  @media (max-width: 768px) {
    margin-top: 40px;
  }
`;

export const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
  margin-bottom: 80px;
  
  @media (max-width: 1199px) {
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 28px;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
    margin-bottom: 60px;
  }
  
  @media (max-width: 480px) {
    gap: 20px;
    margin-bottom: 50px;
  }
`;

export const ProcessCard = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 24px;
  padding: 40px 32px;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 20px 60px rgba(15, 23, 42, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  
  @media (max-width: 768px) {
    padding: 32px 24px;
  }
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 30px 80px rgba(15, 23, 42, 0.15);
    border-color: rgba(14, 165, 233, 0.3);
  }
  
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at top right,
      rgba(14, 165, 233, 0.08),
      transparent 60%
    );
    border-radius: 24px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
`;

export const ProcessNumber = styled.div`
  position: absolute;
  top: -16px;
  left: 32px;
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  box-shadow: 0 8px 20px rgba(14, 165, 233, 0.4);
  z-index: 1;
  
  @media (max-width: 768px) {
    width: 44px;
    height: 44px;
    font-size: 18px;
    top: -14px;
    left: 24px;
  }
`;

export const ProcessIcon = styled.div`
  margin: 16px 0 24px;
  padding: 20px;
  background: linear-gradient(135deg, rgba(14, 165, 233, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
  border-radius: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  ${ProcessCard}:hover & {
    transform: scale(1.1);
    background: linear-gradient(135deg, rgba(14, 165, 233, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%);
  }
  
  @media (max-width: 768px) {
    padding: 16px;
    margin: 12px 0 20px;
  }
`;

export const CTAWrapper = styled.div`
  text-align: center;
  padding: 60px 40px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 32px;
  border: 1px solid rgba(148, 163, 184, 0.2);
  box-shadow: 0 25px 70px rgba(15, 23, 42, 0.12);
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 40px 24px;
  }
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #0ea5e9 0%, #8b5cf6 50%, #10b981 100%);
  }
  
  .reusecore__button {
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 22px 35px rgba(14, 165, 233, 0.4);
    }
  }
`;

export const SectionBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 20px;
  border-radius: 999px;
  border: 1px solid rgba(14, 165, 233, 0.35);
  background: rgba(14, 165, 233, 0.12);
  color: #0f172a;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

export const SectionDescription = styled.p`
  font-size: 17px;
  line-height: 1.8;
  color: #475569;
  margin-top: 20px;
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
