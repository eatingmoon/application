import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import styled, { css } from 'styled-components/native';

interface IPrimary {
  isPrimary?: boolean;
}

interface IBiggerText {
  isBiggerText?: boolean;
}

interface IButton extends IPrimary, IBiggerText {
  children?: React.ReactNode;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

export default ({
  children,
  onPress,
  style = {},
  isPrimary = false,
  isBiggerText = false,
}: IButton) => {
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
          isBiggerText={isBiggerText}
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
  border: solid 2px #7a5cc5;
  width: 100%;
  padding: 17px 0;

  ${({ isPrimary = false }) => isPrimary && css`
    background-color: #7a5cc5;
  `};
`;

const ButtonText = styled.Text<IPrimary & IBiggerText>`
  font-weight: bold;
  font-size: 15px;
  line-height: ${15 * 1.2}px;
  color: #7a5cc5;

  ${({ isPrimary = false }) => isPrimary && css`
    color: white;
  `};

  ${({ isBiggerText = false }) => isBiggerText && css`
    font-size: 25px;
    line-height: ${25 * 1.2}px;
  `};
`;
