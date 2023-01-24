import React from 'react';
import ReactDOM from 'react-dom/client';

import { Auth0Provider } from '@auth0/auth0-react';

import App from './App';
import GlobalProvider from './context/Global';
import history from './utils/BrowserHistory';
import reportWebVitals from './reportWebVitals';
import {
  AUTH0_DOMAIN,
  AUTH0_CLIENT_ID,
  AUTH0_API_AUDIENCE,
  AUTH0_CALLBACK_URL
} from './utils/Constants';

import './index.css';

const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.returnTo ? appState.returnTo : window.location.pathname
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

const rootElem = document.getElementById('root');
const root = ReactDOM.createRoot(rootElem);

root.render(
  <Auth0Provider {...options}>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
