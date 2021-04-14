import React from 'react';

import { StyledButton } from './styles/StyledButton';

const Button = ({ clicked, type, variant, label }) => {
  return (
    <StyledButton onClick={clicked} type={type} variant={variant}>
      {label}
    </StyledButton>
  );
};

export default Button;
