import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  /* style wszystkich buttonów w apce */
`;

const Button = ({ children, onClickFn, cartBtn }) => {
  return (
    <StyledButton onClick={onClickFn} cartBtn={cartBtn}>
      {children}
    </StyledButton>
  );
};

export default Button;
