import React from 'react';
import styled from 'styled-components/native';

import { screenWidth } from '../../utils/screenSize';

const Profile = () => {
  return (
    <Container>
      <Information>
        <ProfileRow>
          <NameText>정황지</NameText>
          <SubscriberText>
            구독자
            <SubscriberNumber>
              {' '}0
            </SubscriberNumber>
          </SubscriberText>
        </ProfileRow>
        <ButtonWithTouchableOpacity>
          <ButtonText>
            작품 관리
          </ButtonText>
        </ButtonWithTouchableOpacity>
      </Information>
      <ProfileImage
        source={{ uri: 'https://images.unsplash.com/photo-1600722981906-107c99e13f54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1275&q=80' }}
      />
    </Container>
  );
};

export default Profile;

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  width: ${screenWidth * 0.9}px;
  margin-bottom: 58px;
`;

const Information = styled.View`
`;

const ProfileRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

const NameText = styled.Text`
  font-weight: bold;
  font-size: 30px;
  line-height: 36px;
`;

const SubscriberText = styled.Text`
  margin-left: 16px;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
`;

const SubscriberNumber = styled.Text`
  color: #7A5CC5;
  font-weight: 500;
`;

const ButtonWithTouchableOpacity = styled.TouchableOpacity`
  background-color: #7A5CC5;
  padding: 11px 30px;
  align-items: center;
  align-self: flex-start;
  justify-content: center;
  border-radius: 15px;
  margin-top: 14px;
  margin-bottom: 11px;
`;

const ButtonText = styled.Text`
  font-size: 15px;
  line-height: 18px;
  font-weight: bold;
  color: white;
  align-self: flex-start;
`;

const ProfileImage = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 136px;
  height: 136px;
`;
