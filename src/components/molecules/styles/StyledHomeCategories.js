import styled from 'styled-components';

import { mediaQueryStrings } from '../../../helpers/mediaQueryStrings';

export const StyledCategoriesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, auto));
  column-gap: 10px;
  justify-content: space-between;
  margin: 60px auto;

  @media ${mediaQueryStrings.max450} {
    grid-template-columns: 1fr;
    row-gap: 30px;
    justify-content: center;
  } ;
`;
