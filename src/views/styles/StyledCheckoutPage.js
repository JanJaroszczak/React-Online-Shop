import styled from 'styled-components';

import { mediaQueryStrings } from '../../helpers/mediaQueryStrings';

export const StyledCheckoutPageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1200px;
  margin: 0px auto;

  @media ${mediaQueryStrings.max768} {
    grid-template-columns: 1fr;
  }
`;
