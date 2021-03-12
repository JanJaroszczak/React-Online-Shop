import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';
import './styles/stylesHeader.css';

import img1 from '../../assets/images/header1.jpg';
import img2 from '../../assets/images/header2.jpg';
import img3 from '../../assets/images/header3.jpg';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const StyledHeadingWrapper = styled.div`
  position: absolute;
  z-index: 1;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: ${({ theme }) => theme.colors.mainWhite};
  text-align: center;

  /* border: 1px solid white; */
`;

const StyledHeading = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.sl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  letter-spacing: 2px;
  text-transform: uppercase;

  /* border: 1px solid white; */
`;

const StyledSubheading = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  margin-top: 15px;

  /* border: 1px solid white; */
`;

const StyledButton = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.mainWhite};
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  text-transform: uppercase;
  margin-top: 40px;
  padding: 13px 20px 10px;
  border: 2px solid ${({ theme }) => theme.colors.mainWhite};
  transition: 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.mainDark};
    border: 2px solid ${({ theme }) => theme.colors.mainDark};
  }
`;

const Header = () => {
  const slides = [
    <SwiperSlide
      style={{ backgroundImage: `url(${img1})` }}
      key={1}
      id="headerPhoto1"
    />,
    <SwiperSlide
      style={{ backgroundImage: `url(${img2})` }}
      key={2}
      id="headerPhoto2"
    />,
    <SwiperSlide
      style={{ backgroundImage: `url(${img3})` }}
      key={3}
      id="headerPhoto3"
    />,
  ];

  return (
    <>
      <Swiper
        id="main"
        navigation
        pagination={{
          clickable: true,
        }}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
      >
        {slides}
        <StyledHeadingWrapper>
          <StyledHeading>cool cleats</StyledHeading>
          <StyledSubheading>
            The widest offer of football shoes on the Internet
          </StyledSubheading>
          <StyledButton>shop now</StyledButton>
        </StyledHeadingWrapper>
      </Swiper>
    </>
  );
};

export default Header;
