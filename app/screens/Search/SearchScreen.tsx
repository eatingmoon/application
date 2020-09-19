import React from 'react';
import styled from 'styled-components/native';

import ScrollContainer from '../../components/ContentWrapper/ScrollContainer';

const SearchScreen = () => {
  return (
    <RelativeContainer>
      <ScrollContainer>
      </ScrollContainer>
    </RelativeContainer>
  );
};

export default SearchScreen;

const RelativeContainer = styled.View`
  flex: 1;
`;
