import React from 'react';
import styled from 'styled-components/native';

import SearchItem from './SearchItem';
import { screenWidth } from '../../../utils/screenSize';

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
            style={(index !== exampleSearchItems.length - 1) && {
              borderBottomWidth: 2,
              borderBottomColor: 'rgba(122, 92, 197, 0.1)',
            }}
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
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: rgba(122, 92, 197, 0.43);
  align-items: center;
`;

const Header = styled.View`
  width: ${screenWidth * 0.9}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 16.5px;
  padding-bottom: 4.5px;
  border-bottom-width: 0.5px;
  border-bottom-color: rgba(122, 92, 197, 0.43);
`;

const HeaderTitle = styled.Text`
  align-self: flex-start;
  font-weight: bold;
  font-size: 20px;
  line-height: ${20 * 1.2}px;
  color: #000000;
`;

const TouchableWrapper = styled.TouchableOpacity`
`;

const HeaderMoreButton = styled.Text`
  align-self: flex-start;
  font-size: 18px;
  line-height: ${18 * 1.22}px;
  color: #7a5cc5;
`;

const SearchItemList = styled.View`
  padding-top: 13.4px;
  padding-bottom: 13.6px;
`;
