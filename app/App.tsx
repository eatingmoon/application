import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import styled from 'styled-components/native';

import Navigator from './navigator';

const App: React.FC = () => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#F8F8F8"
      />
      <SafeAreaProvider>
        <SafeAreaContainer>
          <Navigator />
        </SafeAreaContainer>
      </SafeAreaProvider>
    </>
  );
};

export default App;

const SafeAreaContainer = styled(SafeAreaView)`
  flex: 1;
`;
