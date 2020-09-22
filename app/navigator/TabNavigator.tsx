import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Search from '../screens/Search';
import Profile from '../screens/Profile';
import Manage from '../screens/Manage';
import Notification from '../screens/Notification';

import {
  ExhibitionListScreen,
  PieceListScreen,
} from '../screens/Details';

import TabBar from '../components/TabBar';

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={({ state, descriptors, navigation }) => (
        <TabBar
          state={state}
          descriptors={descriptors}
          navigation={navigation}
        />
      )}
    >
      <Tab.Screen
        name="Home"
        component={Home}
      />
      <Tab.Screen
        name="Search"
        component={Search}
      />
      <Tab.Screen
        name="Manage"
        component={Manage}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
      />
      <Tab.Screen
        name="ExhibitionList"
        component={ExhibitionListScreen}
      />
      <Tab.Screen
        name="PieceList"
        component={PieceListScreen}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
