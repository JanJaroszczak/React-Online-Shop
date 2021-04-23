import styled from 'styled-components';

export const StyledMapWrapper = styled.div`
  width: 100%;
  height: 400px;
`;

export const StyledContactPageWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  max-width: 1200px;
  margin: 50px auto 0;
  padding: 0 20px;

  /* border: 1px solid black; */

  @media (max-width: 1024px) {
    grid-template-columns: 1.5fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin: 10px auto;
  } ;
`;
