import styled from 'styled-components';

export const StyledTermsWrapper = styled.div`
  max-height: 70vh;
  overflow: auto;

  & ::-webkit-scrollbar {
    width: 7px;
  }

  & ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  & ::-webkit-scrollbar-thumb {
    background: #888;
  }

  & ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const StyledTermsContentWrapper = styled.div`
  margin-bottom: 15px;
  padding: 0 20px;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  text-align: justify;

  h1,
  h2 {
    margin-top: 13px;
    margin-bottom: 13px;
  }

  p,
  li {
    margin-top: 8px;
    margin-bottom: 8px;
  }
`;
