import React from 'react';
import { Link } from 'react-router-dom';

import { useAuth0 } from '@auth0/auth0-react';

import NavPrivate from './NavPrivate';
import NavPublic from './NavPublic';

import logo from '../../_images/logo-auth0.png';

const Logo = () => (
  <img
    className="align-text-top d-inline-block me-2"
    alt="logo"
    width="81"
    height="24"
    src={logo}
  />
);

const Header = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <Logo />
            Demo
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarContent">
            {isAuthenticated ? <NavPrivate /> : <NavPublic />}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
