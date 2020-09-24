import React from 'react';
import styled from 'styled-components/native';

import ScrollContainer from '../../components/ContentWrapper/ScrollContainer';
import Button from '../../components/Button';
import Header from '../ViewExhibition/Header';
import ShareSection from './ShareSection';
import ReviewSelector from './ReviewSelector';

const ReviewExhibition: React.FC = () => {
  return (
    <RelativeContainer>
      <ScrollContainer>
        <Header />
        <ProfileContainer>
          <ProfileImage
            source={{ uri: 'https://images.unsplash.com/photo-1600722981906-107c99e13f54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1275&q=80' }}
          />
          <ProfileInformationWrapper>
            <ProfileInformation>
              <LeftSideInformation>
                <ArtistText>아티스트</ArtistText>
                <UsernameText>
                  김성우
                </UsernameText>
              </LeftSideInformation>
              <SubscribeButton>
                구독   |   1.2k
              </SubscribeButton>
            </ProfileInformation>
            <ProfileTagList>
              <Tag>편안한</Tag>
              <Tag>수묵화</Tag>
            </ProfileTagList>
          </ProfileInformationWrapper>
        </ProfileContainer>
        <ReviewContainer>
          <ReviewHeader>
            <ReviewTitle>리뷰 남기기</ReviewTitle>
            <ReviewSelector />
          </ReviewHeader>
          <ReviewTextbox />
          <ReviewSubmitButton />
        </ReviewContainer>
        <ShareSection />
      </ScrollContainer>
    </RelativeContainer>
  );
};

export default ReviewExhibition;

const RelativeContainer = styled.View`
  flex: 1;
`;

const ProfileContainer = styled.View`
`;

const ProfileImage = styled.Image`
`;

const ProfileInformationWrapper = styled.View`
`;

const ProfileInformation = styled.View`
`;

const LeftSideInformation = styled.View`
`;

const ArtistText = styled.Text`
`;

const UsernameText = styled.Text`
`;

const SubscribeButton = styled(Button)`
`;

const ProfileTagList = styled.View`
`;

const ReviewContainer = styled.View`
`;

const ReviewHeader = styled.View`
`;

const ReviewTitle = styled.Text`
`;

const ReviewTextbox = styled.TextInput`
`;

const ReviewSubmitButton = styled(Button)`
`;
