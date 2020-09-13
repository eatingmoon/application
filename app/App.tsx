import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import styled from 'styled-components/native';

import Navigator from './navigator';

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaContainer>
        <Navigator />
      </SafeAreaContainer>
    </SafeAreaProvider>
  );
};

export default App;

const SafeAreaContainer = styled(SafeAreaView)`
  flex: 1;
`;
