import React from 'react';
import styled from 'styled-components/native';
import { SvgXml } from 'react-native-svg';

import { screenWidth } from '../../utils/screenSize';

import logoImage from '../../assets/logo.png';
import profileIconSvg from '../../assets/profile.svg';
import searchIconSvg from '../../assets/search.svg';

export default () => {
  return (
    <Container>
      <LogoImage
        source={logoImage}
      />
      <IconList>
        <TouchableIconContainer
          style={{ marginRight: 7.9 }}
        >
          <SearchIcon />
        </TouchableIconContainer>
        <TouchableIconContainer>
          <ProfileIcon />
        </TouchableIconContainer>
      </IconList>
    </Container>
  );
};

const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32.5px 0;
  margin: 0 auto;
  width: ${screenWidth * 0.9}px;
`;

const LogoImage = styled.Image`
  width: 46px;
  height: 44.9px;
`;

const IconList = styled.View`
  display: flex;
  align-items: center;
`;

const TouchableIconContainer = styled.TouchableWithoutFeedback`
  width: 29.3px;
  height: 29.3px;
`;

const SearchIcon = styled(SvgXml).attrs({
  width: 17.28,
  height: 15.62,
  color: '#ac92ec',
  xml: searchIconSvg,
})`
`;

const ProfileIcon = styled(SvgXml).attrs({
  width: 29.3,
  height: 29.3,
  color: '#ac92ec',
  xml: profileIconSvg,
})`
`;
