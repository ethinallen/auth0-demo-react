import React, { useContext, useEffect, useReducer } from 'react';
import { Button, Table } from 'reactstrap';

import { useAuth0 } from '@auth0/auth0-react';

import SortIndicator, { invertDir, sorter } from '../shared/SortIndicator';
import { GlobalContext } from '../../context/Global';
import { SORT_DIR } from '../../utils/Constants';
import { getClients } from '../../services/DemoApi';

import './styles.css';

const initialState = {
  applications: {
    items: [],
    sortCol: 'name',
    sortDir: SORT_DIR.ASC
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'CLIENTS_LOAD': {
      const sortCol = 'name';
      const sortedItems = sorter(action.payload, sortCol);

      return {
        ...state,
        applications: {
          items: sortedItems,
          sortCol: sortCol,
          sortDir: SORT_DIR.ASC
        }
      };
    }
    case 'CLIENTS_SORT': {
      const sortCol = action.payload;
      const clonedItems = [...state.applications.items];

      let sortedItems, sortDir;
      if (state.applications.sortCol === sortCol) {
        sortedItems = clonedItems.reverse();
        sortDir = invertDir(state.applications.sortDir);
      } else {
        sortedItems = sorter(clonedItems, sortCol);
        sortDir = SORT_DIR.ASC;
      }

      return {
        ...state,
        applications: {
          items: sortedItems,
          sortCol: sortCol,
          sortDir: sortDir
        }
      };
    }
    case 'RESET': {
      return {
        ...initialState
      };
    }
    default:
      throw new Error('Unknown action type.');
  }
};

const Applications = () => {
  const { getAccessTokenSilently } = useAuth0();
  const [, dispatchGlobal] = useContext(GlobalContext);
  const [state, dispatch] = useReducer(reducer, initialState);

  const client_fields = ['app_type', 'client_id', 'description', 'name'];

  // cleanup global state
  useEffect(() => {
    return () => dispatchGlobal({ type: 'ALERTS_RESET' });
  }, [dispatchGlobal]);

  const onLoad = async (e) => {
    try {
      const token = await getAccessTokenSilently();
      const clients = await getClients(token, client_fields);
      dispatch({ type: 'CLIENTS_LOAD', payload: clients });
      dispatchGlobal({ type: 'ALERTS_RESET' });
    } catch (err) {
      dispatchGlobal({
        type: 'ALERTS_ADD',
        payload: { isError: true, message: err.message }
      });
    }
  };

  const onReset = (e) => {
    dispatch({ type: 'RESET' });
    dispatchGlobal({ type: 'ALERTS_RESET' });
  };

  const onSort = (e) => {
    const sortCol = e.currentTarget.dataset.column;
    dispatch({ type: 'CLIENTS_SORT', payload: sortCol });
  };

  return (
    <React.Fragment>
      <h2>Applications</h2>
      <p className="lead">
        Retrieves a list of current applications registered with your tenant.
      </p>
      <div className="mb-3">
        <Button className="me-2" color="primary" onClick={onLoad}>
          Get Applications
        </Button>
        <Button color="secondary" onClick={onReset}>
          Reset
        </Button>
      </div>
      <Table>
        <thead>
          <tr>
            <th data-column="name" onClick={onSort}>
              Name{' '}
              <SortIndicator
                column="name"
                sortCol={state.applications.sortCol}
                sortDir={state.applications.sortDir}
              />
            </th>
            <th data-column="description" onClick={onSort}>
              Description{' '}
              <SortIndicator
                column="description"
                sortCol={state.applications.sortCol}
                sortDir={state.applications.sortDir}
              />
            </th>
            <th data-column="client_id" onClick={onSort}>
              Client ID{' '}
              <SortIndicator
                column="client_id"
                sortCol={state.applications.sortCol}
                sortDir={state.applications.sortDir}
              />
            </th>
          </tr>
        </thead>
        <tbody>
          {state.applications.items.map((item) => (
            <tr key={item.client_id}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.client_id}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </React.Fragment>
  );
};

export default Applications;
