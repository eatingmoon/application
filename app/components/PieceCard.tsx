import React from 'react';
import { ImageSourcePropType } from 'react-native';
import styled, { css } from 'styled-components/native';

import { screenWidth } from '../utils/screenSize';

interface IPieceCard {
  image: ImageSourcePropType,
  title: string;
}

const PieceCard: React.FC<IPieceCard> = ({ image, title }) => {
  return (
    <Container>
      <ImageWrapper>
        <Image
          source={image}
        />
      </ImageWrapper>
      <Title>{title}</Title>
    </Container>
  );
};

export default PieceCard;

const CARD_WIDTH = (screenWidth * 0.81 - 32) / 2;
const CARD_HEIGHT = CARD_WIDTH * 1.025;

const Container = styled.View`
  width: ${CARD_WIDTH}px;
`;

const ImageStyle = css`
  width: ${CARD_WIDTH}px;
  height: ${CARD_HEIGHT}px;
  border-radius: 8px;
`;

const ImageWrapper = styled.View`
  ${ImageStyle}
  elevation: 10;
`;

const Image = styled.Image.attrs({
  resizeMode: 'cover',
})`
  ${ImageStyle}
`;

const Title = styled.Text`
  margin-top: 7px;
  font-weight: bold;
  font-size: 21px;
  line-height: ${21 * 1.25}px;
  color: #000000;
  margin-bottom: 16px;
`;
