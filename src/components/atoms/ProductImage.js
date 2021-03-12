import React from 'react';
import styled from 'styled-components';

// import image from '../../assets/images/test_photo.jpg';

const StyledDiv = styled.div`
  position: relative;
  margin-bottom: 2px;
`;

const StyledOverflowHidde = styled.div`
  overflow: hidden;
  font-size: 0;
`;

const StyledImg = styled.img`
  width: 100%;
  transition: 0.3s;

  &:hover {
    transform: scale(1.1) translate(-2%, 2%);
  }
`;

const StyledBgImg = styled.div`
  background: url(${({ img }) => img});
  width: 200px;
  height: 200px;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: contain;
`;

const StyledCircle = styled.div`
  position: absolute;
  top: -15px;
  right: -10px;
  background-color: ${({ theme }) => theme.colors.mainDark};
  color: ${({ theme }) => theme.colors.mainWhite};
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const StyledCircleInfo = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: ${({ theme }) => theme.fontSizes.ss};
  text-transform: uppercase;
`;

const ProductImage = ({ circleInfo, img }) => {
  return (
    <StyledDiv>
      <StyledOverflowHidde>
        {/* <StyledImg src={img} /> */}
        <StyledBgImg img={img} />
      </StyledOverflowHidde>
      <StyledCircle>
        <StyledCircleInfo>{circleInfo}</StyledCircleInfo>
      </StyledCircle>
    </StyledDiv>
  );
};

export default ProductImage;
