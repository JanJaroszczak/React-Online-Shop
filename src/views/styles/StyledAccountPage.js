import styled from 'styled-components';

export const StyledAccountPageWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(150px, 1fr) 4fr;
  max-width: 1200px;
  margin: 0px auto;
  padding: 0 20px;

  /* border: 1px solid black; */

  /* @media (max-width: 900px) {
    grid-template-columns: minmax(150px, 1fr) 1fr;
  } */

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;