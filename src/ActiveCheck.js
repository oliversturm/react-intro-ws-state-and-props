/* eslint-disable jsx-a11y/accessible-emoji */
import { memo } from 'react';
import PropTypes from 'prop-types';

import styles from './ActiveCheck.module.css';

const ActiveCheck = ({ active }) => {
  return (
    <div className={styles.outer}>
      {active ? (
        <>
          <span className={styles['green-check']}>✓</span>
          <span className={styles.label}>Active</span>
        </>
      ) : (
        <>
          <span className={styles['red-cross']}>❌</span>
          <span className={styles.label}>Inactive</span>
        </>
      )}
    </div>
  );
};

ActiveCheck.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default memo(ActiveCheck);
