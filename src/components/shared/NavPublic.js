import React from 'react';
import { Link } from 'react-router-dom';

import {
  Button,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown
} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAuth0 } from '@auth0/auth0-react';

const orgs = {
  COKE: 'org_SFjbVdiRqLcEobgk',
  PEPSI: 'org_uEW3ZDNTjHIqG2eH'
};

const NavPublic = () => {
  const { loginWithRedirect } = useAuth0();

  const options = {
    appState: { returnTo: '/private' }
  };

  const handleLogin = () => {
    loginWithRedirect({
      ...options
    });
  };

  const handleLoginCoke = () => {
    loginWithRedirect({
      ...options,
      authorizationParams: {
        organization: orgs.COKE
      }
    });
  };

  const handleLoginPepsi = () => {
    loginWithRedirect({
      ...options,
      authorizationParams: {
        organization: orgs.PEPSI
      }
    });
  };

  const handleLoginPwdless = () => {
    loginWithRedirect({
      ...options,
      authorizationParams: {
        connection: 'sms'
      }
    });
  };

  const handleLoginSaml = () => {
    loginWithRedirect({
      ...options,
      authorizationParams: {
        connection: 'dahbura-oidc-okta'
      }
    });
  };

  const handleSignUp = () => {
    loginWithRedirect({
      ...options,
      authorizationParams: {
        screen_hint: 'signup'
      }
    });
  };

  return (
    <React.Fragment>
      <Nav className="me-auto" navbar>
        <NavItem>
          <NavLink tag={Link} to="/">
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/about-us">
            About Us
          </NavLink>
        </NavItem>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            IdP Initiated
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="https://adfs-dc.letsdoauth.com/adfs/ls/idpinitiatedsignon.htm">
              ADFS
            </DropdownItem>
            <DropdownItem href="https://rudydahbura-idp.auth0.com/samlp/snv8seeCplkSMF0GPbXHrQdSA8RcOquz">
              Auth0
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
        <NavItem>
          <NavLink href="https://rudydahbura-dev-ed.my.salesforce.com">
            <FontAwesomeIcon icon={['fab', 'salesforce']} className="me-2" />
            Salesforce
          </NavLink>
        </NavItem>
      </Nav>
      <Nav navbar>
        <NavItem className="me-sm-2">
          <Button color="primary" onClick={handleSignUp}>
            Sign up
          </Button>
        </NavItem>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            Log in
          </DropdownToggle>
          <DropdownMenu end>
            <DropdownItem onClick={handleLogin}>Log in</DropdownItem>
            <DropdownItem onClick={handleLoginPwdless}>
              Log in w/ pwdless
            </DropdownItem>
            <DropdownItem onClick={handleLoginSaml}>Log in w/ SSO</DropdownItem>
            <DropdownItem divider />
            <DropdownItem header>Organizations</DropdownItem>
            <DropdownItem onClick={handleLoginCoke}>
              Log in w/ Coke
            </DropdownItem>
            <DropdownItem onClick={handleLoginPepsi}>
              Log in w/ Pepsi
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    </React.Fragment>
  );
};

export default NavPublic;
