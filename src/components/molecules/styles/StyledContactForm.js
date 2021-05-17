import styled, { css } from 'styled-components';

export const StyledFormWrapper = styled.div`
  margin-top: 30px;
  margin-left: 50px;

  ${({ checkout }) =>
    checkout &&
    css`
      width: 300px;
      margin-left: 0;
    `}

  @media (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
    width: 90%;
  } ;
`;

export const StyledCheckoutWrapper = styled.div`
  margin-top: 30px;
  margin-left: 50px;

  @media (max-width: 768px) {
    margin-top: 0;
    margin-left: 0;
  } ;
`;

export const StyledInputWrapper = styled.div`
  position: relative;
`;

export const StyledClientDataInputsWrapper = styled.div`
  @media (max-width: 768px) {
    max-width: 250px;
    margin: 0 auto;
  }
`;

export const StyledErrorWrapper = styled.div`
  position: absolute;
  bottom: -17px;
  left: 0;
  font-size: ${({ theme }) => theme.fontSizes.ss};
  color: red;
`;

export const StyledTextAreaLabel = styled.label`
  display: block;
  margin-bottom: 3px;
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;

export const StyledTextarea = styled.textarea`
  display: block;
  width: 600px;
  min-height: 250px;
  padding: 5px;
  resize: vertical;
  font-family: inherit;
  background-color: ${({ theme }) => theme.colors.declicateGray};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  outline: none;
  border: none;

  @media (max-width: 1024px) {
    width: 100%;
  } ;
`;

export const StyledTermsWrapper = styled.div`
  position: relative;
  display: block;
  margin: 22px 0 24px;

  input {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
`;

export const StyledCheckboxLabel = styled.label`
  margin-left: 10px;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  vertical-align: 4px;
`;
