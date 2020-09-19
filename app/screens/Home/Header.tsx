import React from 'react';
import styled from 'styled-components/native';
import { SvgXml } from 'react-native-svg';

import { screenWidth } from '../../utils/screenSize';

import logoImage from '../../assets/logo.png';
import notificationIconSvg from '../../assets/notification.svg';

export default () => {
  return (
    <Container>
      <Dummy />
      <LogoImage
        source={logoImage}
      />
      <TouchableWrapper>
        <IconWrapper>
          <NotificationIcon />
        </IconWrapper>
      </TouchableWrapper>
    </Container>
  );
};

const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 29.3px 0;
  margin: 0 auto;
  width: ${screenWidth * 0.9}px;
`;

const Dummy = styled.View`
  height: 45.11px;
  width: 45.11px;
`;

const LogoImage = styled.Image`
  width: 46px;
  height: 44.9px;
`;

const TouchableWrapper = styled.TouchableWithoutFeedback`
`;

const IconWrapper = styled.View`
  padding: 10px;
`;

const NotificationIcon = styled(SvgXml).attrs({
  width: 22.1,
  height: 25.11,
  color: '#ac92ec',
  xml: notificationIconSvg,
})`
`;
