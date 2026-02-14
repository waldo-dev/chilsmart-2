import React, { useContext } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Drawer from 'common/components/Drawer';
import HamburgMenu from 'common/components/HamburgMenu';
import { DrawerContext } from 'common/contexts/DrawerContext';
import { menu_items } from 'common/data/SaasCreative';
import ScrollSpyMenu from 'common/components/ScrollSpyMenu';
import {
  NavbarWrapper,
  NavbarContainer,
  LogoContainer,
  LogoIcon,
  LogoText,
  NavLinks,
  ContactButton,
} from './navbar.style';

const Navbar = () => {
  const { state, dispatch } = useContext(DrawerContext);

  const toggleHandler = () => {
    dispatch({
      type: 'TOGGLE',
    });
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    if (typeof window !== 'undefined' && window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/waldo-chilsmart/30min'
      });
    } else if (typeof window !== 'undefined') {
      window.open(
        'https://calendly.com/waldo-chilsmart/30min',
        '_blank',
        'width=700,height=600'
      );
    }
  };

  return (
    <NavbarWrapper>
      <NavbarContainer>
        <LogoContainer itemScope itemType="https://schema.org/Organization">
          <LogoIcon aria-hidden="true">C</LogoIcon>
          <LogoText itemProp="name">
            CHIL<span className="highlight">SMART</span>
          </LogoText>
        </LogoContainer>
        <NavLinks>
          <a href="#servicios" aria-label="Ir a sección de Servicios">Servicios</a>
          <a href="#proceso" aria-label="Ir a sección de Proceso">Proceso</a>
          <a href="#nosotros" aria-label="Ir a sección Por qué nosotros">Por qué nosotros</a>
          <a href="#testimonios" aria-label="Ir a sección de Casos de éxito">Casos de éxito</a>
        </NavLinks>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <ContactButton href="#" onClick={handleContactClick}>
            Contactar
          </ContactButton>
          <Drawer
            width="420px"
            placement="right"
            drawerHandler={<HamburgMenu barColor="#0051ad" className={state.isOpen ? 'active' : ''} />}
            open={state.isOpen}
            toggleHandler={toggleHandler}
          >
            <ScrollSpyMenu
              className="mobile_menu"
              menuItems={menu_items}
              drawerClose={true}
              offset={-100}
            />
          </Drawer>
        </div>
      </NavbarContainer>
    </NavbarWrapper>
  );
};

Navbar.propTypes = {};

export default Navbar;
