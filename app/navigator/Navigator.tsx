import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import TabNavigator from './TabNavigator';

import Landing from '../screens/Landing';
import Join from '../screens/Join';
import CreateExhibition from '../screens/CreateExhibition';
import ViewExhibition from '../screens/ViewExhibition';

import {
  DocumentScreen,
  SettingsScreen,
} from '../screens/Settings';

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
        name="Main"
        component={TabNavigator}
      />
      <Stack.Screen
        name="Landing"
        component={Landing}
      />
      <Stack.Screen
        name="Join"
        component={Join}
      />
      <Stack.Screen
        name="CreateExhibition"
        component={CreateExhibition}
      />
      <Stack.Screen
        name="ViewExhibition"
        component={ViewExhibition}
      />
      <Stack.Screen
        name="Document"
        component={DocumentScreen}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigator;
