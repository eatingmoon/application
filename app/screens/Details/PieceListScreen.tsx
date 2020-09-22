import React from 'react';
import styled from 'styled-components/native';

import DetailHeader from './DetailHeader';
import ScrollContainer from '../../components/ContentWrapper/ScrollContainer';
import PieceCard from '../../components/PieceCard';

import { screenWidth } from '../../utils/screenSize';

const pieceItems = [
  {
    image: { uri: 'https://images.unsplash.com/photo-1561172355-735ee501d7e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80' },
    title: '귀여운 동물들의 일러스트 대작전',
  },
  {
    image: { uri: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2300&q=80' },
    title: '개발자에게 스시를 주다',
  },
  {
    image: { uri: 'https://images.unsplash.com/photo-1571329388540-0b4c611bb06b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2555&q=80' },
    title: '광덕산도 식후경',
  },
];

const PieceList: React.FC = () => {
  return (
    <RelativeContainer>
      <ScrollContainer>
        <DetailHeader>
          내가 좋아하는 작품
        </DetailHeader>
        <PieceCardList>
          {pieceItems.map((Piece, index) => (
            <PieceCard
              key={`Piece-${index}`}
              {...Piece}
            />
          ))}
        </PieceCardList>
      </ScrollContainer>
    </RelativeContainer>
  );
};

export default PieceList;

const RelativeContainer = styled.View`
  flex: 1;
`;

const PieceCardList = styled.View`
  width: 100%;
  flex-wrap: wrap;
  width: ${screenWidth * 0.81}px;
  flex-direction: row;
  justify-content: space-between;
`;
