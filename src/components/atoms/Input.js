import React from 'react';
import { ErrorMessage } from 'formik';

import {
  StyledInputWrapper,
  StyledLabel,
  StyledInput,
  StyledErrorWrapper,
} from './styles/StyledInput';

const Input = ({
  variant,
  id,
  type,
  name,
  label,
  placeholder,
  value,
  multiple,
  onChangeHandler,
  readOnly,
  required,
}) => {
  return (
    <StyledInputWrapper>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledInput
        variant={variant}
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        multiple={multiple}
        onChange={onChangeHandler}
        readOnly={readOnly}
        required={required}
      />
      <StyledErrorWrapper>
        <ErrorMessage name={name} />
      </StyledErrorWrapper>
    </StyledInputWrapper>
  );
};

export default Input;
