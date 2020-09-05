import React from 'react';
import styled from 'styled-components/native';
import { StyleProp, ViewStyle } from 'react-native';

interface ITextButton {
  children?: React.ReactNode;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

export default ({ children, onPress, style }: ITextButton) => {
  return (
    <ViewWrapper
      style={style}
    >
      <TouchableWrapper
        onPress={onPress}
      >
        <TextContainer>
          {children}
        </TextContainer>
      </TouchableWrapper>
    </ViewWrapper>
  );
};

const ViewWrapper = styled.View`
  margin: 0 auto;
`;

const TouchableWrapper = styled.TouchableWithoutFeedback`
`;

const TextContainer = styled.Text`
  font-size: 15px;
  font-weight: bold;
  line-height: ${15 * 1.2}px;
  color: #ffffff;
  border-bottom-width: 2px;
  border-bottom-color: #ffffff;
`;
