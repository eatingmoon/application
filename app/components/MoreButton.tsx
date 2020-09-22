import React from 'react';
import { SvgXml } from 'react-native-svg';
import styled from 'styled-components/native';

import rightIconSvg from '../assets/right.svg';

interface IMoreButton {
  onPress?: () => void;
}

export default ({ onPress }: IMoreButton) => (
  <Container>
    <TouchableWrapper
      onPress={onPress}
    >
      <MoreText>
        더보기
      </MoreText>
    </TouchableWrapper>
    <MoreIcon />
  </Container>
);

const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

const TouchableWrapper = styled.TouchableWithoutFeedback`
`;

const MoreText = styled.Text`
  font-size: 14px;
  color: #7a5cc5;
  margin-right: 4.8px;
  font-weight: bold;
`;

const MoreIcon = styled(SvgXml).attrs({
  width: 5.2,
  height: 9.6,
  color: '#7a5cc5',
  xml: rightIconSvg,
})`
`;
