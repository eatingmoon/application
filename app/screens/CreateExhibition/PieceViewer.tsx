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
  width: 291.8px;
  height: 389px;
  align-items: center;
  justify-content: center;
`;

const PieceImage = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 242px;
  height: 327px;
`;
