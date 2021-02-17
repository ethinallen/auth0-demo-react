import React, { useContext } from 'react';

import { GlobalContext } from '../../context/Global';

const Alerts = () => {
  const [state, dispatch] = useContext(GlobalContext);

  const reset = () => {
    dispatch({ type: 'ALERTS_RESET' });
  };

  if (!state.alerts.key) {
    return null;
  }

  return (
    <React.Fragment>
      <div
        className={`alert alert-dismissible fade show ${
          state.alerts.isError ? 'alert-danger' : 'alert-success'
        }`}
      >
        <ul className="mb-0">
          <li key={state.alerts.key}>{state.alerts.message}</li>
        </ul>
        <button
          type="button"
          onClick={reset}
          className="btn-close"
          data-bs-dismiss="alert"
        />
      </div>
    </React.Fragment>
  );
};

export default Alerts;
