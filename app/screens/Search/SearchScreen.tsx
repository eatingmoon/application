import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';

import ScrollContainer from '../../components/ContentWrapper/ScrollContainer';
import AfterSearch from './AfterSearch';
import NoResult from './NoResult';
import SearchHeader from './SearchHeader';

const SearchScreen = () => {
  const [query, setQuery] = useState<string>('');

  const isNoResult = true;

  if (isNoResult) {
    return (
      <RelativeContainer>
        <SearchHeader
          query={query}
          onChangeQuery={setQuery}
        />
        <NoResult />
      </RelativeContainer>
    );
  }

  return (
    <RelativeContainer>
      <ScrollContainer>
        <SearchHeader
          query={query}
          onChangeQuery={setQuery}
        />
        <AfterSearch />
      </ScrollContainer>
    </RelativeContainer>
  );
};

export default SearchScreen;

const RelativeContainer = styled.View`
  flex: 1;
`;
