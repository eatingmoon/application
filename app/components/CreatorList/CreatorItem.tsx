import React from 'react';
import { SvgXml } from 'react-native-svg';
import styled from 'styled-components/native';

import Divider from './Divider';
import Tag from '../Tag';
import starIconSvg from '../../assets/star.svg';

interface ICreatorItem {
  temporaryIndex: number;
  isTopDividerRemoved?: boolean;
}

export default ({
  temporaryIndex = 0,
  isTopDividerRemoved = false,
}: ICreatorItem) => {
  return (
    <Wrapper>
      {!isTopDividerRemoved && (
        <Divider />
      )}
      <Container>
        <Information>
          <ProfileImage
            source={{ uri: `https://picsum.photos/seed/${temporaryIndex}/100/100` }}
          />
          <Section>
            <Name>김성우</Name>
            <TagList>
              <StyledTag>편안한</StyledTag>
              <StyledTag>수묵화</StyledTag>
            </TagList>
          </Section>
        </Information>
        <RatingContainer>
          <StarIcon />
          <RatingText>4.7</RatingText>
        </RatingContainer>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.View`
`;

const Container = styled.View`
  flex-direction: row;
  width: 100%;
  padding: 16px 0;
  align-items: center;
  justify-content: space-between;
`;

const Information = styled.View`
  flex-direction: row;
  align-items: center;
`;

const ProfileImage = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 54px;
  height: 54px;
  border-radius: 27px;
  margin-left: 9px;
`;

const Section = styled.View`
  margin-left: 13.5px;
  justify-content: center;
`;

const Name = styled.Text`
  font-size: 18px;
  line-height: ${18 * 1.22}px;
  color: #000000;
  margin-bottom: 3px;
`;

const TagList = styled.View`
  flex-direction: row;
`;

const StyledTag = styled(Tag)`
  margin-right: 3px;
`;

const RatingContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding-right: 19px;
`;

const StarIcon = styled(SvgXml).attrs({
  width: 13.4,
  height: 12.7,
  color: '#7a5cc5',
  xml: starIconSvg,
})`
`;

const RatingText = styled.Text`
  font-weight: bold;
  font-size: 13px;
  line-height: ${13 * 1.23}px;
  color: #ac92ec;
  margin-left: 4.3px;
`;
