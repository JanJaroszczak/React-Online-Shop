import styled, { css } from 'styled-components';

export const StyledProductsPageWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: auto;
  } ;
`;

export const StyledHeadingAndSortingWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;

  @media (max-width: 768px) {
    grid-template-columns: auto;
    grid-template-rows: auto auto;
  } ;
`;

export const StyledSortingOptionChoice = styled.div`
  margin: 60px 30px 20px 0;
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSizes.xs};

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 40px;
    margin: 0 auto;
  } ;
`;

export const StyledFilterIcon = styled.div`
  font-size: 4.1rem;
  color: ${({ theme }) => theme.colors.declicateGray};
  cursor: pointer;

  ${({ areAnyFiltersSet }) =>
    areAnyFiltersSet &&
    css`
      color: ${({ theme }) => theme.colors.mainDark};
    `}
`;

export const StyledSelect = styled.select`
  display: block;
  width: 135px;
  height: 40px;
  margin-top: 3px;
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  font-family: inherit;
  background-color: ${({ theme }) => theme.colors.declicateGray};
  color: ${({ theme }) => theme.colors.mainDark};
  border: none;
  outline: none;
  cursor: pointer;

  option {
    font-weight: inherit;
  }
`;

export const StyledProductsGridWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  column-gap: 10px;
  justify-content: space-between;
  margin: 40px 20px 40px 52px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr 1fr;
    justify-content: center;

    margin: 30px auto 0;
    width: 90%;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 630px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 480px) {
    grid-template-columns: auto;
  } ;
`;
