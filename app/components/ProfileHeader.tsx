import { useNavigation } from '@react-navigation/native';
import React from 'react';
import styled from 'styled-components/native';
import { SvgXml } from 'react-native-svg';

import { screenWidth } from '../utils/screenSize';

import logoImage from '../assets/logo.png';
import leftIconSvg from '../assets/left.svg';

export default () => {
  const navigation = useNavigation();

  return (
    <Container>
      <TouchableWrapper
        onPress={() => navigation.goBack()}
      >
        <IconWrapper>
          <LeftIcon />
        </IconWrapper>
      </TouchableWrapper>
      <LogoImage
        source={logoImage}
      />
      <Dummy />
    </Container>
  );
};

const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16.2px 0;
  margin: 0 auto;
  width: ${screenWidth * 0.9}px;
`;

const Dummy = styled.View`
  height: 45.11px;
  width: 45.11px;
  margin-right: ${screenWidth * 0.025}px;
`;

const LogoImage = styled.Image`
  width: 37.78px;
  height: 36.89px;
`;

const TouchableWrapper = styled.TouchableWithoutFeedback`
`;

const IconWrapper = styled.View`
  padding: 10px;
  margin-left: ${screenWidth * 0.025}px;
`;

const LeftIcon = styled(SvgXml).attrs({
  width: 15,
  height: 15,
  color: '#7A5CC5',
  xml: leftIconSvg,
})`
`;
