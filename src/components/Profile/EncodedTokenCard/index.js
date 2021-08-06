import React from 'react';

import Highlight from '../../../utils/Highlight';

const EncodedTokenCard = ({ token, title }) => (
  <div className="card h-100">
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <div className="card-text">
        <Highlight className="rounded" language="text">
          {token.encoded}
        </Highlight>
      </div>
    </div>
  </div>
);

export default EncodedTokenCard;
