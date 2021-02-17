import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import { ACR_VALUES } from './Constants';

const returnTo = () => `${window.location.pathname}${window.location.search}`;

const withMfaRequired = (Component) => (props) => {
  const { getIdTokenClaims, isLoading, loginWithRedirect } = useAuth0();
  const [hasMfa, setHasMfa] = useState();

  useEffect(() => {
    const checkMfa = async () => {
      const idTokenClaims = await getIdTokenClaims();
      setHasMfa(
        (idTokenClaims.amr && idTokenClaims.amr.includes('mfa')) || false
      );
    };
    !isLoading && checkMfa();
  }, [getIdTokenClaims, isLoading]);

  useEffect(() => {
    const options = {
      appState: {
        returnTo: returnTo()
      }
    };
    const challengeMfa = async () => {
      await loginWithRedirect({
        ...options,
        acr_values: ACR_VALUES
      });
    };
    hasMfa !== undefined && !hasMfa && challengeMfa();
  }, [hasMfa, loginWithRedirect]);

  return hasMfa ? <Component {...props} /> : null;
};

export default withMfaRequired;
