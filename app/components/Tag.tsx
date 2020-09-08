import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import styled from 'styled-components/native';

interface ITag {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
}

const Tag: React.FC<ITag> = ({ style, children }) => {
  return (
    <Container
      style={style}
    >
      <Text>{children}</Text>
    </Container>
  );
};

export default Tag;

const Container = styled.View`
  background-color: #7a5cc5;
  padding: 4px 10px;
  border-radius: 12px;
`;

const Text = styled.Text`
  font-size: 13px;
  line-height: ${13 * 1.23}px;
  color: #f6f6f6;
`;
