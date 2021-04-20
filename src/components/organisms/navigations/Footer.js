import React from 'react';

import { routes } from '../../../routes';

import {
  StyledFooter,
  StyledUl,
  StyledLi,
  StyledLink,
} from './styles/StyledFooter';

const Footer = () => {
  return (
    <StyledFooter>
      <StyledUl>
        <StyledLi>{`Copyright \u00A9 ${new Date().getFullYear()} Jan Jaroszczak`}</StyledLi>
        <StyledLi>
          <StyledLink to={routes.products}>Terms and Conditions</StyledLink>
        </StyledLi>
      </StyledUl>
    </StyledFooter>
  );
};

export default Footer;
