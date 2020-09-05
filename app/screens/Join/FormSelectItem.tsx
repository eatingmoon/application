import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import styled, { css } from 'styled-components/native';

import { screenWidth } from '../../utils/screenSize';

interface IsSelected {
  isSelected?: boolean;
}

interface IFormSelectItem extends IsSelected {
  children?: React.ReactNode;
  value: string;
  onPress: (value: string) => void;
  style?: StyleProp<ViewStyle>;
}

export default ({ children, value, onPress, isSelected = false, style }: IFormSelectItem) => {
  return (
    <Wrapper>
      <TouchableWrapper
        onPress={() => onPress(value)}
        style={style}
      >
        <Container
          isSelected={isSelected}
        >
          <Text
            isSelected={isSelected}
          >
            {children}
          </Text>
        </Container>
      </TouchableWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.View`
`;

const TouchableWrapper = styled.TouchableWithoutFeedback`
`;

const Container = styled.View<IsSelected>`
  width: ${(screenWidth * 0.9 - 14) / 2}px;
  height: 58px;
  border-radius: 30px;
  background-color: #fdfdfd;
  align-items: center;
  justify-content: center;
  elevation: 6;

  /* todo: gradient */
  ${({ isSelected }) => isSelected && css`
    background-color: #7A5CC5;
  `}
`;

const Text = styled.Text<IsSelected>`
  font-weight: bold;
  font-size: 18px;
  line-height: ${18 * 1.22}px;
  color: #868e96;

  ${({ isSelected }) => isSelected && css`
    color: #fff;
  `}
`;
