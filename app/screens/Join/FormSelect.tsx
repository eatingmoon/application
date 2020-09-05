import React from 'react';
import { StyleProp, ViewStyle, TextInputProps } from 'react-native';
import styled from 'styled-components/native';

import FormSelectItem from './FormSelectItem';
import { screenWidth } from '../../utils/screenSize';

interface IFormTextInput extends TextInputProps {
  field?: string;
  placeholder?: string;
  value?: string;
  onChange: (value: string) => void;
  style?: StyleProp<ViewStyle>;
  items?: { field: string; value: string }[];
}

export default ({ field, placeholder, value, onChange, style, items = [], ...props }: IFormTextInput) => {
  return (
    <Wrapper>
      {field && (
        <Field>
          {field}
        </Field>
      )}
      <SelectWrapper>
        {items.map((item) => (
          <FormSelectItem
            value={item.value}
            onPress={() => onChange(item.value)}
            isSelected={value === item.value}
          >
            {item.field}
          </FormSelectItem>
        ))}
      </SelectWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  margin-bottom: 15px;
`;

const Field = styled.Text`
  width: ${screenWidth * 0.9}px;
  margin-bottom: 5px;
  font-size: 18px;
  font-weight: 300;
  line-height: ${18 * 1.22}px;
  color: #000000;
  font-weight: bold;
`;

const SelectWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
