import dayjs from 'dayjs';
import { memo, useCallback } from 'react';
import PropTypes from 'prop-types';
import ImageButton from './ImageButton';

import styles from './LastNotifiedEditor.module.css';

const LastNotifiedEditor = ({ lastNotified, onChange }) => {
  const buttonClick = useCallback(() => {
    onChange && onChange(dayjs().format('YYYY-MM-DD'));
  }, [onChange]);

  return (
    <div className={styles.outer}>
      <div className={styles.label}>Last notified: {lastNotified}</div>
      <ImageButton onClick={buttonClick}>Today</ImageButton>
    </div>
  );
};

LastNotifiedEditor.propTypes = {
  lastNotified: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default memo(LastNotifiedEditor);
