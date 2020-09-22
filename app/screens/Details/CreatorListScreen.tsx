import React from 'react';
import styled from 'styled-components/native';

import DetailHeader from './DetailHeader';
import ScrollContainer from '../../components/ContentWrapper/ScrollContainer';
import CreatorItem from '../../components/CreatorList/CreatorItem';

const creatorItems = [...Array(10)];

const CreatorList: React.FC = () => {
  return (
    <RelativeContainer>
      <ScrollContainer>
        <DetailHeader
          title="내가 구독한 아티스트"
        />
        {creatorItems.map((_, index) => (
          <CreatorItem
            key={`creator-${index}`}
            temporaryIndex={index}
          />
        ))}
      </ScrollContainer>
    </RelativeContainer>
  );
};

export default CreatorList;

const RelativeContainer = styled.View`
  flex: 1;
`;
