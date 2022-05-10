import clsx from 'clsx';
import { memo, useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import styles from './ActiveEditor.module.css';
import ImageButton from './ImageButton';

const useStateWithDependencies = (startValue, dependencies) => {
  const [state, setState] = useState(startValue);
  useEffect(
    () => {
      setState(startValue);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    dependencies,
  );
  return [state, setState];
};

const buttonCaption = (state) => {
  // eslint-disable-next-line default-case
  switch (state) {
    case 'active':
      return 'Deactivate';
    case 'inactive':
      return 'Activate';
    case 'deactivating':
      return 'Click again!';
  }
};

const ActiveEditor = ({ active, onChange }) => {
  const [state, setState] = useStateWithDependencies(
    active ? 'active' : 'inactive',
    [active],
  );

  const changeState = useCallback(() => {
    // eslint-disable-next-line default-case
    switch (state) {
      case 'active':
        setState('deactivating');
        break;
      case 'deactivating':
        setState('inactive');
        onChange && onChange(false);
        break;
      case 'inactive':
        setState('active');
        onChange && onChange(true);
        break;
    }
  }, [state, setState, onChange]);

  return (
    <div className={clsx(styles.outer, styles[state])}>
      <div className={clsx(styles.label, styles[state])}>{state}</div>
      <ImageButton onClick={changeState}>{buttonCaption(state)}</ImageButton>
    </div>
  );
};

ActiveEditor.propTypes = {
  active: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default memo(ActiveEditor);
