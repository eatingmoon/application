import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import styled from 'styled-components/native';

import MoreButton from '../../components/MoreButton';

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
  <Container>
    <SectionHeader>
      <SectionTitle>
        {title}
      </SectionTitle>
      <MoreButton />
    </SectionHeader>
  </Container>
);

const Container = styled.View`
`;

const SectionHeader = styled.View`
`;

const SectionTitle = styled.Text`
`;
