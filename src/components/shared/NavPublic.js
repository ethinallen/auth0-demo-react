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

  const handleLoginOrg = () => {
    loginWithRedirect({
      ...options,
      organization: 'org_SFjbVdiRqLcEobgk'
    });
  };

  const handleLoginPwdless = () => {
    loginWithRedirect({
      ...options,
      passwordless: true
    });
  };

  const handleLoginSaml = () => {
    loginWithRedirect({
      ...options,
      connection: 'dahbura-saml-auth0'
    });
  };

  const handleSignUp = () => {
    loginWithRedirect({
      ...options,
      screen_hint: 'signup'
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
          <DropdownToggle caret>Log in</DropdownToggle>
          <DropdownMenu right>
            <DropdownItem onClick={handleLogin}>Log in</DropdownItem>
            <DropdownItem onClick={handleLoginOrg}>Log in w/ org</DropdownItem>
            <DropdownItem onClick={handleLoginPwdless}>
              Log in w/ pwdless
            </DropdownItem>
            <DropdownItem onClick={handleLoginSaml}>
              Log in w/ SAML
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    </React.Fragment>
  );
};

export default NavPublic;
