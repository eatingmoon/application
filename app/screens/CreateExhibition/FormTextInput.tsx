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
        value={value}
        onChangeText={onChangeText}
        style={style}
        {...props}
      />
    </Wrapper>
  );
};

const Wrapper = styled.View`
  margin-bottom: 24px;
`;

const Field = styled.Text`
  width: ${screenWidth * 0.8}px;
  margin-bottom: 5px;
  font-size: 18px;
  line-height: ${18 * 1.22}px;
  color: #000000;
  font-weight: bold;
`;

const Input = styled.TextInput`
  border-radius: 11px;
  border: solid 1px #d4d4d4;
  background-color: #fcfcfc;
  font-size: 18px;
  line-height: ${18 * 1.22}px;
  color: #868e96;
  padding: 19px 14px;
  width: ${screenWidth * 0.8}px;
`;
