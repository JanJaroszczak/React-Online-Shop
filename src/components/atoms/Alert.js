import React from 'react';

import { StyledAlert } from './styles/StyledAlert';

const Alert = ({ message, visible, variant }) => {
  return (
    <StyledAlert visible={visible} variant={variant}>
      <span>
        <i className="far fa-check-circle"></i>
      </span>
      {message}
    </StyledAlert>
  );
};

export default Alert;
