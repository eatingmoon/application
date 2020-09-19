import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SvgXml } from 'react-native-svg';
import styled from 'styled-components/native';

import { screenWidth } from '../../utils/screenSize';
import leftIconSvg from '../../assets/left.svg';

const Header = () => {
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
    </Container>
  );
};

export default Header;

const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 29.3px 0;
  margin: 0 auto;
  width: ${screenWidth * 0.9}px;
`;

const TouchableWrapper = styled.TouchableWithoutFeedback`
`;

const IconWrapper = styled.View`
  padding: 10px;
`;

const LeftIcon = styled(SvgXml).attrs({
  width: 15,
  height: 15,
  color: '#7A5CC5',
  xml: leftIconSvg,
})`
`;
