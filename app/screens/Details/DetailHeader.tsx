import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SvgXml } from 'react-native-svg';
import styled from 'styled-components/native';

import { screenWidth } from '../../utils/screenSize';
import leftIconSvg from '../../assets/left.svg';

const Header: React.FC = ({ children }) => {
  const navigation = useNavigation();

  return (
    <Container>
      <IconWrapper>
        <TouchableWrapper
          onPress={() => navigation.goBack()}
        >
          <LeftIcon />
        </TouchableWrapper>
      </IconWrapper>
      <Text>{children}</Text>
    </Container>
  );
};

export default Header;

const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 25px;
  padding-bottom: 39px;
  margin: 0 auto;
  width: ${screenWidth * 0.81}px;
`;

const TouchableWrapper = styled.TouchableWithoutFeedback`
`;

const IconWrapper = styled.View`
  margin-right: 13px;
`;

const LeftIcon = styled(SvgXml).attrs({
  width: 15,
  height: 15,
  color: '#7A5CC5',
  xml: leftIconSvg,
})`
`;

const Text = styled.Text`
  font-weight: 500;
  font-size: 20px;
  line-height: ${20 * 1.2}px;
  color: #000000;
`;
