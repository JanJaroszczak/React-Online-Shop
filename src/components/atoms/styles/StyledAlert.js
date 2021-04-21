import styled, { css } from 'styled-components';

import { alertVariants } from '../../../utils/atomsTypesAndVariants';

export const StyledAlert = styled.div`
  height: 50px;
  width: 100%;
  margin: 15px 0;
  font-size: ${({ theme }) => theme.fontSizes.s};
  line-height: 50px;
  color: ${({ theme }) => theme.colors.mainDark};
  background-color: ${({ theme }) => theme.colors.success};
  border-radius: 8px;
  i {
    margin: 0 15px;
    font-size: ${({ theme }) => theme.fontSizes.m};
    vertical-align: -1px;
    color: ${({ theme }) => theme.colors.successIcon};
  }

  ${({ visible }) =>
    !visible &&
    css`
      visibility: hidden;
    `}

  ${({ variant }) =>
    variant === alertVariants.orderSummary &&
    css`
      margin-top: 93px;
    `}

      @media (max-width: 768px) {
    text-align: center;

    ${({ variant }) =>
      variant === alertVariants.accountDataChange &&
      css`
        text-align: left;
      `}
  } ;
`;
