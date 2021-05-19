import styled from 'styled-components';

import { mediaQueryStrings } from '../../helpers/mediaQueryStrings';

export const StyledGridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;

  @media ${mediaQueryStrings.max768} {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
  } ;
`;
