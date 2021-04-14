import React from 'react';
import { useMediaQuery } from 'react-responsive';

import Heading from '../atoms/Heading';
import Button from '../atoms/Button';
import { StyledDiv } from './styles/StyledSpecialOffer';

const SpecialOffer = () => {
  const isTablet = useMediaQuery({
    query: '(max-width: 768px)',
  });

  return (
    <StyledDiv>
      <Heading
        type={isTablet ? null : 'specialOffer'}
        heading={'march sale'}
        headingDescription={'free shipping for orders over $100'}
      />
      <Button type="button" variant={'specialOffer'} label={'shop now'} />
    </StyledDiv>
  );
};

export default SpecialOffer;
