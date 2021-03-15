import React from 'react';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';
import './styles/stylesProductsSlider.css';

import ProductCard from '../molecules/ProductCard';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const ProductsSlider = () => {
  const selectedProducts = useSelector(({ products }) => products);

  const cards = selectedProducts.map((product) => (
    <SwiperSlide tag="li" key={product.productId}>
      <ProductCard {...product} />
    </SwiperSlide>
  ));

  return (
    <>
      <Swiper
        id="productSlider"
        wrapperTag="ul"
        navigation
        // centeredSlides={true}
        // centeredSlidesBounds={true}
        // spaceBetween={10}
        slidesPerView={4}
        // autoplay={{ delay: 3000, disableOnInteraction: false }}
        // loop
      >
        {cards}
      </Swiper>
    </>
  );
};

export default ProductsSlider;
