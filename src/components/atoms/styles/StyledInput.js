import styled, { css } from 'styled-components';

import { inputVariants } from '../../../helpers/atomsTypesAndVariants';
import { mediaQueryStrings } from '../../../helpers/mediaQueryStrings';

const { max600, max768 } = mediaQueryStrings;

export const StyledInputWrapper = styled.div`
  position: relative;
`;

export const StyledLabel = styled.label`
  display: block;
  margin-bottom: 3px;
  font-size: ${({ theme }) => theme.fontSizes.xs};
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

  ${({ variant }) =>
    variant === inputVariants.accountDataChange &&
    css`
      margin-bottom: 0;
    `}

  ${({ readOnly }) =>
    readOnly &&
    css`
      color: ${({ theme }) => theme.colors.gray};
    `}

  @media ${max768} {
    width: 100%;
    max-width: 250px;

    ${({ variant }) =>
      variant === inputVariants.accountDataChange &&
      css`
        width: 250px;
      `}
  }

  @media ${max600} {
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
