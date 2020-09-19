import React from 'react';
import styled from 'styled-components/native';

import Profile from './Profile';
import MenuItem from './MenuItem';
import menuData from './menuData';

import ProfileHeader from '../../components/ProfileHeader';
import ScrollContainer from '../../components/ContentWrapper/ScrollContainer';

const ProfileScreen = () => {
  return (
    <RelativeContainer>
      <ScrollContainer>
        <ProfileHeader />
        <Profile />
        <MenuList>
          {menuData.map((menu, index) => {
            return (
              <MenuItem
                key={`menu-item-${index}`}
                {...menu}
                isLastItem={index === menuData.length - 1}
              />
            );
          })}
        </MenuList>
      </ScrollContainer>
    </RelativeContainer>
  );
};

export default ProfileScreen;

const RelativeContainer = styled.View`
  flex: 1;
`;

const MenuList = styled.View`
`;
