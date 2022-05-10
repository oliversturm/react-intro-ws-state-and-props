import { memo } from 'react';
import PropTypes from 'prop-types';

import styles from './EditButton.module.css';

const EditButton = ({ onClick }) => {
  return (
    <div className={styles.outer} onClick={onClick}>
      <div className={styles.icon}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
          />
        </svg>
      </div>
      <div className={styles.label}>Edit</div>
    </div>
  );
};

EditButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default memo(EditButton);
