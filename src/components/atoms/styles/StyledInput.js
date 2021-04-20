import styled, { css } from 'styled-components';

export const StyledInputWrapper = styled.div`
  position: relative;

  /* border: 1px solid black; */
`;

export const StyledLabel = styled.label`
  display: block;
  margin-bottom: 3px;
  font-size: ${({ theme }) => theme.fontSizes.xs};

  /* border: 1px solid black; */
`;

export const StyledInput = styled.input`
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

  /* border: 1px solid black; */

  ${({ variant }) =>
    variant === 'accountDataChange' &&
    css`
      margin-bottom: 0;
    `}

  ${({ readOnly }) =>
    readOnly &&
    css`
      color: ${({ theme }) => theme.colors.gray};
    `}

  @media (max-width: 768px) {
    width: 100%;
    max-width: 250px;

    ${({ variant }) =>
      variant === 'accountDataChange' &&
      css`
        width: 250px;
      `}
  }

  @media (max-width: 600px) {
    width: 100%;
    max-width: 250px;
  } ;
`;

export const StyledErrorWrapper = styled.div`
  position: absolute;
  bottom: -17px;
  left: 0;
  font-size: ${({ theme }) => theme.fontSizes.ss};
  color: red;
`;