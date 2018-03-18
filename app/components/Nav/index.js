// Dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';

// Logo
import Logo from 'assets/images/logo-almundo.svg';

// Relative Path
import Wrapper from './Wrapper';

function NavBar() {
  return (
    <Wrapper>
      <Navbar>
        <NavbarBrand to="/" tag={Link}>
          <img src={Logo} alt="Almundo" />
        </NavbarBrand>
      </Navbar>
    </Wrapper>
  );
}

export default NavBar;
