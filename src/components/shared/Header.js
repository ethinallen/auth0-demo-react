import React, { useState } from 'react';
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand
} from 'reactstrap';
import { useAuth0 } from '@auth0/auth0-react';

import NavPrivate from './NavPrivate';
import NavPublic from './NavPublic';

import logo from '../../_images/auth0-logo.png';

const Logo = () => (
  <img className="d-inline-block mb-1 me-2" height="24" src={logo} alt="logo" />
);

const Header = () => {
  const { isAuthenticated } = useAuth0();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <header>
      <Navbar color="light" expand="md" fixed="top" light>
        <Container>
          <NavbarBrand>
            <Logo />
            Demo SPA
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            {isAuthenticated ? <NavPrivate /> : <NavPublic />}
          </Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
