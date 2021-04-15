import React from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';
import './styles/stylesProductsSlider.css';

import ProductCard from '../molecules/ProductCard';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const ProductsSlider = () => {
  const is650 = useMediaQuery({
    query: '(max-width: 650px)',
  });

  const is900 = useMediaQuery({
    query: '(max-width: 900px)',
  });

  const isMobile = useMediaQuery({
    query: '(max-width: 480px)',
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
        // centeredSlides={true}
        // centeredSlidesBounds={true}
        // spaceBetween={10}
        slidesPerView={isMobile ? 1 : is650 ? 2 : is900 ? 3 : 4}
        // autoplay={{ delay: 3000, disableOnInteraction: false }}
        // loop
      >
        {cards}
      </Swiper>
    </div>
  );
};

export default ProductsSlider;
