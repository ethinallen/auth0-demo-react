import React from 'react';

import withMfaRequired from '../utils/withMfaRequired';

const Secret = () => (
  <React.Fragment>
    <h2>Secret</h2>
    <p className="lead">
      This resource is only accessible by providing a second authentication
      factor.
    </p>
    <p>
      When it comes to sensitive actions like viewing financial information or using administrative privileges, 
      having a second factor of authentication is crucial to prevent unauthorized access. 
      With just a password, an attacker who has obtained your credentials can gain access to your account 
      and potentially steal sensitive information or perform malicious actions. 
    </p>
    <p>
      However, with 2FA enabled, an attacker would also need physical access to your device 
      or access to the authentication app in order to gain access, significantly reducing 
      the risk of unauthorized access.By requiring an additional piece of information beyond 
      just a username and password, 2FA helps ensure that only authorized users have access 
      to sensitive data and system functionalities. As such, it is highly recommended to enable 
      2FA wherever possible to provide an extra layer of protection for organizations and their users.
    </p>
  </React.Fragment>
);

export default withMfaRequired(Secret);
