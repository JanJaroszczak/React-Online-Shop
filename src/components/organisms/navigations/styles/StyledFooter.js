import styled from 'styled-components';

export const StyledFooter = styled.footer`
  width: 100%;
  height: 70px;
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  color: ${({ theme }) => theme.colors.mainWhite};
  background-color: ${({ theme }) => theme.colors.lightDark};

  @media (max-width: 400px) {
    font-size: ${({ theme }) => theme.fontSizes.ss};
  }
`;

export const StyledUl = styled.ul`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

export const StyledLi = styled.li`
  margin: 0 20px;

  @media (max-width: 400px) {
    margin: 5px 0;
  }
`;

export const StyledFooterButton = styled.button`
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  color: ${({ theme }) => theme.colors.mainWhite};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  border: none;
  background-color: transparent;

  @media (max-width: 400px) {
    font-size: ${({ theme }) => theme.fontSizes.ss};
  }
`;
