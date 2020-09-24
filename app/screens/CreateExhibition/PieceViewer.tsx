import React from 'react';
import styled from 'styled-components/native';

import { frames } from './assets';

export default ({ image, frame }: { image: string, frame?: number | undefined }) => {
  if (frame === undefined) {
    return (
      <ImageContainer>
        <PieceImage
          source={{ uri: image }}
        />
      </ImageContainer>
    );
  }
  return (
    <FrameContainer
      source={frames._4t3[frame]}
      style={{ transform: [{ rotate: '90deg' }] }}
    >
      <PieceImage
        source={{ uri: image }}
        style={{ transform: [{ rotate: '-90deg' }] }}
      />
    </FrameContainer>
  );
};

const ImageContainer = styled.View`
  width: ${291.8 * 0.95}px;
  height: ${389 * 0.95}px;
  align-items: center;
  justify-content: center;
`;

const FrameContainer = styled.ImageBackground.attrs({
  resizeMode: 'cover',
})`
  height: ${291.8 * 0.95}px;
  width: ${389 * 0.95}px;
  align-items: center;
  justify-content: center;
`;

const PieceImage = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: ${230 * 0.95}px;
  height: ${326 * 0.95}px;
`;
