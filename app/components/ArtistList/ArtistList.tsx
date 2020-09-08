import React from 'react';
import styled from 'styled-components/native';

import ArtistItem from './ArtistItem';

export default () => {
  return (
    <Container>
      <ArtistItem />
      <ArtistItem />
      <ArtistItem />
    </Container>
  );
};

const Container = styled.View`
`;
