import { useRoute, useNavigation } from '@react-navigation/native';
import React from 'react';
import { WebView } from 'react-native-webview';
import styled from 'styled-components/native';

import ScrollContainer from '../../components/ContentWrapper/ScrollContainer';
import Header from '../../components/BasicHeader';
import { screenWidth, screenHeight } from '../../utils/screenSize';

export default () => {
  const { params: { title = '', uri = '' } } = useRoute<any>();
  const navigation = useNavigation();

  return (
    <RelativeContainer>
      <ScrollContainer>
        <Header
          onPressBack={() => navigation.goBack()}
        >
          {title}
        </Header>
        <WebViewWrapper>
          <WebView
            source={{ uri }}
            scalesPageToFit={true}
            style={{ flex: 1, width: '100%' }}
          />
        </WebViewWrapper>
      </ScrollContainer>
    </RelativeContainer>
  );
};

const RelativeContainer = styled.View`
  flex: 1;
`;

const WebViewWrapper = styled.View`
  overflow: scroll;
  height: ${screenHeight - 90}px;
  width: ${screenWidth}px;
  flex: 1;
`;
