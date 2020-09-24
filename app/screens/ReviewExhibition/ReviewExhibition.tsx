import React, { useState } from 'react';
import styled from 'styled-components/native';

import ScrollContainer from '../../components/ContentWrapper/ScrollContainer';
import Button from '../../components/Button';
import Tag from '../../components/Tag';
import ShareSection from './ShareSection';
import ReviewSelector from './ReviewSelector';
import ReviewModal from './ReviewModal';
import Header from '../ViewExhibition/Header';
import { TextInput } from '../CreateExhibition/FormTextInput';

import { screenWidth } from "../../utils/screenSize";

const ReviewExhibition: React.FC = () => {
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const onPressSubmit = () => setIsReviewModalOpen(!isReviewModalOpen);

  const [rating, setRating] = useState(4.5);

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
              <SubscribeButton isPrimary>
                구독   |   1.2k
              </SubscribeButton>
            </ProfileInformation>
            <ProfileTagList>
              <StyledTag>편안한</StyledTag>
              <StyledTag>수묵화</StyledTag>
            </ProfileTagList>
          </ProfileInformationWrapper>
        </ProfileContainer>
        <ReviewContainer>
          <ReviewHeader>
            <ReviewTitle>리뷰 남기기</ReviewTitle>
            <ReviewSelector
              value={rating}
              setValue={setRating}
            />
          </ReviewHeader>
          <ReviewTextbox
            placeholder="전시회를 평가해 주세요."
            multiline
            textAlignVertical="top"
          />
          <ReviewSubmitButton
            isPrimary
            onPress={onPressSubmit}
          >
            등록
          </ReviewSubmitButton>
        </ReviewContainer>
        <ShareSection />
        <ReviewModal
          isVisible={isReviewModalOpen}
          setIsVisible={setIsReviewModalOpen}
        />
      </ScrollContainer>
    </RelativeContainer>
  );
};

export default ReviewExhibition;

const RelativeContainer = styled.View`
  flex: 1;
`;

const ProfileContainer = styled.View`
  width: ${screenWidth * 0.9}px;
  margin-top: 13px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

const ProfileImage = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 122px;
  height: 122px;
  margin-right: 18px;
  border-radius: ${122 / 2}px;
`;

const ProfileInformationWrapper = styled.View`
  flex: 1;
`;

const ProfileInformation = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

const LeftSideInformation = styled.View`
`;

const ArtistText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  line-height: ${14 * 1.21}px;
  color: #94a0b1;
`;

const UsernameText = styled.Text`
  font-weight: bold;
  font-size: 30px;
  line-height: ${30 * 1.2}px;
  color: #000000;
  margin-top: 3.3px;
`;

const SubscribeButton = styled(Button).attrs({
  textStyle: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 15 * 1.2,
  },
})`
  border-radius: 15px;
  padding: 10px 0;
  width: 130px;
`;

const ProfileTagList = styled.View`
  flex-direction: row;
  margin-top: 9px;
`;

const StyledTag = styled(Tag)`
  margin-right: 4px;
`;

const ReviewContainer = styled.View`
  margin-top: 58.3px;
`;

const ReviewHeader = styled.View`
  width: ${screenWidth * 0.9}px;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 13.7px;
`;

const ReviewTitle = styled.Text`
  font-weight: bold;
  font-size: 18px;
  line-height: ${18 * 1.22}px;
  color: #000000;
`;

const ReviewTextbox = styled(TextInput)`
  width: ${screenWidth * 0.9}px;
  height: 131px;
  margin-bottom: 30px;
`;

const ReviewSubmitButton = styled(Button).attrs({
  textStyle: {
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 20 * 1.2,
  },
})`
  width: ${screenWidth * 0.9}px;
  padding: 16px 0;
`;
