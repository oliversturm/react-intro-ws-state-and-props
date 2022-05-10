import { memo } from 'react';
import PropTypes from 'prop-types';

const SaveImage = ({ width = '1.5rem', height = '1.5rem' }) => {
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
        d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
      />
    </svg>
  );
};

SaveImage.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

export default memo(SaveImage);
