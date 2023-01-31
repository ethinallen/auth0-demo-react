import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { useAuth0 } from '@auth0/auth0-react';

import Callback from './components/Callback';
import CallbackIdp from './components/CallbackIdp';
import Layout from './components/shared/Layout';
import Loading from './components/Loading';
import Login from './components/Login';

import initFontAwesome from './utils/FontAwesome';

import './App.css';

initFontAwesome();

const App = () => {
  const { error, isLoading } = useAuth0();

  if (isLoading) {
    return <Loading show />;
  }

  return (
    <React.Fragment>
      <Loading />
      {error && <Navigate to="/error" />}
      <Routes>
        <Route path="/callback" element={<Callback />} />
        <Route path="/callback-idp" element={<CallbackIdp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Layout />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
