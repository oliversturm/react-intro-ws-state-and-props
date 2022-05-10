import { memo } from 'react';
import PropTypes from 'prop-types';

import EditButton from './EditButton';
import ImageButton from './ImageButton';

import styles from './RowActions.module.css';
import SaveImage from './SaveImage';
import CancelImage from './CancelImage';

const RowActions = ({
  editing,
  onEditStart,
  onEditSaveChanges,
  onEditCancel,
}) => {
  if (editing)
    return (
      <div className={styles['save-cancel']}>
        <ImageButton ImageComponent={SaveImage} onClick={onEditSaveChanges}>
          Save
        </ImageButton>
        <ImageButton ImageComponent={CancelImage} onClick={onEditCancel}>
          Cancel
        </ImageButton>
      </div>
    );
  else return <EditButton onClick={onEditStart} />;
};

RowActions.propTypes = {
  editing: PropTypes.bool.isRequired,
  onEditStart: PropTypes.func.isRequired,
  onEditSaveChanges: PropTypes.func.isRequired,
  onEditCancel: PropTypes.func.isRequired,
};

export default memo(RowActions);
