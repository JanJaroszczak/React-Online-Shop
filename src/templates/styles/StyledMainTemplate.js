import styled from 'styled-components';

import { mediaQueryStrings } from '../../helpers/mediaQueryStrings';

export const StyledWrapper = styled.div`
  min-height: calc(100vh - 140px);
  padding-bottom: 30px;
  margin-top: 70px;

  @media ${mediaQueryStrings.max750} {
    min-height: calc(100vh - 50px);
    padding-bottom: 100px;
    margin-top: 50px;
    margin-bottom: -70px;
  } ;
`;
