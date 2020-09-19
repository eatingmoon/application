import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import styled from 'styled-components/native';

import { screenWidth } from '../utils/screenSize';
import MoreButton from './MoreButton';

interface ISection {
  children?: React.ReactNode;
  title?: string;
  style?: StyleProp<ViewStyle>;
}

export default ({
  children,
  title,
  style = {},
}: ISection) => (
  <Container
    style={style}
  >
    <SectionHeader>
      <SectionTitle>
        {title}
      </SectionTitle>
      <MoreButton />
    </SectionHeader>
    {children}
  </Container>
);

const Container = styled.View`
  align-items: center;
  flex: 1;
`;

const SectionHeader = styled.View`
  flex-direction: row;
  width: ${screenWidth * 0.9}px;
  justify-content: space-between;
  margin-bottom: 22px;
`;

const SectionTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
  line-height: ${22 * 1.18}px;
  color: #000000;
`;
