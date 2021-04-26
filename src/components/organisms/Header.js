import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';

import { routes } from '../../routes';

import 'swiper/swiper-bundle.css';
import './styles/stylesHeader.css';
import {
  StyledHeadingWrapper,
  StyledHeading,
  StyledSubheading,
  StyledButton,
} from './styles/StyledHeader';

import img1 from '../../assets/images/header1.jpg';
import img1mobile from '../../assets/images/header1mobile.jpg';
import img2 from '../../assets/images/header2.jpg';
import img2mobile from '../../assets/images/header2mobile.jpg';
import img3 from '../../assets/images/header3.jpg';
import img3mobile from '../../assets/images/header3mobile.jpg';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Header = () => {
  const isSearchPanelOn = useSelector(
    ({ searchPanel }) => searchPanel.isSearchPanelOn
  );

  const isTablet = useMediaQuery({
    query: '(max-width: 768px)',
  });

  const slides = [
    <SwiperSlide
      style={{ backgroundImage: `url(${isTablet ? img1mobile : img1})` }}
      key={1}
      id="headerPhoto1"
    />,
    <SwiperSlide
      style={{ backgroundImage: `url(${isTablet ? img2mobile : img2})` }}
      key={2}
      id="headerPhoto2"
    />,
    <SwiperSlide
      style={{ backgroundImage: `url(${isTablet ? img3mobile : img3})` }}
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
        style={isSearchPanelOn ? { zIndex: '-1' } : null} //without this temporary change useOnClickOutside for Search Popper won't work properly
      >
        {slides}
        <StyledHeadingWrapper>
          <StyledHeading>cool cleats</StyledHeading>
          <StyledSubheading>
            The widest offer of football shoes on the Internet
          </StyledSubheading>
          <Link to={routes.products}>
            <StyledButton type="button">shop now</StyledButton>
          </Link>
        </StyledHeadingWrapper>
      </Swiper>
    </>
  );
};

export default Header;
