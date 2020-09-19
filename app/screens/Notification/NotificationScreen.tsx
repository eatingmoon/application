import React from 'react';
import styled from 'styled-components/native';

import Header from './Header';
import ScrollContainer from '../../components/ContentWrapper/ScrollContainer';

const NotificationScreen = () => {
  return (
    <RelativeContainer>
      <ScrollContainer>
        <Header />
      </ScrollContainer>
    </RelativeContainer>
  );
};

export default NotificationScreen;

const RelativeContainer = styled.View`
  flex: 1;
`;
