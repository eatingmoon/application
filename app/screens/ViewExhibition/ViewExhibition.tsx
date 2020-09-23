import React from 'react';
import styled from 'styled-components/native';

import Header from './Header';
import Button from '../../components/Button';
import ViewContainer from '../../components/ContentWrapper/ViewContainer';

import placeholderDog from '../../assets/profiles/dog.png';
import placeholderFox from '../../assets/placeholder-fox-background.png';

export default () => {
  return (
    <ViewContainer>
      <Header />
      <ContentWrapper
        source={placeholderFox}
      >
        <OverlayWrapper>
          <ProfileContainer>
            <ProfileImage source={placeholderDog} />
            <ProfileInformation>
              <CreatorText>아티스트</CreatorText>
              <ProfileName>김성우</ProfileName>
              <MetaText>최종 수정 2020.06.24</MetaText>
            </ProfileInformation>
          </ProfileContainer>
        </OverlayWrapper>
      </ContentWrapper>
      <BottomButton isPrimary isBiggerText>
        전시회 입장하기
      </BottomButton>
    </ViewContainer>
  );
};

const ContentWrapper = styled.ImageBackground.attrs({
  resizeMode: 'cover',
})`
  flex: 1;
  width: 100%;
  position: relative;
`;

const OverlayWrapper = styled.View`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: flex-end;
  padding-bottom: 70px;
`;

const BottomButton = styled(Button)`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

const ProfileContainer = styled.View`
  flex-direction: row;
  align-items: flex-end;
  padding: 28px 20px;
`;

const ProfileImage = styled.Image.attrs({
  resizeMode: 'cover',
})`
  height: 122px;
  width: 122px;
  border-radius: ${122 / 2}px;
`;

const ProfileInformation = styled.View`
  margin-left: 14px;
`;

const CreatorText = styled.Text`
  color: #7A5CC5;
  font-size: 23px;
  line-height: 33px;
`;

const ProfileName = styled.Text`
  color: white;
  font-size: 30px;
  line-height: 33px;
`;

const MetaText = styled.Text`
  margin-top: 6px;
  color: #ECECEC;
  font-size: 16px;
  line-height: 19px;
`;
