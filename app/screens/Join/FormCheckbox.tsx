import React from 'react';
import styled from 'styled-components/native';

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
    <TouchableWrapper>
      <Container>
        <Wrapper>
          <Field>{children}</Field>
          <Checkbox></Checkbox>
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

const Field = styled.Text`
  font-size: 17px;
  line-height: ${17 * 1.18}px;
  color: #373d42;
`;

const Checkbox = styled.View`
  width: 16px;
  height: 16px;
  border: solid 1px #373d42;
  background-color: #ffffff;
`;
