import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { SORT_DIR } from '../../utils/Constants';

const invertDir = (sortDir) =>
  sortDir === SORT_DIR.ASC ? SORT_DIR.DESC : SORT_DIR.ASC;

const sorter = (items, key) =>
  items.sort((a, b) => {
    const valA = a[key] || '';
    const valB = b[key] || '';
    if (valA < valB) {
      return -1;
    }
    if (valA > valB) {
      return 1;
    }
    return 0;
  });

const SortIndicator = ({ column, sortCol, sortDir }) => (
  <React.Fragment>
    {sortCol === column ? (
      sortDir === SORT_DIR.ASC ? (
        <FontAwesomeIcon icon="caret-up" />
      ) : (
        <FontAwesomeIcon icon="caret-down" />
      )
    ) : null}
  </React.Fragment>
);

export default SortIndicator;

export { invertDir, sorter };
