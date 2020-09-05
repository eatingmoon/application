import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import styled from 'styled-components/native';

interface IFormButton {
  children?: React.ReactNode;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

export default ({
  children,
  onPress,
  style = {},
}: IFormButton) => {
  return (
    <ButtonWrapper>
      <TouchableWrapper
        onPress={onPress}
      >
        <ButtonContainer
          style={style}
        >
          <ButtonText>
            {children}
          </ButtonText>
        </ButtonContainer>
      </TouchableWrapper>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.View`
  width: 90%;
  margin: 0 auto;
  margin-top: 118.5px;
  margin-bottom: 61px;
`;

const TouchableWrapper = styled.TouchableWithoutFeedback`
`;

const ButtonContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #7a5cc5;
  height: 56px;
`;

const ButtonText = styled.Text`
  font-weight: bold;
  font-size: 18px;
  line-height: ${18 * 1.2}px;
  color: white;
`;
