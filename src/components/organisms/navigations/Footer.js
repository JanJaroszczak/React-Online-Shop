import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  width: 100%;
  height: 70px;
  background-color: ${({ theme }) => theme.colors.lightDark};
`;

const Footer = () => {
  return <StyledFooter></StyledFooter>;
};

export default Footer;
