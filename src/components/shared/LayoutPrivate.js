import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { withAuthenticationRequired } from '@auth0/auth0-react';

import Applications from '../Applications';
import NoMatch from '../NoMatch';
import Profile from '../Profile';
import Secret from '../Secret';

const LayoutPrivate = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route exact path="/" element={<Applications />} />
        <Route path="profile" element={<Profile />} />
        <Route path="secret" element={<Secret />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </React.Fragment>
  );
};

export default withAuthenticationRequired(LayoutPrivate);
