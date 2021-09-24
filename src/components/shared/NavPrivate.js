import React from 'react';
import { Link } from 'react-router-dom';

import {
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

import { AUTH0_LOGOUT_URL } from '../../utils/Constants';

const orgs = {
  COKE: 'org_SFjbVdiRqLcEobgk',
  PEPSI: 'org_uEW3ZDNTjHIqG2eH'
};

const Logo = () => {
  const { user } = useAuth0();
  return (
    <img
      className="align-middle d-inline-block me-2 rounded-circle"
      height="20"
      src={user.picture}
      alt={user.name}
    />
  );
};

const NavPrivate = () => {
  const { loginWithRedirect, logout, user } = useAuth0();

  const handleChangePassword = async () => {};

  const handleLoginCoke = () => {
    loginWithRedirect({
      appState: { returnTo: window.location.pathname },
      organization: orgs.COKE
    });
  };

  const handleLoginPepsi = () => {
    loginWithRedirect({
      appState: { returnTo: window.location.pathname },
      organization: orgs.PEPSI
    });
  };

  const handleLogout = () => {
    logout({
      returnTo: AUTH0_LOGOUT_URL
    });
  };

  const handleLogoutFederated = () => {
    logout({
      returnTo: AUTH0_LOGOUT_URL,
      federated: true
    });
  };

  return (
    <React.Fragment>
      <Nav className="me-auto" navbar>
        <NavItem>
          <NavLink tag={Link} to="/private">
            <FontAwesomeIcon icon="window-restore" className="me-2" />
            Applications
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/private/secret">
            Secret
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
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            <Logo />
            {user.email}
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem tag={Link} to="/private/profile">
              Profile
            </DropdownItem>
            <DropdownItem tag={Link} to="/private/password">
              Change password
            </DropdownItem>
            <DropdownItem onClick={handleChangePassword}>
              Change password (email)
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem header>Organizations</DropdownItem>
            <DropdownItem onClick={handleLoginCoke}>
              Log in w/ Coke
            </DropdownItem>
            <DropdownItem onClick={handleLoginPepsi}>
              Log in w/ Pepsi
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem onClick={handleLogout}>Log out</DropdownItem>
            <DropdownItem onClick={handleLogoutFederated}>
              Log out (Federated)
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    </React.Fragment>
  );
};

export default NavPrivate;
