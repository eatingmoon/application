import { useRoute } from '@react-navigation/native';
import React from 'react';
import { WebView } from 'react-native-webview';
import styled from 'styled-components/native';

import ScrollContainer from '../../components/ContentWrapper/ScrollContainer';
import Header from '../../components/BasicHeader';

export default () => {
  const { params: { title = '', uri = '' } } = useRoute<any>();

  return (
    <RelativeContainer>
      <ScrollContainer>
        <Header>
          {title}
        </Header>
        <WebView source={{ uri }} />;
      </ScrollContainer>
    </RelativeContainer>
  );
};

const RelativeContainer = styled.View`
  flex: 1;
`;
