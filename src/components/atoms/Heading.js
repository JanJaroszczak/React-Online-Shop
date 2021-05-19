import React from 'react';

import {
  StyledDiv,
  StyledHeading,
  StyledHeadingDescription,
} from './styles/StyledHeading';

const SectionHeader = ({
  type,
  heading = '',
  headingDescription = '',
  headingDescriptionSecondLine,
}) => {
  return (
    <StyledDiv type={type}>
      <StyledHeading type={type}>{heading}</StyledHeading>
      <StyledHeadingDescription type={type}>
        {headingDescription}
      </StyledHeadingDescription>
      {headingDescriptionSecondLine && (
        <StyledHeadingDescription type={type}>
          {headingDescriptionSecondLine}
        </StyledHeadingDescription>
      )}
    </StyledDiv>
  );
};

export default SectionHeader;
