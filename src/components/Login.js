import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  const options = {
    appState: { returnTo: '/private' }
  };

  loginWithRedirect({
    ...options
  });

  return null;
};

export default Login;
