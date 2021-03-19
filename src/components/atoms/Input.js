import React from 'react';
import { ErrorMessage } from 'formik';

import styled from 'styled-components';

const StyledInputWrapper = styled.div`
  position: relative;
`;

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 3px;
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;

const StyledInput = styled.input`
  display: block;
  width: 250px;
  height: 30px;
  margin-bottom: 20px;
  padding: 0 5px;
  font-family: inherit;
  background-color: ${({ theme }) => theme.colors.declicateGray};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  outline: none;
  border: none;
`;

const StyledErrorWrapper = styled.div`
  position: absolute;
  bottom: -17px;
  left: 0;
  font-size: ${({ theme }) => theme.fontSizes.ss};
  color: red;
`;

const Input = ({ type, name, label, placeholder, value, onChangeHandler }) => {
  return (
    <StyledInputWrapper>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledInput
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChangeHandler}
      />
      <StyledErrorWrapper>
        <ErrorMessage name={name} />
      </StyledErrorWrapper>
    </StyledInputWrapper>
  );
};

export default Input;
