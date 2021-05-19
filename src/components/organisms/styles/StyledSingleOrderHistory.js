import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { mediaQueryStrings } from '../../../helpers/mediaQueryStrings';

const { max600 } = mediaQueryStrings;

export const StyledOrderSummaryWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 5px 0 20px;

  @media ${max600} {
    padding: 0;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;

  @media ${max600} {
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }
`;
