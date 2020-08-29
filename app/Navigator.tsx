import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import Home from './screens/Home';

const Stack = createStackNavigator();

const Navigator: React.FC = () => (
  <NavigationContainer
    theme={{
      colors: {
        background: '#FFFFFF',
      },
    } as any}
  >
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigator;
