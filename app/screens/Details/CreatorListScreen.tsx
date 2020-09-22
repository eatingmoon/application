import React from 'react';
import styled from 'styled-components/native';

import DetailHeader from './DetailHeader';
import ScrollContainer from '../../components/ContentWrapper/ScrollContainer';
import CreatorItem from '../../components/CreatorList/CreatorItem';

import { screenWidth } from '../../utils/screenSize';

const creatorItems = [...Array(10)];

const CreatorList: React.FC = () => {
  return (
    <RelativeContainer>
      <ScrollContainer>
        <DetailHeader
          title="내가 구독한 아티스트"
          isBottomPaddingRemoved
        />
        <CreatorItemList>
          {creatorItems.map((_, index) => (
            <CreatorItem
              key={`creator-${index}`}
              temporaryIndex={index}
              isTopDividerRemoved={!index}
            />
          ))}
        </CreatorItemList>
      </ScrollContainer>
    </RelativeContainer>
  );
};

export default CreatorList;

const RelativeContainer = styled.View`
  flex: 1;
`;

const CreatorItemList = styled.View`
  width: ${screenWidth * 0.81}px;
  margin-top: 10px;
  margin-bottom: 21.5px;
`;
