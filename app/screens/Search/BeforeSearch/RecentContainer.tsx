import React from 'react';
import styled from 'styled-components/native';

import ContainerWrapper from './ContainerWrapper';
import ContainerTitle from './ContainerTitle';
import RecentItem from './RecentItem';

interface IRecentContainer {}

const RecentContainer: React.FC<IRecentContainer> = () => {
  return (
    <ContainerWrapper>
      <ContainerTitle>
        최근 검색어
      </ContainerTitle>
      <RecentItemList>
        {exampleRecentSearchItems.map((item, index) => (
          <RecentItem
            key={`recent-item-${index}`}
            query={item}
            onPressCancel={() => {}}
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
