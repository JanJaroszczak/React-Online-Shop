import styled from 'styled-components';

import { mediaQueryStrings } from '../../helpers/mediaQueryStrings';

export const StyledAccountPageWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(150px, 1fr) 4fr;
  max-width: 1200px;
  margin: 0px auto;
  padding: 0 20px;

  @media ${mediaQueryStrings.max600} {
    grid-template-columns: 1fr;
  }
`;
