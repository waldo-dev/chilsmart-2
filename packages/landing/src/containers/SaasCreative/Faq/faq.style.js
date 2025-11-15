import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const Section = styled.section`
  padding: 110px 0;
  background: linear-gradient(180deg, #f8fbff 0%, #e0f2ff 55%, #d9f0ff 100%);
  position: relative;

  @media (max-width: 1280px) {
    padding: 80px 0;
  }
  @media (max-width: 768px) {
    padding: 60px 0;
  }
  .container {
    max-width: 780px;
  }
`;

export const SectionHeading = styled.div`
  text-align: center;
  margin-bottom: 60px;
  h2 {
    margin-bottom: 12px;
    font-size: 42px;
    color: #0f172a;
    @media (max-width: 768px) {
      font-size: 32px;
    }
  }
  p {
    color: #475569;
    margin: 0 auto;
    max-width: 540px;
    line-height: 1.7;
    font-size: 16px;
  }
`;

export const AccordionWrapper = styled.div`
  .rc-collapse {
    background-color: transparent;
    border: 0;
    display: grid;
    gap: 18px;
  }
  .rc-collapse-item {
    border: 1px solid rgba(15, 23, 42, 0.08);
    border-radius: 24px;
    padding: 28px 32px;
    background: rgba(255, 255, 255, 0.95);
    box-shadow: 0 25px 70px rgba(15, 23, 42, 0.08);

    .rc-collapse-header {
      justify-content: space-between;
      padding: 0;
      .icon {
        position: relative;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background: rgba(14, 165, 233, 0.12);
        display: flex;
        align-items: center;
        justify-content: center;

        i {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
      }
      .plus {
        color: #0ea5e9;
      }
      .minus {
        opacity: 0;
        color: #0ea5e9;
      }
    }
    h4 {
      margin-bottom: 0;
      font-size: 18px;
      color: #0f172a;
    }
    .rc-collapse-content {
      padding: 0;
      @media (max-width: 480px) {
        padding: 0;
      }
    }
    .rc-collapse-content-box {
      padding: 18px 0 0;
      font-weight: 500;
      font-size: 15px;
      line-height: 1.8;
      margin: 0;
      color: #475569;
    }
  }
  .rc-collapse-item-active {
    border-color: rgba(14, 165, 233, 0.35);
    box-shadow: 0 35px 90px rgba(15, 23, 42, 0.12);
    .rc-collapse-header {
      .minus {
        opacity: 1;
      }
      .plus {
        opacity: 0;
      }
    }
  }
`;

export default Section;
