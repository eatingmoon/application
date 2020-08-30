import React from 'react';
import { SvgXml } from 'react-native-svg';
import styled from 'styled-components/native';

import plusIconSvg from '../../assets/round-plus.svg';

export default ({ onPress }: { onPress?: () => void }) => {
  return (
    <TouchableWrapper onPress={onPress}>
      <Container>
        <PlusIcon />
      </Container>
    </TouchableWrapper>
  );
};

const TouchableWrapper = styled.TouchableWithoutFeedback`
`;

const Container = styled.View`
  width: 85px;
  height: 80px;
  margin-right: 9px;
  border: 1px solid #999;
  justify-content: center;
  align-items: center;
`;

const PlusIcon = styled(SvgXml).attrs({
  width: 37,
  height: 37,
  color: '#999',
  xml: plusIconSvg,
})`
`;
