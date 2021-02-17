import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LayoutPrivate from './LayoutPrivate';
import Alerts from './Alerts';

import Header from './Header';
import Footer from './Footer';

import AboutUs from '../AboutUs';
import Error from '../Error';
import Home from '../Home';
import NoMatch from '../NoMatch';

const Layout = () => (
  <React.Fragment>
    <Header />
    <main className="flex-shrink-0">
      <div className="container">
        <Alerts />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about-us">
            <AboutUs />
          </Route>
          <Route path="/error">
            <Error />
          </Route>
          <Route path="/private">
            <LayoutPrivate />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </main>
    <Footer />
  </React.Fragment>
);

export default Layout;
