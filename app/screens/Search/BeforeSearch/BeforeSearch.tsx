import React from 'react';
import styled from 'styled-components/native';

import RecentContainer from './RecentContainer';
import TagContainer from './TagContainer';
import { screenWidth } from '../../../utils/screenSize';

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
  width: ${screenWidth * 0.9}px;
`;
