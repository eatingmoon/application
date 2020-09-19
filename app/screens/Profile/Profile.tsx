import React from 'react';
import styled from 'styled-components/native';

import { screenWidth } from '../../utils/screenSize';

import placeholderNyom from '../../assets/profiles/nyom.png';

const Profile = () => {
  return (
    <Container>
      <Information>
        <HelloText>
          <NameText>김세령</NameText> 님,{'\n'}
          안녕하세요!
        </HelloText>
        <ButtonWithTouchableOpacity>
          <ButtonText>
            프로필 설정
          </ButtonText>
        </ButtonWithTouchableOpacity>
      </Information>
      <ProfileImage
        source={placeholderNyom}
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
  margin-bottom: 45px;
`;

const Information = styled.View`
  margin-left: ${screenWidth * 0.05}px;
`;

const HelloText = styled.Text`
  font-size: 30px;
  line-height: 36px;
  margin-bottom: 12px;
`;

const NameText = styled.Text`
  font-weight: bold;
`;

const ButtonWithTouchableOpacity = styled.TouchableOpacity`
  background-color: #7A5CC5;
  padding: 11px 30px;
  align-items: center;
  align-self: flex-start;
  justify-content: center;
  border-radius: 15px;
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
  margin-bottom: 8px;
  margin-right: ${screenWidth * 0.025}px;
`;
