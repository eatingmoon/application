import React from 'react';
import styled from 'styled-components/native';

export default () => {
  return (
    <Container>
      <Information>
        <ProfileImage />
        <Section>
          <Name>권순재</Name>
          <TagList>
            <Tag>편안한</Tag>
            <Tag>수묵화</Tag>
          </TagList>
        </Section>
      </Information>
      <RatingContainer>
        <RatingText>4.7</RatingText>
      </RatingContainer>
    </Container>
  );
};

const Container = styled.View`
`;

const Information = styled.View`
`;

const ProfileImage = styled.Image`
`;

const Section = styled.View`
`;

const Name = styled.Text`
`;

const TagList = styled.View`
`;