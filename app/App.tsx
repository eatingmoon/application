import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';

import Navigator from './Navigator';

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{ flex: 1 }}
      >
        <Navigator />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
