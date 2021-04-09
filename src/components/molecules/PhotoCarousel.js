import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Thumbs } from 'swiper';
import 'swiper/swiper-bundle.css';
import './styles/stylesPhotoCarousel.css';

SwiperCore.use([Navigation, Pagination, Thumbs]);

const PhotoCarousel = ({ id }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const isTablet = useMediaQuery({
    query: '(max-width: 768px)',
  });

  const availableProducts = useSelector(({ products }) => products);

  const currentProduct = availableProducts.find(
    (product) => product.productId === id
  );

  const slides = currentProduct.productImage.map((img, index) => (
    <SwiperSlide tag="li" key={index}>
      <img src={img} alt={`${index + 1}`} style={{ width: `100%` }} />
    </SwiperSlide>
  ));

  return (
    <div>
      <Swiper
        id="productPage"
        thumbs={{ swiper: thumbsSwiper }}
        wrapperTag="ul"
        navigation
        pagination
        spaceBetween={0}
        slidesPerView={1}
      >
        {slides}
      </Swiper>

      {!isTablet && (
        <Swiper
          id="thumbsProductPage"
          spaceBetween={10}
          slidesPerView={5}
          onSwiper={setThumbsSwiper}
        >
          {slides}
        </Swiper>
      )}
    </div>
  );
};

export default PhotoCarousel;
