import React from 'react';
import styled from 'styled-components/native';

import DetailHeader from './DetailHeader';
import ScrollContainer from '../../components/ContentWrapper/ScrollContainer';
import ExhibitionCard from '../../components/ExhibitionCard';

const exhibitionItems = Array(3).fill({
  title: '꽃을 그리다',
  description: '몽글몽글한 색감들로\n당신의 꿈을 그립니다.',
  creatorName: '이민주',
  date: '2020.07.01',
  image: { uri: 'https://images.unsplash.com/photo-1600683712885-55d9d9a5aa96?auto=format&fit=crop&w=1234&q=80' },
});

const ExhibitionList: React.FC = () => {
  return (
    <RelativeContainer>
      <ScrollContainer>
        <DetailHeader>
          최근에 본 전시회
        </DetailHeader>
        {exhibitionItems.map((exhibition, index) => (
          <ExhibitionCard
            key={`exhibition-${index}`}
            {...exhibition}
          />
        ))}
      </ScrollContainer>
    </RelativeContainer>
  );
};

export default ExhibitionList;

const RelativeContainer = styled.View`
  flex: 1;
`;
