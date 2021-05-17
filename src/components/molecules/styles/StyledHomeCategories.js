import styled from 'styled-components';

export const StyledCategoriesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, auto));
  column-gap: 10px;
  justify-content: space-between;
  margin: 60px auto;

  @media (max-width: 450px) {
    grid-template-columns: 1fr;
    row-gap: 30px;
    justify-content: center;
  } ;
`;
