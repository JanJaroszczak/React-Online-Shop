import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { mediaQueryStrings } from '../../helpers/mediaQueryStrings';

const { max600, max768 } = mediaQueryStrings;

export const StyledLink = styled(Link)`
  text-decoration: none;

  @media ${max768} {
    display: block;
    margin-top: 30px;
  }

  @media ${max600} {
    display: flex;
    justify-content: center;
  }
`;
