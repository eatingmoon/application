import React from 'react';
import {
  StyleProp,
  ViewStyle,
  ImageSourcePropType,
} from 'react-native';
import styled from 'styled-components/native';

import { screenWidth } from '../../../utils/screenSize';

interface ISearchItem {
  image: ImageSourcePropType;
  title: string;
  creatorName: string;
  date: string;
  style?: StyleProp<ViewStyle>;
}

const SearchItem: React.FC<ISearchItem> = ({ image, title, creatorName, date, style = {} }) => {
  return (
    <Wrapper>
      <Container
        style={style}
      >
        <ImageWrapper>
          <Image
            source={image}
          />
        </ImageWrapper>
        <Information>
          <Title>
            {title}
          </Title>
          <CreatorName>
            {creatorName}
          </CreatorName>
          <Date>
            {date}
          </Date>
        </Information>
      </Container>
    </Wrapper>
  );
};

export default SearchItem;

const Wrapper = styled.View`
  width: 100%;
`;

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  width: ${screenWidth * 0.9}px;
  padding-top: 8.1px;
  padding-bottom: 7.9px;
`;

const ImageWrapper = styled.View`
  elevation: 5;
  background-color: white;
  border-radius: 10px;
`;

const Image = styled.Image`
  width: 69px;
  height: 64px;
  border-radius: 10px;
  border: solid 1px #999999;
`;

const Information = styled.View`
  margin-left: 18px;
  flex: 1;
`;

const Title = styled.Text`
  font-size: 20px;
  line-height: ${20 * 1.2}px;
  color: #000000;
  margin-bottom: 5px;
`;

const CreatorName = styled.Text`
  font-size: 13px;
  line-height: ${13 * 1.23}px;
  color: #717171;
  margin-bottom: 2px;
`;

const Date = styled.Text`
  font-size: 13px;
  line-height: ${13 * 1.23}px;
  color: #717171;
  color: #717171;
`;
