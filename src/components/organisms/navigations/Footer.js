import React from 'react';
import { useDispatch } from 'react-redux';

import { isTermsModalOpen } from '../../../actions';

import {
  StyledFooter,
  StyledUl,
  StyledLi,
  StyledFooterButton,
} from './styles/StyledFooter';

const Footer = () => {
  const dispatch = useDispatch();

  return (
    <StyledFooter>
      <StyledUl>
        <StyledLi>{`Copyright \u00A9 ${new Date().getFullYear()} Jan Jaroszczak`}</StyledLi>
        <StyledLi>
          <StyledFooterButton onClick={() => dispatch(isTermsModalOpen(true))}>
            Terms and Conditions
          </StyledFooterButton>
        </StyledLi>
      </StyledUl>
    </StyledFooter>
  );
};

export default Footer;
