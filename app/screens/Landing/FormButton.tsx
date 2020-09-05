import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import styled, { css } from 'styled-components/native';

interface IPrimary {
  isPrimary?: boolean;
}

interface IFormButton extends IPrimary {
  children?: React.ReactNode;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

export default ({
  children,
  onPress,
  style = {},
  isPrimary = false,
}: IFormButton) => {
  return (
    <TouchableWrapper
      onPress={onPress}
    >
      <ButtonContainer
        style={style}
        isPrimary={isPrimary}
      >
        <ButtonText
          isPrimary={isPrimary}
        >
          {children}
        </ButtonText>
      </ButtonContainer>
    </TouchableWrapper>
  );
};

const TouchableWrapper = styled.TouchableWithoutFeedback`
  width: 100%;
`;

const ButtonContainer = styled.View<IPrimary>`
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: white;
  border-radius: 7px;
  height: 58px;

  ${({ isPrimary = false }) => isPrimary && css`
    background-color: #7a5cc5;
  `};
`;

const ButtonText = styled.Text<IPrimary>`
  font-weight: bold;
  font-size: 18px;
  line-height: ${18 * 1.2}px;
  color: #7a5cc5;

  ${({ isPrimary = false }) => isPrimary && css`
    color: white;
  `};
`;
