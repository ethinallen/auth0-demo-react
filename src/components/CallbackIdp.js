import { useAuth0 } from '@auth0/auth0-react';

const CallbackIdp = () => {
  const { loginWithRedirect } = useAuth0();

  loginWithRedirect({
    appState: { returnTo: '/private' }
  });

  return null;
};

export default CallbackIdp;
