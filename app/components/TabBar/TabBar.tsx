import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React, { useCallback } from 'react';
import styled from 'styled-components/native';

import tabRoutes from './tabRoutes';
import TabItem from './TabItem';

interface ITabBar extends BottomTabBarProps {}

const TabBar: React.FC<ITabBar> = ({ state, navigation }) => {
  const currentTabIndex = state?.index || 0;
  const currentTab = state?.routeNames[currentTabIndex];

  return (
    <Container>
      {tabRoutes.map((routeInformation, index) => {
        const { route } = routeInformation;
        const isSelected = currentTab === route;

        const onPress = useCallback(() => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route,
            canPreventDefault: true,
          });

          if (!isSelected && !event.defaultPrevented) {
            navigation.navigate(route);
          }
        }, [route, isSelected]);

        return (
          <TabItem
            key={`tabItem-${index}`}
            onPress={onPress}
            isSelected={isSelected}
            {...routeInformation}
          />
        );
      })}
    </Container>
  );
};

export default TabBar;

const Container = styled.View`
  width: 100%;
  flex-direction: row;
  padding-top: 15px;
  padding-bottom: 8px;
`;
