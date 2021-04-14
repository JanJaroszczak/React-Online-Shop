import styled from 'styled-components';

export const StyledSearchPageWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const StyledInputWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  max-width: 460px;
  margin: 0 auto;
  padding: 0 20px;

  /* border: 1px solid black; */
`;

export const StyledSearchInput = styled.input`
  display: inline-block;
  height: 45px;
  min-width: 100px;
  max-width: 400px;
  padding: 0 5px;
  font-size: ${({ theme }) => theme.fontSizes.s};
  border-radius: 7px;
  outline: none;

  border: 1px solid black;
`;

export const StyledSearchButton = styled.button`
  align-self: center;
  margin-left: 15px;
  background-color: transparent;
  border: none;

  i {
    font-size: ${({ theme }) => theme.fontSizes.xl};

    /* border: 1px solid black; */
  }
`;

export const StyledProductsGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  row-gap: 10px;
  justify-content: center;
  margin: 30px auto 0;
  width: 90%;

  /* border: 1px solid black; */

  @media (max-width: 960px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 720px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: auto;
  }
`;
