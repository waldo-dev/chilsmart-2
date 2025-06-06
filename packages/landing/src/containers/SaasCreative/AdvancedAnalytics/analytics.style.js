import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const Section = styled.section`
  padding-top: 100px;
  padding-bottom: 100px;

  background-color: #000;
  background-image: 
    linear-gradient(to bottom, #000 0%, transparent 50%), /* fundido negro a transparente */
    radial-gradient(circle at 30% 30%, rgba(0, 153, 255, 0.2), transparent 60%),
    radial-gradient(circle at 70% 60%, rgba(0, 102, 255, 0.15), transparent 70%),
    radial-gradient(circle at 50% 90%, rgba(0, 204, 255, 0.1), transparent 80%);
  
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media (max-width: 1280px) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  @media (max-width: 1024px) {
    padding-top: 60px;
    padding-bottom: 80px;
  }
  @media (max-width: 768px) {
    padding-top: 40px;
    padding-bottom: 60px;
  }
`;


export const Grid = styled.div`
  display: flex;
  @media (max-width: 1024px) {
    gap: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 768px) {
    display: block;
  }
`;

export const Figure = styled.figure`
  margin: 0;
  text-align: center;
  flex: 1;

  img {
    border-radius: 12px;
    max-width: 100%;
    height: auto;
    object-fit: cover;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);

    @media (max-width: 768px) {
      max-width: 90%;
    }
  }
`;


export const Content = styled.div`
  // flex: 0,9;
  padding: 20px 30px;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  backdrop-filter: blur(4px);
  margin-left: 60px;
  margin-top: 20px;
  color: #fff;

  @media (max-width: 1024px) {
    margin-left: 0;
    margin-top: 0;
    padding: 20px;
  }

  h2 {
    font-size: 36px;
    margin-bottom: 20px;
    font-weight: 700;
    color: #ffffff;
  }

  .description {
    font-size: 18px;
    line-height: 1.8;
    color: #d0d0d0;
    margin-bottom: 20px;
  }

  .explore {
    display: inline-flex;
    align-items: center;
    color: #00c3ff;
    font-weight: 600;
    font-size: 16px;
    transition: all 0.3s ease;

    i {
      margin-left: 8px;
      transition: transform 0.3s ease;
    }

    &:hover i {
      transform: translateX(5px);
    }
  }
`;

export default Section;
