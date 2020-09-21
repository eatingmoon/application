import React from 'react';
import styled from 'styled-components/native';

import SearchSection from './SearchSection';

interface IAfterSearch {}

const AfterSearch: React.FC<IAfterSearch> = () => {
  return (
    <Container>
      <SearchSection
        title="전시회"
      />
      <SearchSection
        title="작품"
      />
    </Container>
  );
};

export default AfterSearch;

const Container = styled.View`
  width: 100%;
`;
