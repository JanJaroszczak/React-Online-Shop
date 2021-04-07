import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import Heading from '../atoms/Heading';
import Button from '../atoms/Button';

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto;
  position: relative;
  height: 165px;
  margin: 60px auto;
  padding: 0px 100px;
  border: 1px solid ${({ theme }) => theme.colors.moderateGray};

  &:before {
    z-index: -1;
    content: '';
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    border: 1px solid ${({ theme }) => theme.colors.moderateGray};
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    height: auto;
    margin: 0 auto 60px;
    padding: 0;
    padding-bottom: 30px;
    text-align: center;
  } ;
`;

const SpecialOffer = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)',
  });

  return (
    <StyledDiv>
      <Heading
        type={isMobile ? null : 'specialOffer'}
        heading={'march sale'}
        headingDescription={'free shipping for orders over $100'}
      />
      <Button type="button" variant={'specialOffer'} label={'shop now'} />
    </StyledDiv>
  );
};

export default SpecialOffer;
