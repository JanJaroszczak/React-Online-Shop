import styled from 'styled-components';

export const StyledHeadingWrapper = styled.div`
  position: absolute;
  z-index: 1;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: ${({ theme }) => theme.colors.mainWhite};
  text-align: center;
`;

export const StyledHeading = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.sl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  letter-spacing: 2px;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
  } ;
`;

export const StyledSubheading = styled.h2`
  margin-top: 15px;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.light};

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.l};
  } ;
`;

export const StyledButton = styled.button`
  margin-top: 40px;
  padding: 10px 20px 10px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.mainWhite};
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  text-transform: uppercase;
  border: 2px solid ${({ theme }) => theme.colors.mainWhite};
  transition: 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.mainDark};
    border: 2px solid ${({ theme }) => theme.colors.mainDark};
  }
`;
