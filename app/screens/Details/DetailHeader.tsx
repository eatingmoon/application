import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SvgXml } from 'react-native-svg';
import styled from 'styled-components/native';

import { screenWidth } from '../../utils/screenSize';
import leftIconSvg from '../../assets/left.svg';

interface IHeader {
  title: string;
  description?: string;
}

const Header: React.FC<IHeader> = ({ title, description }) => {
  const navigation = useNavigation();

  return (
    <Container
      style={{
        paddingTop: description ? 30 : 25,
        alignItems: description ? 'flex-start' : 'center',
      }}
    >
      <IconWrapper
        style={{
          marginTop: description ? 3 : 0,
        }}
      >
        <TouchableWrapper
          onPress={() => navigation.goBack()}
        >
          <LeftIcon />
        </TouchableWrapper>
      </IconWrapper>
      <HeaderTextWrapper>
        <HeaderTitle>{title}</HeaderTitle>
        {description && (
          <HeaderDescription>{description}</HeaderDescription>
        )}
      </HeaderTextWrapper>
    </Container>
  );
};

export default Header;

const Container = styled.View`
  display: flex;
  flex-direction: row;
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

const HeaderTextWrapper = styled.View`
`;

const HeaderTitle = styled.Text`
  font-weight: 500;
  font-size: 20px;
  line-height: ${20 * 1.2}px;
  color: #000000;
`;

const HeaderDescription = styled.Text`
  font-size: 13px;
  line-height: ${13 * 1.23}px;
  color: #929292;
`;
