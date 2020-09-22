import React from 'react';
import { ImageSourcePropType } from 'react-native';
import styled from 'styled-components/native';

import { screenWidth } from '../utils/screenSize';

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
        <Title>{`"${title}"`}</Title>
        <Description>{description}</Description>
        <MetaContainer>
          <CreatorName>{`${creatorName} 아티스트`}</CreatorName>
          <DateText>{date}</DateText>
        </MetaContainer>
      </Information>
    </Container>
  );
};

export default ExhibitionCard;

const Container = styled.View`
  height: 165px;
  background-color: white;
  width: ${screenWidth * 0.81}px;
  elevation: 30;
  border-radius: 18px;
  border: solid 1px #f7f5f5;
  margin-bottom: 36px;
  flex-direction: row;
`;

const Image = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 165px;
  height: 165px;
  border-radius: 18px;
`;

const Information = styled.View`
  flex: 1;
  padding: 16px 0;
  align-items: flex-start;
  padding-left: ${screenWidth * 0.05}px;
  justify-content: space-between;
`;

const Title = styled.Text`
  font-weight: bold;
  font-size: 19px;
  line-height: ${19 * 1.21}px;
  color: #000000;
`;

const Description = styled.Text`
  margin-top: 23px;
  font-weight: bold;
  font-size: 12px;
  line-height: ${12 * 1.17}px;
  color: #96949b;
  margin-bottom: 14px;
`;

const MetaContainer = styled.View`
`;

const CreatorName = styled.Text`
  font-weight: bold;
  font-size: 14px;
  line-height: ${14 * 1.21}px;
  color: rgba(0, 0, 0, 0.91);
`;

const DateText = styled.Text`
  opacity: 0.76;
  font-weight: bold;
  font-size: 9px;
  line-height: ${9 * 1.22}px;
  color: rgba(0, 0, 0, 0.76);
`;
