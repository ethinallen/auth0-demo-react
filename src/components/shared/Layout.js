import React from 'react';
import { Route, Routes } from 'react-router-dom';

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
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/error" element={<Error />} />
          <Route path="/private/*" element={<LayoutPrivate />} />
          <Route path="/*" element={<NoMatch />} />
        </Routes>
      </div>
    </main>
    <Footer />
  </React.Fragment>
);

export default Layout;
