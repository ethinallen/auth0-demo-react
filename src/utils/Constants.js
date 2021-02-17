const NS = 'https://letsdoauth.com';

const ACR_VALUES =
  'http://schemas.openid.net/pape/policies/2007/06/multi-factor';

const AUTH0_DOMAIN = process.env.REACT_APP_AUTH0_DOMAIN || '';
const AUTH0_CLIENT_ID = process.env.REACT_APP_AUTH0_CLIENT_ID || '';
const AUTH0_CALLBACK_URL = process.env.REACT_APP_AUTH0_CALLBACK_URL || '';
const AUTH0_LOGOUT_URL = process.env.REACT_APP_AUTH0_LOGOUT_URL || '';
const AUTH0_API_ENDPOINT = process.env.REACT_APP_AUTH0_API_ENDPOINT || '';
const AUTH0_API_AUDIENCE = process.env.REACT_APP_AUTH0_API_AUDIENCE || '';
const AUTH0_SCOPES = process.env.REACT_APP_AUTH0_SCOPES || '';

const CLAIMS = {
  connection: `${NS}/connection`,
  connectionStrategy: `${NS}/connectionStrategy`,
  country: `${NS}/country`,
  timezone: `${NS}/timezone`
};

const SORT_DIR = {
  ASC: 0,
  DESC: 1
};

export {
  ACR_VALUES,
  AUTH0_DOMAIN,
  AUTH0_CLIENT_ID,
  AUTH0_CALLBACK_URL,
  AUTH0_LOGOUT_URL,
  AUTH0_API_AUDIENCE,
  AUTH0_API_ENDPOINT,
  AUTH0_SCOPES,
  CLAIMS,
  SORT_DIR
};
