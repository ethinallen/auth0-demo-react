import React from 'react';

import Highlight from '../../../utils/Highlight';

const DecodedTokenCard = ({ token, title }) => (
  <div className="card h-100">
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <div className="card-text">
        Header
        <Highlight className="rounded">
          {JSON.stringify(token.decoded.header, null, 2)}
        </Highlight>
        Payload
        <Highlight className="rounded">
          {JSON.stringify(token.decoded.payload, null, 2)}
        </Highlight>
      </div>
    </div>
  </div>
);

export default DecodedTokenCard;
