import React from 'react';

import { StyledAlert } from './styles/StyledAlert';

const Alert = ({ severity, message, visible, variant }) => {
  // Severity options: error (red), warning (yellow), info (blue), success (green).

  return (
    <StyledAlert severity={severity} visible={visible} variant={variant}>
      <span>
        <i className="far fa-check-circle"></i>
      </span>
      {message}
    </StyledAlert>
  );
};

export default Alert;
