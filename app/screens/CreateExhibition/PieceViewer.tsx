import React from 'react';
import styled from 'styled-components/native';

import placeholderFrame from '../../assets/placeholder-frame.png';
import placeholderFox from '../../assets/placeholder-fox.png';

export default () => {
  return (
    <FrameContainer
      source={placeholderFrame}
    >
      <PieceImage
        source={placeholderFox}
      />
    </FrameContainer>
  );
};

const FrameContainer = styled.ImageBackground.attrs({
  resizeMode: 'cover',
})`
  width: ${291.8 * 0.95}px;
  height: ${389 * 0.95}px;
  align-items: center;
  justify-content: center;
`;

const PieceImage = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: ${241 * 0.95}px;
  height: ${326 * 0.95}px;
`;
