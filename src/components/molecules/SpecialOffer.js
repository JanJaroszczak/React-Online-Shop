import React from 'react';
import styled from 'styled-components';

import Heading from '../atoms/Heading';
import Button from '../atoms/Button';

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto;
  position: relative;
  max-width: 1200px;
  width: 90%;
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
`;

const SpecialOffer = ({ heading, headingDescription }) => {
  return (
    <StyledDiv>
      <Heading
        type={'specialOffer'}
        heading={'march sale'}
        headingDescription={'free shipping for orders over $100'}
      />
      <Button variant={'specialOffer'} label={'shop now'} />
    </StyledDiv>
  );
};

export default SpecialOffer;
