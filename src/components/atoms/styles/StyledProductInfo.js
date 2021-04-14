import styled from 'styled-components';

export const StyledDiv = styled.div`
  height: 137px;
  padding: 2px 20px 10px;
  background-color: ${({ theme }) => theme.colors.extraLightGray};
  color: ${({ theme }) => theme.colors.lightDark};
  text-transform: uppercase;
`;

export const StyledModelName = styled.h3`
  height: 50px;
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  margin-top: 15px;
  margin-right: 25px;

  /* border: 1px solid black; */
`;

export const StyledBrandName = styled.span`
  display: block;
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  margin-top: 5px;
  line-height: 20px;

  /* border: 1px solid black; */
`;

export const StyledPrice = styled.span`
  display: block;
  margin-top: 5px;
  font-size: ${({ theme }) => theme.fontSizes.m};

  /* border: 1px solid black; */

  span {
    padding-left: 6px;
  }

  span.previousPrice {
    padding-left: 12px;
    font-size: ${({ theme }) => theme.fontSizes.xs};
    text-decoration: line-through;
    vertical-align: super;
  }
`;
