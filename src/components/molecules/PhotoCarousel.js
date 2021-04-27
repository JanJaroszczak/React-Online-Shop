import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector } from 'react-redux';
import SwiperCore, { Navigation, Pagination, Thumbs } from 'swiper';

import 'swiper/swiper-bundle.css';
import './styles/stylesPhotoCarousel.css';

SwiperCore.use([Navigation, Pagination, Thumbs]);

const PhotoCarousel = ({ id }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const availableProducts = useSelector(
    ({ productsAndCart }) => productsAndCart.products
  );

  const currentProduct = availableProducts.find(
    (product) => product.productId === id
  );

  const { productBrand, productName } = currentProduct;

  const slides = currentProduct.productImage.map((img, index) => (
    <SwiperSlide tag="li" key={index}>
      <img
        src={img}
        alt={`${productBrand} ${productName} photo ${index}`}
        className="swiperSlideImg"
      />
    </SwiperSlide>
  ));

  return (
    <div>
      <Swiper
        id="productPage"
        thumbs={{ swiper: thumbsSwiper }}
        wrapperTag="ul"
        navigation
        pagination={{
          clickable: true,
        }}
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
