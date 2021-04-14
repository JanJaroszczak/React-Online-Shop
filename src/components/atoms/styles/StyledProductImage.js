import styled from 'styled-components';

export const StyledDiv = styled.div`
  position: relative;
  margin-bottom: 2px;
`;

export const StyledOverflowHidde = styled.div`
  overflow: hidden;
  font-size: 0;
`;

export const StyledImg = styled.img`
  width: 100%;
  transition: 0.3s;

  &:hover {
    transform: scale(1.1) translate(-2%, 2%);
  }
`;

// export const StyledBgImg = styled.div`
//   background: url(${({ img }) => img});
//   width: 200px;
//   height: 200px;
//   /* background-repeat: no-repeat; */
//   /* background-position: 50%; */
//   background-size: contain;
// `;

export const StyledCircle = styled.div`
  position: absolute;
  top: -15px;
  right: -10px;
  background-color: ${({ extraState }) =>
    extraState === 'sale'
      ? 'black'
      : extraState === 'new'
      ? '#959595'
      : 'black'};
  color: ${({ theme }) => theme.colors.mainWhite};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  text-align: center;
`;

export const StyledCircleInfo = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: ${({ theme }) => theme.fontSizes.ss};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  text-transform: uppercase;
`;
