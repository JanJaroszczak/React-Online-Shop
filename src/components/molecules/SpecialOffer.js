import React from 'react';
import { useMediaQuery } from 'react-responsive';

import Button from '../atoms/Button';
import Heading from '../atoms/Heading';

import {
  buttonVariants,
  headingTypes,
} from '../../helpers/atomsTypesAndVariants';
import { mediaQueryStrings } from '../../helpers/mediaQueryStrings';
import { routes } from '../../routes';

import { StyledDiv, StyledLink } from './styles/StyledSpecialOffer';

const SpecialOffer = () => {
  const isTablet = useMediaQuery({
    query: mediaQueryStrings.max768,
  });

  return (
    <StyledDiv>
      <Heading
        type={isTablet ? null : headingTypes.specialOffer}
        heading={'may sale'}
        headingDescription={'hurry up to get the last pairs!'}
      />
      <StyledLink
        to={{
          pathname: routes.products,
          state: {
            category: 'sale',
          },
        }}
      >
        <Button
          type="button"
          variant={buttonVariants.specialOffer}
          label={'shop now'}
        />
      </StyledLink>
    </StyledDiv>
  );
};

export default SpecialOffer;
