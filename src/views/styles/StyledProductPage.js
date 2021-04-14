import styled from 'styled-components';

export const StyledProductWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  column-gap: 10px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 20px 0;

  /* border: 1px solid black; */

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    padding: 0 10px;
    margin: 80px auto -30px;
  } ;
`;
