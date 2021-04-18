import React from 'react';

import { StyledButton } from './styles/StyledButton';

const Button = ({ clicked, type, variant, label, color }) => {
  return (
    <StyledButton onClick={clicked} type={type} variant={variant} color={color}>
      {label}
    </StyledButton>
  );
};

export default Button;
