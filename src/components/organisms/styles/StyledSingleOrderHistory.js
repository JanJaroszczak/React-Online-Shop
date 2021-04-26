import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledOrderSummaryWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 5px 0 20px;

  @media (max-width: 600px) {
    padding: 0;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;

  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }
`;
