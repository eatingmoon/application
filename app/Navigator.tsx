import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import Landing from './screens/Landing';
import Home from './screens/Home';
import CreateExhibition from './screens/CreateExhibition';
import ViewExhibition from './screens/ViewExhibition';

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
      initialRouteName="Landing"
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
    >
      <Stack.Screen
        name="Landing"
        component={Landing}
      />
      <Stack.Screen
        name="Home"
        component={Home}
      />
      <Stack.Screen
        name="CreateExhibition"
        component={CreateExhibition}
      />
      <Stack.Screen
        name="ViewExhibition"
        component={ViewExhibition}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigator;
