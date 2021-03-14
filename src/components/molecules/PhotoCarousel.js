import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Thumbs } from 'swiper';
import 'swiper/swiper-bundle.css';
import './styles/stylesPhotoCarousel.css';

SwiperCore.use([Navigation, Pagination, Thumbs]);

const PhotoCarousel = ({ id }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const availableProducts = useSelector(({ products }) => products);

  const currentProduct = availableProducts.find(
    (product) => product.productId === id
  );

  const slides = currentProduct.productImage.map((img, index) => (
    <SwiperSlide tag="li" key={index}>
      <img src={img} alt={`${index + 1}`} style={{ width: `100%` }} />
    </SwiperSlide>
  ));

  // const thumbs = [
  //   <SwiperSlide key={1} tag="li">
  //     <img src={imgProduct1} alt="altText6" style={{ width: `100%` }} />
  //   </SwiperSlide>,
  //   <SwiperSlide key={2} tag="li">
  //     <img src={imgProduct2} alt="altText7" style={{ width: `100%` }} />
  //   </SwiperSlide>,
  //   <SwiperSlide key={3} tag="li">
  //     <img src={imgProduct3} alt="altTex8" style={{ width: `100%` }} />
  //   </SwiperSlide>,
  //   <SwiperSlide key={4} tag="li">
  //     <img src={imgProduct4} alt="altText9" style={{ width: `100%` }} />
  //   </SwiperSlide>,
  //   <SwiperSlide key={5} tag="li">
  //     <img src={imgProduct5} alt="altText99" style={{ width: `100%` }} />
  //   </SwiperSlide>,
  // ];

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

      <Swiper
        id="thumbsProductPage"
        spaceBetween={10}
        slidesPerView={5}
        onSwiper={setThumbsSwiper}
      >
        {slides}
      </Swiper>
    </div>
  );
};

export default PhotoCarousel;
