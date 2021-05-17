import styled from 'styled-components';

export const StyledDiv = styled.div`
  position: relative;
  max-width: 360px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.mainDark};
  font-size: 0;
  margin: 0 auto;

  &:hover img {
    transform: scale(1.1);
  }
`;

export const StyledImg = styled.img`
  width: 100%;
  transition: 0.5s;
`;

export const StyledCategory = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 80px;
  width: 160px;
  border: 2px solid white;

  @media (max-width: 600px) {
    height: 60px;
    width: 120px;
  }

  @media (max-width: 450px) {
    height: 80px;
    width: 160px;
  } ;
`;

export const StyledCategoryName = styled.div`
  position: absolute;
  width: 160px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 300;
  color: ${({ theme }) => theme.colors.mainWhite};
  text-align: center;
  text-transform: uppercase;
  border: 2px solid white;

  @media (max-width: 600px) {
    width: 120px;
    font-size: ${({ theme }) => theme.fontSizes.l};
  }

  @media (max-width: 450px) {
    width: 160px;
    font-size: ${({ theme }) => theme.fontSizes.xl};
  } ;
`;

export const StyledFade = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.5);
`;
