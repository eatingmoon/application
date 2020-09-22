import React from 'react';
import { ImageSourcePropType } from 'react-native';
import styled from 'styled-components/native';

interface IPieceCard {
  image: ImageSourcePropType,
  title: string;
}

const PieceCard: React.FC<IPieceCard> = ({ image, title }) => {
  return (
    <Container>
      <Image
        source={image}
      />
      <Title>{title}</Title>
    </Container>
  );
};

export default PieceCard;

const Container = styled.View`
`;

const Image = styled.Image`
`;

const Title = styled.Text`
`;
