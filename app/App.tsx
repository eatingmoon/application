import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Navigator from './Navigator';

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <Navigator />
    </SafeAreaProvider>
  );
};

export default App;
