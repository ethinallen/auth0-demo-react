import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import Auth0ProviderWithNavigate from './Auth0ProviderWithNavigate';

import App from './App';
import GlobalProvider from './context/Global';
import reportWebVitals from './reportWebVitals';

import './index.css';

const rootElem = document.getElementById('root');
const root = ReactDOM.createRoot(rootElem);

root.render(
  <BrowserRouter>
    <Auth0ProviderWithNavigate>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </Auth0ProviderWithNavigate>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
