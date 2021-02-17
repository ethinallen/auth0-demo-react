import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';

const Error = () => {
  const { error } = useAuth0();

  return (
    <React.Fragment>
      <h2>Error</h2>
      {error ? (
        <code>
          {error.error} - {error.message}
        </code>
      ) : (
        <p>No errors.</p>
      )}
    </React.Fragment>
  );
};

export default Error;
