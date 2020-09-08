import React from 'react';
import { SvgXml } from 'react-native-svg';
import styled from 'styled-components/native';

import leftIconSvg from '../assets/left.svg';

interface IAuthHeader {
  children?: React.ReactNode;
  onPressBack?: () => void;
}

export default ({ children, onPressBack }: IAuthHeader) => {
  return (
    <Wrapper>
      <Container>
        <TouchableWrapper
          onPress={onPressBack}
        >
          <BackIcon />
        </TouchableWrapper>
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
  width: 90%;
  margin: 0 auto;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15.6px 0;
`;

const Title = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #7a5cc5;
`;

const TouchableWrapper = styled.TouchableWithoutFeedback`
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
