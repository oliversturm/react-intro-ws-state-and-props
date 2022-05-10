import { memo } from 'react';
import PropTypes from 'prop-types';

const CancelImage = ({ width = '1.5rem', height = '1.5rem' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      style={{ width, height }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};

CancelImage.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

export default memo(CancelImage);
