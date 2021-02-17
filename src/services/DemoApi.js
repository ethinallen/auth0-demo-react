import { AUTH0_API_ENDPOINT } from '../utils/Constants';

const createServiceUrl = (pathname, fields) => {
  const url = new URL(AUTH0_API_ENDPOINT);
  url.pathname = pathname;
  if (Array.isArray(fields)) {
    url.searchParams.append('fields', fields.join(','));
  }
  return url;
};

const getClients = async (token, fields) => {
  const url = createServiceUrl('/api/clients', fields);
  try {
    const resp = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  } catch (e) {
    throw new Error(`Network error: ${e}.`);
  }
};

const updateUser = async (token, id, data) => {
  const url = createServiceUrl(`/api/users/${id}`);
  try {
    const resp = await fetch(url, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        given_name: data.given_name,
        family_name: data.family_name,
        name: `${data.given_name} ${data.family_name}`,
        app_metadata: {
          enableMfa: JSON.parse(data.enableMfa)
        }
      })
    });
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  } catch (e) {
    throw new Error(`Network error: ${e}.`);
  }
};

export { getClients, updateUser };
