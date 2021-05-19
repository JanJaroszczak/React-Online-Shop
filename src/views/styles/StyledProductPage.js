import styled from 'styled-components';

import { mediaQueryStrings } from '../../helpers/mediaQueryStrings';

export const StyledProductWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  column-gap: 10px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 20px 0;

  @media ${mediaQueryStrings.max820} {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    padding: 0 10px;
    margin: 80px auto -30px;
  } ;
`;
