import React from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';

import ProductCard from '../molecules/ProductCard';

import { mediaQueryStrings } from '../../helpers/mediaQueryStrings';

import 'swiper/swiper-bundle.css';
import './styles/stylesProductsSlider.css';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const ProductsSlider = () => {
  const { max480, max650, max900 } = mediaQueryStrings;

  const isMobile = useMediaQuery({
    query: max480,
  });

  const is650 = useMediaQuery({
    query: max650,
  });

  const is900 = useMediaQuery({
    query: max900,
  });

  const selectedProducts = useSelector(
    ({ productsAndCart }) => productsAndCart.products
  );

  const cards = selectedProducts.map((product) => (
    <SwiperSlide tag="li" key={product.productId}>
      <ProductCard {...product} products={selectedProducts} />
    </SwiperSlide>
  ));

  return (
    <div>
      <Swiper
        id="productSlider"
        wrapperTag="ul"
        navigation
        slidesPerView={isMobile ? 1 : is650 ? 2 : is900 ? 3 : 4}
      >
        {cards}
      </Swiper>
    </div>
  );
};

export default ProductsSlider;
