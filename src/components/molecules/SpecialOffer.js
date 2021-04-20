import React from 'react';
import { useMediaQuery } from 'react-responsive';

import Button from '../atoms/Button';
import Heading from '../atoms/Heading';

import { routes } from '../../routes';

import { StyledDiv, StyledLink } from './styles/StyledSpecialOffer';

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
      <StyledLink
        to={{
          pathname: routes.products,
          state: {
            category: 'sale',
          },
        }}
      >
        <Button type="button" variant={'specialOffer'} label={'shop now'} />
      </StyledLink>
    </StyledDiv>
  );
};

export default SpecialOffer;
