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
        placeholderTextColor="#FFF"
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
  color: #ffffff;
  font-weight: bold;
`;

const Input = styled.TextInput`
  border: solid 1px #ffffff;
  background-color: #ac92ec;
  font-size: 18px;
  font-weight: 300;
  line-height: ${18 * 1.22}px;
  color: #ffffff;
  padding: 19px 14px;
  width: ${screenWidth * 0.9}px;
  border-radius: 8px;
`;
