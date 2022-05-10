import { memo } from 'react';
import PropTypes from 'prop-types';

import styles from './ImageButton.module.css';

const ImageButton = ({ onClick, ImageComponent, children }) => {
  return (
    <div className={styles.outer} onClick={onClick}>
      {ImageComponent && <ImageComponent />}
      {children}
    </div>
  );
};

ImageButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  ImageComponent: PropTypes.elementType,
};

export default memo(ImageButton);
