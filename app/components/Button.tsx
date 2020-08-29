import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import styled, { css } from 'styled-components/native';

interface IPrimary {
  isPrimary?: boolean;
}

interface IButton extends IPrimary {
  children?: React.ReactNode;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

export default ({
  children,
  onPress,
  style = {},
  isPrimary = false,
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

const ButtonText = styled.Text<IPrimary>`
  font-weight: bold;
  font-size: 15px;
  line-height: ${15 * 1.2}px;
  color: #7a5cc5;

  ${({ isPrimary = false }) => isPrimary && css`
    color: white;
  `};
`;
