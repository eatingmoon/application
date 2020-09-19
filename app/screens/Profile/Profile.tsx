import React from 'react';
import styled from 'styled-components/native';

import placeholderNyom from '../../assets/profiles/nyom.png';

const Profile = () => {
  return (
    <Container>
      <Information>
        <HelloText>
          김세령 님,{'\n'}
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
`;

const Information = styled.View`
`;

const HelloText = styled.Text`
`;

const ButtonWithTouchableOpacity = styled.TouchableOpacity`
`;

const ButtonText = styled.Text`
`;

const ProfileImage = styled.Image`
`;
