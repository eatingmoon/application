import React from 'react';
import styled from 'styled-components/native';

import ArtistItem from './ArtistItem';
import Divider from './Divider';

import { screenWidth } from '../../utils/screenSize';

export default () => {
  return (
    <Container>
      {[1, 2, 3].map((index) => (
        <ArtistItem
          key={`artist-${index}`}
          temporaryIndex={index}
        />
      ))}
      <Divider />
    </Container>
  );
};

const Container = styled.View`
  width: ${screenWidth * 0.9}px;
  margin-bottom: 21.5px;
`;
