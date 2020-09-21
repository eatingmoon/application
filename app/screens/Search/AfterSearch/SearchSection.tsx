import React from 'react';
import styled from 'styled-components/native';

import SearchItem from './SearchItem';

interface ISearchSection {
  title: string;
}

const SearchSection: React.FC<ISearchSection> = ({ title }) => {
  return (
    <Wrapper>
      <Header>
        <HeaderTitle>
          {title}
        </HeaderTitle>
        <TouchableWrapper>
          <HeaderMoreButton>
            모두 보기
          </HeaderMoreButton>
        </TouchableWrapper>
      </Header>
      <SearchItemList>
        {exampleSearchItems.map((item, index) => (
          <SearchItem
            key={`search-item-${index}`}
            {...item}
          />
        ))}
      </SearchItemList>
    </Wrapper>
  );
};

export default SearchSection;

const exampleSearchItems = Array(3).fill({
  image: { uri: 'https://images.unsplash.com/photo-1518526157563-b1ee37a05129?auto=format&fit=crop&w=2550&q=80' },
  title: '김밥 먹는 여우',
  creatorName: '김세령',
  date: '2020.08.25',
});

const Wrapper = styled.View`
`;

const Header = styled.View`
`;

const HeaderTitle = styled.Text`
`;

const TouchableWrapper = styled.TouchableOpacity`
`;

const HeaderMoreButton = styled.Text`
`;

const SearchItemList = styled.View`
`;
