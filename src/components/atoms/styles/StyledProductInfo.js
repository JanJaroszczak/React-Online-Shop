import styled from 'styled-components';

export const StyledDiv = styled.div`
  position: relative;
  /* height: 119px; */
  padding: 2px 20px 10px;
  background-color: ${({ theme }) => theme.colors.extraLightGray};
  color: ${({ theme }) => theme.colors.lightDark};
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fontWeights.light};
`;

export const StyledModelName = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.m};
  line-height: 22px;
  font-weight: ${({ theme }) => theme.fontWeights.light};
  margin-top: 20px;
  margin-right: 25px;
`;

export const StyledBrandName = styled.span`
  display: block;
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  margin-top: 5px;
  line-height: 20px;
`;

export const StyledPlus = styled.span`
  position: absolute;
  top: 22px;
  right: 10px;
  color: ${({ theme }) => theme.colors.mainDark};
  font-size: ${({ theme }) => theme.fontSizes.s};
`;

export const StyledPrice = styled.span`
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.m};
  margin-top: 20px;

  span {
    padding-left: 6px;
  }
`;
