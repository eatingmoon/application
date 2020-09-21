import React from 'react';
import styled from 'styled-components/native';

interface IBeforeSearch {}

const BeforeSearch: React.FC<IBeforeSearch> = () => {
  return (
    <Container>
      <RecentContainer />
      <TagContainer />
    </Container>
  );
};

export default BeforeSearch;

const Container = styled.View`
`;
