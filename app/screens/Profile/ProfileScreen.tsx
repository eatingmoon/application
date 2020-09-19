import React from 'react';
import styled from 'styled-components/native';

import ProfileHeader from '../../components/ProfileHeader';
import ScrollContainer from '../../components/ContentWrapper/ScrollContainer';

const ProfileScreen = () => {
  return (
    <RelativeContainer>
      <ScrollContainer>
        <ProfileHeader />
      </ScrollContainer>
    </RelativeContainer>
  );
};

export default ProfileScreen;

const RelativeContainer = styled.View`
  flex: 1;
`;
