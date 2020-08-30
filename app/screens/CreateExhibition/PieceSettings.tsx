import React from 'react';
import styled from 'styled-components/native';

import PieceItem from './PieceItem';
import Button from '../../components/Button';
import { screenWidth } from '../../utils/screenSize';

export default () => {
  return (
    <Container>
      <TopList>
        <PieceItem index={1} />
        <PieceItem index={2} />
        <PieceItem index={3} />
      </TopList>
      <Wrapper>
        <PieceContainer>
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
  width: ${screenWidth * 0.8}px;
`;

const Wrapper = styled.View`
  width: 100%;
  align-items: center;
  height: 600px;
`;

const PieceContainer = styled.View`
  background-color: #EEE9E6;
  position: relative;
  height: 400px;
  width: ${screenWidth}px;
`;

const BottomButton = styled(Button)`
  font-weight: bold;
  font-size: 20px;
  line-height: 1.2;
  color: #ffffff;
  margin-top: 38px;
  padding: 16px 0;
  width: ${screenWidth * 0.8}px;
`;
