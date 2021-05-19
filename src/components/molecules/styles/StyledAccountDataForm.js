import styled from 'styled-components';

import { mediaQueryStrings } from '../../../helpers/mediaQueryStrings';

export const StyledInputsWrapper = styled.div`
  @media ${mediaQueryStrings.max600} {
    max-width: 250px;
    margin: 0 auto;
  }
`;
