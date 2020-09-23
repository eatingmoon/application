import React from 'react';
import { SvgXml } from 'react-native-svg';
import styled from 'styled-components/native';

import { screenWidth } from '../utils/screenSize';

import leftIconSvg from '../assets/left.svg';

interface IBasicHeader {
  children?: React.ReactNode;
  onPressBack?: () => void;
}

export default ({ children, onPressBack }: IBasicHeader) => {
  return (
    <Wrapper>
      <Container>
        <IconWrapper>
          <TouchableWrapper
            onPress={onPressBack}
          >
            <IconContainer>
              <BackIcon />
            </IconContainer>
          </TouchableWrapper>
        </IconWrapper>
        <Title>
          {children}
        </Title>
        <Dummy />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  border-bottom-width: 2px;
  border-bottom-color: #a68be7;
  width: 100%;
  align-items: center;
`;

const Container = styled.View`
  width: ${screenWidth * 0.85}px;
  margin: 0 auto;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
`;

const Title = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #7a5cc5;
`;

const IconWrapper = styled.View`
  margin-left: 5px;
`;

const TouchableWrapper = styled.TouchableWithoutFeedback`
`;

const IconContainer = styled.View`
  padding: 7px;
`;

const BackIcon = styled(SvgXml).attrs({
  width: 10.1,
  height: 19.8,
  color: '#7a5cc5',
  xml: leftIconSvg,
})`
`;


const Dummy = styled.View`
  width: 10.1px;
  height: 19.8px;
`;
