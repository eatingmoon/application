import React from 'react';
import { ImageSourcePropType } from 'react-native';
import styled from 'styled-components/native';

interface IExhibitionCard {
  title: string;
  description: string;
  creatorName: string;
  date: string;
  image: ImageSourcePropType;
}

const ExhibitionCard: React.FC<IExhibitionCard> = ({
  title, description, creatorName, date, image,
}) => {
  return (
    <Container>
      <Image
        source={image}
      />
      <Information>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <MetaContainer>
          <CreatorName>{creatorName}</CreatorName>
          <DateText>{date}</DateText>
        </MetaContainer>
      </Information>
    </Container>
  );
};

export default ExhibitionCard;

const Container = styled.View`
  height: 165px;
`;

const Image = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 165px;
  height: 165px;
  border-radius: 18px;
`;

const Information = styled.View`
`;

const Title = styled.Text`
`;

const Description = styled.Text`
`;

const MetaContainer = styled.View`
`;

const CreatorName = styled.Text`
`;

const DateText = styled.Text`
`;
