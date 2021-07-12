import { useEffect } from 'react';
//import { useLocation } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

//const useQuery = () => new URLSearchParams(useLocation().search);

const LinkAccount = () => {
  //const query = useQuery();
  const { buildAuthorizeUrl } = useAuth0();

  useEffect(() => {
    const buildUrl = async () => {
      const authUrl = await buildAuthorizeUrl();
      console.log(authUrl);
    };
    buildUrl();
  });
  // loginWithRedirect({
  //   appState: { returnTo: '/private' },
  //   link_token: query.get('child_token'),
  //   state: query.get('state'),
  //   nonce: query.get('nonce'),
  //   prompt: 'login'
  // });

  return null;
};

export default LinkAccount;
