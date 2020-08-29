import React from 'react';
import styled from 'styled-components/native';

import { screenWidth } from '../../utils/screenSize';

import stoolImage from '../../assets/stool.png';

export default () => {
  return (
    <Container>
      <AbsoluteImage
        source={stoolImage}
      />
      <Text>
        널리와 함께,{'\n'}
        당신의 작품을 널리.
      </Text>
    </Container>
  );
};

const Container = styled.View`
  width: ${screenWidth * 0.9}px;
  height: 233px;
  position: relative;
  background-color: #7a5cc5;
  border-radius: 15px;
`;

const AbsoluteImage = styled.Image`
  position: absolute;
  top: 10.2px;
  right: -20px;
`;

const Text = styled.Text`
  position: absolute;
  left: 30px;
  bottom: 29px;
`;
