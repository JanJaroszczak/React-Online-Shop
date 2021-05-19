import styled from 'styled-components';

import { mediaQueryStrings } from '../../helpers/mediaQueryStrings';

const { max768, max1024 } = mediaQueryStrings;

export const StyledMapWrapper = styled.div`
  width: 100%;
  height: 400px;
`;

export const StyledContactPageWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  max-width: 1200px;
  margin: 50px auto 0;
  padding: 0 20px;

  @media ${max1024} {
    grid-template-columns: 1.5fr 1fr;
  }

  @media ${max768} {
    grid-template-columns: 1fr;
    margin: 10px auto;
  } ;
`;
