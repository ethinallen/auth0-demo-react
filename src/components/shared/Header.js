import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import NavPrivate from './NavPrivate';
import NavPublic from './NavPublic';

import logo from '../../_images/logo-auth0.png';

const Logo = () => (
  <img className="d-inline-block mb-1 me-2" height="24" src={logo} alt="logo" />
);

const Header = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
        <div className="container">
          <a className="navbar-brand" href>
            <Logo />
            Demo SPA
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarContent">
            {isAuthenticated ? <NavPrivate /> : <NavPublic />}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
