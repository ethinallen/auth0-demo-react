import React, { createContext, useReducer } from 'react';

import { v4 as uuidv4 } from 'uuid';

const GlobalContext = createContext();

const initialState = {
  alerts: {},
  isLoading: false
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ALERTS_ADD': {
      return {
        ...state,
        alerts: {
          key: uuidv4(),
          isError: action.payload.isError,
          message: action.payload.message
        }
      };
    }
    case 'ALERTS_RESET': {
      return {
        ...state,
        alerts: {}
      };
    }
    case 'LOADING_HIDE': {
      return {
        ...state,
        isLoading: false
      };
    }
    case 'LOADING_SHOW': {
      return {
        ...state,
        isLoading: true
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

const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={[state, dispatch]}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext };

export default GlobalProvider;
