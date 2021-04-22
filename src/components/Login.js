import { useLocation } from 'react-router-dom';

import { useAuth0 } from '@auth0/auth0-react';

const useQuery = () => new URLSearchParams(useLocation().search);

const Login = () => {
  const query = useQuery();
  const { loginWithRedirect } = useAuth0();

  const invite = {};
  const invitation = query.get('invitation');
  const organization = query.get('organization');

  if (invitation && organization) {
    invite.invitation = invitation;
    invite.organization = organization;
  }

  const options = {
    appState: { returnTo: '/private' },
    ...invite
  };

  loginWithRedirect({
    ...options
  });

  return null;
};

export default Login;
