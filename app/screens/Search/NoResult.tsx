import React from 'react';
import styled from 'styled-components/native';

const NoResult: React.FC = () => (
  <Wrapper>
    <Container>
      <Title>
        결과 없음
      </Title>
      <Subtitle>
        검색 결과가 없습니다.{'\n'}
        다른 검색어로 시도해 보십시오.
      </Subtitle>
    </Container>
  </Wrapper>
);

export default NoResult;

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Container = styled.View`
  margin-bottom: 14%;
`;

const Title = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  line-height: ${30 * 1.2}px;
  color: #000000;
  margin-bottom: 5px;
`;

const Subtitle = styled.Text`
  text-align: center;
  font-size: 20px;
  line-height: ${20 * 1.2}px;
  color: #000000;
`;
