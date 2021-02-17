import React, { useContext } from 'react';

import { GlobalContext } from '../../context/Global';

import './styles.css';

const Loading = ({ show }) => {
  const [state] = useContext(GlobalContext);

  return (
    <div
      className={state.isLoading || show ? 'd-block' : 'd-none'}
      id="overlay"
    >
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
