import React from 'react';
import { ImageSourcePropType } from 'react-native';
import styled from 'styled-components/native';

interface ISearchItem {
  image: ImageSourcePropType;
  title: string;
  creatorName: string;
  date: string;
}

const SearchItem: React.FC<ISearchItem> = ({ image, title, creatorName, date }) => {
  return (
    <Wrapper>
      <Container>
        <Image
          source={image}
        />
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
`;

const Container = styled.View`
`;

const Image = styled.Image`
`;

const Information = styled.View`
`;

const Title = styled.Text`
`;

const CreatorName = styled.Text`
`;

const Date = styled.Text`
`;
