import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  @media (max-width: 768px) {
    display: block;
    margin-top: 30px;
  }

  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
  }
`;
