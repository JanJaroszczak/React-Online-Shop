import styled from 'styled-components';

import { mediaQueryStrings } from '../../../helpers/mediaQueryStrings';

export const StyledDataChangeWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;

  @media ${mediaQueryStrings.max600} {
    padding: 0;
  }
`;
