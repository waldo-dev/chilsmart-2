import themeGet from "@styled-system/theme-get";
import styled from "styled-components";

const FooterArea = styled.footer`
  background: linear-gradient(180deg, #0f172a 0%, #020b17 100%);
  padding: 80px 0 50px;
  color: rgba(226, 232, 240, 0.85);

  .footerContainer {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 40px;
    flex-wrap: wrap;
    border-top: 1px solid rgba(226, 232, 240, 0.15);
    padding-top: 40px;
  }

  .brand {
    max-width: 320px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    .logo {
      display: inline-flex;
      align-items: center;
      img {
        max-width: 180px;
        height: auto;
      }
    }
    .tagline {
      margin: 0;
      color: rgba(226, 232, 240, 0.75);
      line-height: 1.6;
    }
    .copyright {
      font-size: 14px;
      color: rgba(148, 163, 184, 0.8);
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
  }

  .menu {
    display: flex;
    flex-direction: column;
    gap: 12px;
    min-width: 180px;
    .menuLink {
      font-size: 15px;
      color: rgba(226, 232, 240, 0.85);
      transition: color 0.3s ease;
      &:hover {
        color: ${themeGet("colors.primary", "#0ea5e9")};
      }
    }
  }

  .actions {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 18px;
    .ctaLink {
      text-decoration: none;
    }
    .ctaButton {
      background: linear-gradient(120deg, #0ea5e9, #38bdf8);
      box-shadow: 0 18px 36px rgba(14, 165, 233, 0.35);
      border-radius: 999px;
      padding: 0 28px;
      min-height: 52px;
    }
  }

  .social {
    display: flex;
    align-items: center;
    gap: 12px;
    span {
      font-size: 14px;
      color: rgba(226, 232, 240, 0.75);
    }
    .socialLink {
      width: 36px;
      height: 36px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: rgba(15, 23, 42, 0.6);
      transition: transform 0.3s ease, background 0.3s ease;
      img {
        max-width: 18px;
      }
      &:hover {
        background: rgba(14, 165, 233, 0.2);
        transform: translateY(-3px);
      }
    }
  }

  @media (max-width: 991px) {
    .footerContainer {
      flex-direction: column;
      align-items: flex-start;
    }
    .menu {
      flex-direction: row;
      flex-wrap: wrap;
      gap: 18px;
    }
    .actions {
      width: 100%;
      .ctaLink {
        width: 100%;
        .ctaButton {
          width: 100%;
          text-align: center;
        }
      }
      .social {
        width: 100%;
        justify-content: space-between;
        flex-wrap: wrap;
      }
    }
  }
`;
export default FooterArea;
