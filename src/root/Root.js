import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import styled, { css } from 'styled-components';

import MainTemplate from '../templates/MainTemplate';
import Router from '../routing/Router';
import { calculateCartTotals } from '../actions';

// import Button from '../components/atoms/Button';

// const StyledBtn = styled.button`
//   color: coral;
//   padding: 8px 18px;
//   /* background-color: ${(props) => (props.isBlue ? 'blue' : 'yellow')}; */
//   background-color: ${({ isBlue }) => (isBlue ? 'blue' : 'yellow')};

//   background-color: ${({ color }) => color};

//   ${({ diff }) =>
//     diff &&
//     css`
//       color: white;
//       border-radius: 10px;
//       margin: 5px;
//     `}
// `;

// const SecondBtn = styled(StyledBtn)`
//   color: black;
// `;

// const ThemeBtn = styled.button`
//   color: ${({ theme }) => theme.colors.mainWhite};
//   background-color: ${({ theme }) => theme.colors.mainDark};
//   padding: 8px 18px;
// `;
// const StyledLink = styled(Link)`

// `

const Root = () => {
  //get cart from reducer
  const cartProducts = useSelector(({ cart }) => cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateCartTotals());
  }, [cartProducts, dispatch]);

  return (
    <MainTemplate>
      <Router />

      {/* <h1>Root</h1>
      <StyledBtn>click me one</StyledBtn>
      <StyledBtn isBlue>click me two</StyledBtn>
      <StyledBtn color="pink">click me two</StyledBtn>
      <StyledBtn color="yellow" diff>
        click me diff
      </StyledBtn>
      <SecondBtn>Second btn</SecondBtn>
      <ThemeBtn>theme test</ThemeBtn>
      <Button onClickFn={() => console.log('CLICK')}>atom btn</Button>
      <Link>to products</Link> */}
    </MainTemplate>
  );
};

export default Root;
