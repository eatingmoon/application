import React from 'react';
import { SvgXml } from 'react-native-svg';
import styled from 'styled-components/native';

import leftIconSvg from '../../assets/left.svg';

export default () => (
  <Container>
    <MoreText>
      더보기
    </MoreText>
    <MoreIcon />
  </Container>
);

const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

const MoreText = styled.Text`
  font-size: 14px;
  color: #7a5cc5;
  margin-right: 9.8px;
`;

const MoreIcon = styled(SvgXml).attrs({
  width: 5.2,
  height: 9.6,
  color: '#7a5cc5',
  xml: leftIconSvg,
})`
`;
