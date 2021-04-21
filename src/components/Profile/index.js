import React, { useContext, useEffect, useReducer } from 'react';
import { useForm } from 'react-hook-form';

import jwtDecode from 'jwt-decode';
import { useAuth0 } from '@auth0/auth0-react';

import DecodedTokenCard from './DecodedTokenCard';
import EncodedTokenCard from './EncodedTokenCard';
import { GlobalContext } from '../../context/Global';
import { updateUser } from '../../services/DemoApi';

import Highlight from '../../utils/Highlight';

import './styles.css';

const initialState = {
  profile: {
    token: {
      encoded: '',
      decoded: {
        header: '',
        payload: ''
      }
    },
    idToken: {
      encoded: '',
      decoded: {
        header: '',
        payload: ''
      }
    }
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'PROFILE_DECODE':
      const token = action.payload.token;
      const idToken = action.payload.idToken;

      return {
        ...state,
        profile: {
          token: {
            encoded: token,
            decoded: {
              header: jwtDecode(token, { header: true }),
              payload: jwtDecode(token)
            }
          },
          idToken: {
            encoded: idToken,
            decoded: {
              header: jwtDecode(idToken, { header: true }),
              payload: jwtDecode(idToken)
            }
          }
        }
      };
    default:
      throw new Error('Unknown action type.');
  }
};

const Profile = () => {
  const { getAccessTokenSilently, getIdTokenClaims, user } = useAuth0();
  const {
    formState: { errors },
    handleSubmit,
    register
  } = useForm();
  const [, dispatchGlobal] = useContext(GlobalContext);
  const [state, dispatch] = useReducer(reducer, initialState);

  const enableMfa = user['https://letsdoauth.com/enableMfa'];
  const updatedAt = new Date(user.updated_at);

  // cleanup global state
  useEffect(() => {
    return () => dispatchGlobal({ type: 'ALERTS_RESET' });
  }, [dispatchGlobal]);

  useEffect(() => {
    const fetchToken = async () => {
      const token = await getAccessTokenSilently();
      const idTokenClaims = await getIdTokenClaims();
      const tokens = { token: token, idToken: idTokenClaims.__raw };
      dispatch({ type: 'PROFILE_DECODE', payload: tokens });
    };
    fetchToken();
  }, [getAccessTokenSilently, getIdTokenClaims]);

  const onSubmit = async (data) => {
    try {
      const token = await getAccessTokenSilently();
      await updateUser(token, user.sub, data);
      dispatchGlobal({
        type: 'ALERTS_ADD',
        payload: { isError: false, message: 'Success!' }
      });
    } catch (err) {
      dispatchGlobal({
        type: 'ALERTS_ADD',
        payload: { isError: true, message: err.message }
      });
    }
  };

  const showError = (errorField) =>
    errorField && (
      <div className="d-block invalid-feedback">{errorField.message}</div>
    );

  return (
    <React.Fragment>
      <h2>Profile</h2>
      <p className="lead">The Auth0 user profile and session tokens.</p>

      <div className="row row-cols-1 row-cols-md-2">
        <div className="col mb-4">
          <div className="card h-100">
            <div className="row g-0">
              <div className="col-md-3">
                <img src={user.picture} alt={user.name} width="150" />
              </div>
              <div className="col-md-9">
                <div className="card-body">
                  <h5 className="card-title">
                    {user.name}
                    <br />
                    <small className="text-muted">{user.email}</small>
                  </h5>
                  <p className="card-text">
                    Auth0 stores user information for your tenant in a hosted
                    cloud database. Those users have access to applications
                    connected to that tenant. User profiles contain information
                    about your users such as name and contact information.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated {updatedAt.toString()}.
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card h-100">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                  <label className="form-label" htmlFor="given_name">
                    First name
                  </label>
                  <input
                    defaultValue={user.given_name}
                    id="given_name"
                    type="text"
                    className={
                      errors?.given_name
                        ? 'form-control is-invalid'
                        : 'form-control'
                    }
                    {...register('given_name', {
                      maxLength: { value: 25, message: 'Max length is 25.' },
                      required: { value: true, message: 'Field is required.' }
                    })}
                  />
                  {showError(errors.given_name)}
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="family_name">
                    Last name
                  </label>
                  <input
                    defaultValue={user.family_name}
                    id="family_name"
                    type="text"
                    className={
                      errors?.family_name
                        ? 'form-control is-invalid'
                        : 'form-control'
                    }
                    {...register('family_name', {
                      maxLength: { value: 25, message: 'Max length is 25.' },
                      required: { value: true, message: 'Field is required.' }
                    })}
                  />
                  {showError(errors.family_name)}
                </div>
                <div className="mb-3 form-check">
                  <input
                    defaultChecked={JSON.parse(enableMfa || false)}
                    className="form-check-input"
                    id="enableMfa"
                    type="checkbox"
                    {...register('enableMfa')}
                  />
                  <label className="form-check-label" htmlFor="enableMfa">
                    Enable MFA
                  </label>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">User</h5>
          <div className="card-text">
            <Highlight className="rounded">
              {JSON.stringify(user, null, 2)}
            </Highlight>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-5 mb-4">
          <EncodedTokenCard
            token={state.profile.idToken}
            title="Encoded ID Token"
          />
        </div>
        <div className="col-7 mb-4">
          <DecodedTokenCard
            token={state.profile.idToken}
            title="Decoded ID Token"
          />
        </div>
        <div className="col-5 mb-4">
          <EncodedTokenCard
            token={state.profile.token}
            title="Encoded Access Token"
          />
        </div>
        <div className="col-7 mb-4">
          <DecodedTokenCard
            token={state.profile.token}
            title="Decoded Access Token"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Profile;
