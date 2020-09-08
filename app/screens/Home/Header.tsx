import React from 'react';
import styled from 'styled-components/native';
import { SvgXml } from 'react-native-svg';

import { screenWidth } from '../../utils/screenSize';

import logoImage from '../../assets/logo.png';
import menuIconSvg from '../../assets/menu.svg';
import searchIconSvg from '../../assets/search.svg';

export default () => {
  return (
    <Container>
      <TouchableIconContainer>
        <MenuIcon />
      </TouchableIconContainer>
      <LogoImage
        source={logoImage}
      />
      <TouchableIconContainer>
        <SearchIcon />
      </TouchableIconContainer>
    </Container>
  );
};

const Container = styled.View`
  display: flex;
  flex-direction: row;
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
  flex-direction: row;
  align-items: center;
`;

const TouchableIconContainer = styled.TouchableWithoutFeedback`
  width: 29.3px;
  height: 29.3px;
`;

const SearchIcon = styled(SvgXml).attrs({
  width: 18,
  height: 18,
  color: '#ac92ec',
  xml: searchIconSvg,
})`
`;

const MenuIcon = styled(SvgXml).attrs({
  width: 20,
  height: 20,
  color: '#ac92ec',
  xml: menuIconSvg,
})`
`;
