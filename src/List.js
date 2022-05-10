import { memo } from 'react';
import PropTypes from 'prop-types';

import styles from './List.module.css';
import Row from './Row';

const List = ({ data, rowChanged }) => {
  return (
    <div className={styles.list}>
      {data.map((r, i) => (
        <Row key={i} rowIndex={i} data={r} onChange={rowChanged} />
      ))}
    </div>
  );
};

List.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  rowChanged: PropTypes.func.isRequired,
};

export default memo(List);
