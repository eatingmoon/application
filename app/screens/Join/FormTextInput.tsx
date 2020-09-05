import React from 'react';
import { StyleProp, ViewStyle, TextInputProps } from 'react-native';
import styled from 'styled-components/native';

import { screenWidth } from '../../utils/screenSize';

interface IFormTextInput extends TextInputProps {
  field?: string;
  placeholder?: string;
  value?: string;
  onChangeText?: (value: string) => void;
  style?: StyleProp<ViewStyle>;
}

export default ({ field, placeholder, value, onChangeText, style, ...props }: IFormTextInput) => {
  return (
    <Wrapper>
      {field && (
        <Field>
          {field}
        </Field>
      )}
      <Input
        placeholder={placeholder}
        placeholderTextColor="#868e96"
        value={value}
        onChangeText={onChangeText}
        style={style}
        {...props}
      />
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

const Input = styled.TextInput`
  font-size: 18px;
  font-weight: 300;
  line-height: ${18 * 1.22}px;
  color: #868e96;
  padding: 19px 14px;
  width: ${screenWidth * 0.9}px;
  border-radius: 11px;
  border: solid 1px #d4d4d4;
  background-color: #f5f5f5;
`;
