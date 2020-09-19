import React from 'react';
import styled from 'styled-components/native';

import Profile from './Profile';

import ProfileHeader from '../../components/ProfileHeader';
import ScrollContainer from '../../components/ContentWrapper/ScrollContainer';
import Section from '../../components/Section';
import ExhibitionList from '../../components/ExhibitionList';

const ManageScreen = () => {
  return (
    <RelativeContainer>
      <ScrollContainer>
        <ProfileHeader />
        <Profile />
        <StyledSection
          title="업로드한 전시회 목록"
        >
          <ExhibitionList />
        </StyledSection>
        <StyledSection
          title="업로드한 작품 목록"
        >
          <ExhibitionList />
        </StyledSection>
      </ScrollContainer>
    </RelativeContainer>
  );
};

export default ManageScreen;

const RelativeContainer = styled.View`
  flex: 1;
`;

const StyledSection = styled(Section)`
  margin-bottom: 36.6px;
`;
