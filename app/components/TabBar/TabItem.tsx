import React from 'react';
import { SvgXml as Icon } from 'react-native-svg';

import styled from 'styled-components/native';

interface ITabItem {
  icon: string;
  size?: number;
  isSelected?: boolean;
  onPress?: () => void;
}

const TabItem: React.FC<ITabItem> = ({ icon, size = 31, isSelected = false, onPress }) => {
  return (
    <TouchableWrapper
      onPress={onPress}
    >
      <Container>
        {isSelected && (
          <SelectedBarWrapper>
            <SelectedBar />
          </SelectedBarWrapper>
        )}
        <Icon
          width={size}
          height={size}
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
  justify-content: center;
  position: relative;
  padding-top: 21px;
`;

const SelectedBarWrapper = styled.View`
  width: 100%;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

const SelectedBar = styled.View`
  height: 2px;
  width: 30px;
  background-color: #7A5CC5;
  border-radius: 1px;
`;
