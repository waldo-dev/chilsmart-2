import React, { useContext } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import NavbarWrapper from 'common/components/Navbar';
import Drawer from 'common/components/Drawer';
import Button from 'common/components/Button';
import Logo from 'common/components/UIElements/Logo';
import Box from 'common/components/Box';
import HamburgMenu from 'common/components/HamburgMenu';
import Container from 'common/components/UI/Container';
import { DrawerContext } from 'common/contexts/DrawerContext';

import { menu_items } from 'common/data/SaasCreative';
import ScrollSpyMenu from 'common/components/ScrollSpyMenu';

import logoDark from 'common/assets/image/saasCreative/chilsmart-logo.png';
import logoWhite from 'common/assets/image/saasCreative/chilsmart-oscuro.png';
import { fontWeight } from 'styled-system';

const Navbar = ({ navbarStyle, logoStyle, button, row, menuWrapper }) => {
  const { state, dispatch } = useContext(DrawerContext);

  // Toggle drawer
  const toggleHandler = () => {
    dispatch({
      type: 'TOGGLE',
    });
  };

  return (
    <NavbarWrapper {...navbarStyle}>
      <Container>
        <Box {...row}>
          <Logo
            href="#"
            logoSrc={logoWhite}
            title="SaaS Creative"
            logoStyle={logoStyle}
            className="main-logo"
          />
          <Logo
            href="#"
            logoSrc={logoDark}
            title="SaaS Creative"
            logoStyle={logoStyle}
            className="sticky-logo"
          />
          <Box {...menuWrapper} className="mainMenuWrapper">
            <ScrollSpyMenu
              className="main_menu"
              menuItems={menu_items}
              offset={-70}
            />
            {/* <Link href="#" className="navbar_button navbar_button_one">
              <Button {...button} title="Login Now" />
            </Link>
            <Link href="#" className="navbar_button navbar_button_two">
              <Button {...button} title="Join Free" />
            </Link> */}
            <Drawer
              width="420px"
              placement="right"
              drawerHandler={<HamburgMenu barColor="#108AFF" />}
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
          </Box>
        </Box>
      </Container>
    </NavbarWrapper>
  );
};

Navbar.propTypes = {
  navbarStyle: PropTypes.object,
  logoStyle: PropTypes.object,
  button: PropTypes.object,
  row: PropTypes.object,
  menuWrapper: PropTypes.object,
};

Navbar.defaultProps = {
  navbarStyle: {
    className: 'sass_creative_navbar',
    minHeight: '70px',
    display: 'block',
  },
  row: {
    flexBox: true,
    alignItems: 'center',
    width: '100%',
  },
  logoStyle: {
    maxWidth: ['126px', '126px'],
  },
  button: {},
  menuWrapper: {
    flexBox: true,
    alignItems: 'center',
  },
};

export default Navbar;
