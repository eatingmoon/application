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
`;

const Container = styled.View`
`;

const Title = styled.Text`
`;

const Subtitle = styled.Text`
`;
