import React from 'react';
import { SvgXml } from 'react-native-svg';

import styled from 'styled-components/native';

interface ITabItem {
  icon: string;
  isSelected?: boolean;
  onPress?: () => void;
}

const TabItem: React.FC<ITabItem> = ({ icon, isSelected = false, onPress }) => {
  return (
    <TouchableWrapper
      onPress={onPress}
    >
      <Container>
        <Icon
          width={31}
          height={31}
          xml={icon}
          color={isSelected ? '#7A5CC5' : '#808080'}
        />
      </Container>
    </TouchableWrapper>
  );
};

export default TabItem;

const TouchableWrapper = styled.TouchableWithoutFeedback`
`;

const Container = styled.View`
  width: 20%;
  align-items: center;
`;

const Icon = styled(SvgXml)`
`;
