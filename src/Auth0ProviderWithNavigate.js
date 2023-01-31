import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Auth0Provider } from '@auth0/auth0-react';

import {
  AUTH0_DOMAIN,
  AUTH0_CLIENT_ID,
  AUTH0_API_AUDIENCE,
  AUTH0_CALLBACK_URL
} from './utils/Constants';

const Auth0ProviderWithNavigate = ({ children }) => {
  const navigate = useNavigate();

  const onRedirectCallback = (appState) => {
    navigate(
      appState && appState.returnTo
        ? appState.returnTo
        : window.location.pathname
    );
  };

  const options = {
    domain: AUTH0_DOMAIN,
    clientId: AUTH0_CLIENT_ID,
    onRedirectCallback,
    authorizationParams: {
      audience: AUTH0_API_AUDIENCE,
      redirect_uri: AUTH0_CALLBACK_URL
    }
  };

  return <Auth0Provider {...options}>{children}</Auth0Provider>;
};

export default Auth0ProviderWithNavigate;
