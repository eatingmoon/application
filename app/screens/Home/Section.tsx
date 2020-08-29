import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import styled from 'styled-components/native';

interface ISection {
  children?: React.ReactNode;
  name?: string;
  style?: StyleProp<ViewStyle>;
}

export default ({
  children,
  name,
  style = {},
}: ISection) => null;
