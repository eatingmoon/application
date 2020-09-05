import React from 'react';
import styled from 'styled-components/native';

import AuthHeader from './AuthHeader';
import ScrollContainer from '../ScrollContainer';

interface IAuthContainer {
  children?: React.ReactNode;
}

export default ({ children }: IAuthContainer) => {
  return (
    <ScrollContainer>
      <AuthHeader>
        회원가입(1/3)
      </AuthHeader>
      <Wrapper>
        <Container>
          <Title>
            이름과 함께{'\n'}
            널리에서 사용할{'\n'}
            아이디를{'\n'}
            정해주세요.
          </Title>
          <Description>
            여러분을 불러드릴 수 있게요.
          </Description>
        </Container>
      </Wrapper>
      {children}
    </ScrollContainer>
  );
};

const Wrapper = styled.View`
  width: 100%;
  align-items: center;
`;

const Container = styled.View`
  width: 90%;
  padding-bottom: 146px;
`;

const Title = styled.Text`
  margin-top: 30.4px;
  font-weight: 300;
  font-size: 32px;
  line-height: ${32 * 1.11}px;
  color: #343a40;
`;

const Description = styled.Text`
  font-weight: 500;
  font-size: 14px;
  line-height: ${14 * 3}px;
  color: #868e96;
`;
