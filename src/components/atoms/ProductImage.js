import React from 'react';
import styled from 'styled-components';

// import image from '../../assets/images/test_photo.jpg';

const StyledDiv = styled.div`
  position: relative;
  width: 263px;
  height: 335px;
`;

const StyledImg = styled.img`
  width: 100%;
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
  font-size: ${({ theme }) => theme.fontSize.ss};
  text-transform: uppercase;
`;

const ProductImage = ({ circleInfo, img }) => {
  return (
    <StyledDiv>
      <StyledImg src={img} />
      <StyledCircle>
        <StyledCircleInfo>{circleInfo}</StyledCircleInfo>
      </StyledCircle>
    </StyledDiv>
  );
};

export default ProductImage;
