import React from 'react';
import { useLocation } from 'react-router-dom';

const NoMatch = () => {
  let location = useLocation();
  return (
    <React.Fragment>
      <h2>No Match</h2>
      <p>
        Path not found: <code>{location.pathname}</code>
      </p>
    </React.Fragment>
  );
};

export default NoMatch;
