import styled from 'styled-components';

export const StyledCheckoutPageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1200px;
  margin: 0px auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
