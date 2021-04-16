import styled from 'styled-components';

export const StyledCheckboxesWrapper = styled.div`
  width: 280px;
  padding: 15px 25px 10px;
  background-color: ${({ theme }) => theme.colors.mainDark};
  border-bottom: 1px solid ${({ theme }) => theme.colors.mainWhite};

  @media (max-width: 768px) {
    width: 100%;
    padding-left: 45px;

    background-color: ${({ theme }) => theme.colors.mainWhite};
    border-bottom: 1px solid ${({ theme }) => theme.colors.midGray};
  }

  h3 {
    margin-bottom: 15px;
    color: ${({ theme }) => theme.colors.mainWhite};
    font-size: ${({ theme }) => theme.fontSizes.m};
    font-weight: ${({ theme }) => theme.fontWeights.light};

    @media (max-width: 768px) {
      color: ${({ theme }) => theme.colors.mainDark};
    }
  }

  input[type='checkbox'] {
    display: none;
  }

  input[type='checkbox'] + label {
    display: inline-block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 10px;
    font-size: ${({ theme }) => theme.fontSizes.xs};
    color: ${({ theme }) => theme.colors.mainWhite};
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;

    @media (max-width: 768px) {
      color: ${({ theme }) => theme.colors.mainDark};
    }
  }

  input[type='checkbox'] + label:before {
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    border: 1px solid ${({ theme }) => theme.colors.mainWhite};
    position: absolute;
    left: 0;
    top: -2px;
    opacity: 0.6;
    -webkit-transition: all 0.12s, border-color 0.08s;
    transition: all 0.12s, border-color 0.08s;

    @media (max-width: 768px) {
      border: 1px solid ${({ theme }) => theme.colors.mainDark};
    }
  }

  input[type='checkbox']:checked + label:before {
    width: 10px;
    top: -7px;
    left: 5px;
    border-radius: 0;
    opacity: 1;
    border-top-color: transparent;
    border-left-color: transparent;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;
