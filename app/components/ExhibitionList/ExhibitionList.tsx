import React from 'react';
import styled from 'styled-components/native';

import ExhibitionItem from './ExhibitionItem';
import { screenWidth } from '../../utils/screenSize';

export default () => {
  return (
    <Container>
      <ExhibitionItem />
      <ExhibitionItem />
      <ExhibitionItem />
    </Container>
  );
};

const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingHorizontal: screenWidth * 0.05,
    flexDirection: 'row',
  },
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  flex-direction: row;
`;
