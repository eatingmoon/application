import React from 'react';
import styled from 'styled-components/native';

import ContainerWrapper from './ContainerWrapper';
import ContainerTitle from './ContainerTitle';
import RecentItem from './RecentItem';

interface IRecentContainer {}

const RecentContainer: React.FC<IRecentContainer> = () => {
  return (
    <ContainerWrapper
      style={{ marginTop: 19.5 }}
    >
      <ContainerTitle
        style={{ marginBottom: 15.9 }}
      >
        최근 검색어
      </ContainerTitle>
      <RecentItemList>
        {exampleRecentSearchItems.map((item, index) => (
          <RecentItem
            key={`recent-item-${index}`}
            query={item}
            onPressCancel={() => {}}
            style={(index !== exampleRecentSearchItems.length - 1) && {
              borderBottomWidth: 2,
              borderBottomColor: 'rgba(122, 92, 197, 0.1)',
            }}
          />
        ))}
      </RecentItemList>
    </ContainerWrapper>
  );
};

export default RecentContainer;

const exampleRecentSearchItems = ['권순재', '김세령', '이승민', '이수호'];

const RecentItemList = styled.View`
`;
