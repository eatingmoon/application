import React from 'react';
import styled from 'styled-components/native';

import Profile from './Profile';

import ProfileHeader from '../../components/ProfileHeader';
import ScrollContainer from '../../components/ContentWrapper/ScrollContainer';

const ManageScreen = () => {
  return (
    <RelativeContainer>
      <ScrollContainer>
        <ProfileHeader />
        <Profile />
      </ScrollContainer>
    </RelativeContainer>
  );
};

export default ManageScreen;

const RelativeContainer = styled.View`
  flex: 1;
`;
