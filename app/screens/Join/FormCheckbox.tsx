import React from 'react';
import styled, { css } from 'styled-components/native';

import { screenWidth } from '../../utils/screenSize';

interface IsSelected {
  isSelected?: boolean;
}

interface IFormCheckbox extends IsSelected {
  children?: React.ReactNode;
  onChange?: () => void;
}

export default ({ children, isSelected = false, onChange }) => {
  return (
    <TouchableWrapper onPress={() => onChange(!isSelected)}>
      <Container>
        <Wrapper>
          <Field isSelected={isSelected}>{children}</Field>
          <Checkbox isSelected={isSelected}>
            {isSelected && (<CheckIcon source={require('../../assets/check.png')} />)}
          </Checkbox>
        </Wrapper>
      </Container>
    </TouchableWrapper>
  );
};

const TouchableWrapper = styled.TouchableWithoutFeedback`
`;

const Container = styled.View`
  width: ${screenWidth * 0.9}px;
  margin: 0 auto;
  margin-bottom: 7px;
`;

const Wrapper = styled.View`
  width: ${screenWidth * 0.48}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Field = styled.Text<IsSelected>`
  font-size: 17px;
  font-weight: bold;
  line-height: ${17 * 1.18}px;
  color: #868E96;

  ${({ isSelected }) => isSelected && css`
    color: #373d42;
  `};
`;

const Checkbox = styled.View<IsSelected>`
  width: 16px;
  height: 16px;
  border: solid 1px #D1D4D7;
  background-color: #ffffff;
  position: relative;

  ${({ isSelected }) => isSelected && css`
    border: solid 1px #373d42;
  `};
`;

const CheckIcon = styled.Image`
  width: 16px;
  height: 16px;
  position: absolute;
  bottom: 3px;
`;
