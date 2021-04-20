import ClipLoader from 'react-spinners/ClipLoader';
import styled from 'styled-components';

const StyledSpinnerWrapper = styled.div`
  position: absolute;
  left: ${({ left }) => left};
  top: ${({ top }) => top};
  transform: ${({ translate }) => translate};
`;

const Spinner = ({ isLoading, size, top, left, translateX, translateY }) => {
  return (
    <StyledSpinnerWrapper
      left={left}
      top={top}
      translate={`translate(${translateX}, ${translateY});`}
    >
      <ClipLoader color="black" loading={isLoading} size={size} />;
    </StyledSpinnerWrapper>
  );
};

export default Spinner;
