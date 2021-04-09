import styled, { css } from 'styled-components';

export const StyledSearchPanelWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const StyledSearchInput = styled.input`
  height: 45px;
  width: 180px;
  padding: 0 5px;
  margin-bottom: 2px;
  font-size: ${({ theme }) => theme.fontSizes.s};
  border-radius: 7px;
  outline: none;

  border: 1px solid black;
`;

export const StyledSearchListWrapper = styled.div`
  display: none;
  position: absolute;
  top: 50px;
  right: 0;
  z-index: 10;
  width: 400px;
  background-color: ${({ theme }) => theme.colors.mainWhite};
  border: 1px solid black;
  border-radius: 7px;
  overflow: hidden;

  ${({ open }) =>
    open &&
    css`
      display: block;
    `}
`;

export const StyledSearchList = styled.div`
  max-height: 60vh;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const StyledNoResult = styled.p`
  padding: 10px;
  font-size: ${({ theme }) => theme.fontSizes.s};
`;
