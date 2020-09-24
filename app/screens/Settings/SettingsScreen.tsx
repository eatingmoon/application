import React from 'react';
import styled from 'styled-components/native';

import ScrollContainer from '../../components/ContentWrapper/ScrollContainer';
import Header from '../../components/BasicHeader';

export default () => {
  return (
    <RelativeContainer>
      <ScrollContainer>
        <Header>
          설정
        </Header>
      </ScrollContainer>
    </RelativeContainer>
  );
};

const RelativeContainer = styled.View`
  flex: 1;
`;
