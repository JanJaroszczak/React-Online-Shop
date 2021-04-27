import styled from 'styled-components';

export const StyledTermsWrapper = styled.div`
  max-height: 70vh;
  overflow: auto;

  & ::-webkit-scrollbar {
    width: 7px;
  }

  /* Track */
  & ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  & ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  & ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const StyledParagraph = styled.p`
  margin-bottom: 15px;
  padding: 0 20px;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  text-align: justify;
`;
