import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';

import Applications from '../Applications';
import NoMatch from '../NoMatch';
import Profile from '../Profile';
import Secret from '../Secret';

const LayoutPrivate = () => {
  const { path } = useRouteMatch();
  return (
    <React.Fragment>
      <Switch>
        <Route path={path} exact>
          <Applications />
        </Route>
        <Route path={`${path}/profile`}>
          <Profile />
        </Route>
        <Route path={`${path}/secret`}>
          <Secret />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </React.Fragment>
  );
};

export default withAuthenticationRequired(LayoutPrivate);
