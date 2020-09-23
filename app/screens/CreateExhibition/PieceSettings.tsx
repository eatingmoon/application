import React from 'react';
import styled from 'styled-components/native';

import PieceItem from './PieceItem';
import PieceViewer from './PieceViewer';
import CreatePieceButton from './CreatePieceButton';
import Button from '../../components/Button';
import { screenWidth } from '../../utils/screenSize';

export default () => {
  return (
    <Container>
      <TopList>
        <CreatePieceButton />
        <PieceItem index={1} />
        <PieceItem index={2} />
      </TopList>
      <Wrapper>
        <PieceContainer>
          <PieceViewer />
        </PieceContainer>
        <BottomButton isPrimary>
          작품 설정 시작하기
        </BottomButton>
      </Wrapper>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`;

const TopList = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  width: ${screenWidth}px;
  padding-left: 20px;
  margin-top: 10px;
  margin-bottom: 18px;
`;

const Wrapper = styled.View`
  width: 100%;
  align-items: center;
  height: 610px;
`;

const PieceContainer = styled.View`
  background-color: #EEE9E6;
  position: relative;
  width: ${screenWidth}px;
  height: ${screenWidth}px;
  align-items: center;
  justify-content: center;
`;

const BottomButton = styled(Button).attrs({
  textStyle: {
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 20 * 1.2,
  },
})`
  margin-top: 20px;
  padding: 16px 0;
  width: ${screenWidth * 0.85}px;
`;
