import styled from 'styled-components';

import { mediaQueryStrings } from '../../../helpers/mediaQueryStrings';

export const StyledOrdersHistoryWrapper = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 10px 20px 30px;

  @media ${mediaQueryStrings.max600} {
    padding: 40px 0;
  }
`;
