import React, { useEffect, useState } from 'react';
import { Redirect, Route, Router, Switch } from 'react-router-dom';

import { useAuth0 } from '@auth0/auth0-react';

import Callback from './components/Callback';
import CallbackIdp from './components/CallbackIdp';
import Layout from './components/shared/Layout';
import Loading from './components/Loading';
import Login from './components/Login';

import history from './utils/BrowserHistory';
import initFontAwesome from './utils/FontAwesome';

import './App.css';

initFontAwesome();

const App = () => {
  const { error, getAccessTokenSilently, isLoading } = useAuth0();
  const [checkingSession, setCheckingSession] = useState(true);

  useEffect(() => {
    const getAccessToken = async () => {
      try {
        await getAccessTokenSilently();
        history.push('/private');
      } catch (err) {
        console.log(err.message);
      } finally {
        setCheckingSession(false);
      }
    };
    getAccessToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading || checkingSession) {
    return <Loading show />;
  }

  return (
    <React.Fragment>
      <Loading />
      <Router history={history}>
        {error && <Redirect to="/error" />}
        <Switch>
          <Route path="/callback">
            <Callback />
          </Route>
          <Route path="/callback-idp">
            <CallbackIdp />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <Layout />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
