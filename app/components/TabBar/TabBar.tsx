import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React, { useCallback, useState } from 'react';
import styled from 'styled-components/native';

import tabRoutes from './tabRoutes';
import TabItem from './TabItem';
import Modal from '../Modal';

interface ITabBar extends BottomTabBarProps {}

const TabBar: React.FC<ITabBar> = ({ state, navigation }) => {
  const currentTabIndex = state?.index || 0;
  const currentTab = state?.routeNames[currentTabIndex];

  const [isCreateModalShown, setIsCreateModalShown] = useState<boolean>(false);

  return (
    <>
      <Container>
        {tabRoutes.map((routeInformation, index) => {
          const { route } = routeInformation;
          const isSelected = currentTab === route;

          const onPress = useCallback(() => {
            if (route === 'Create') {
              return setIsCreateModalShown(true);
            }

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
      <Modal
        isVisible={isCreateModalShown}
        onPressConfirm={() => setIsCreateModalShown(false)}
        title="제작하기"
        description="무엇을 제작하실지 선택해 주세요."
        leftButton="전시회"
        onPressLeftButton={() => navigation.navigate('CreateExhibition')}
        rightButton="작품"
      />
    </>
  );
};

export default TabBar;

const Container = styled.View`
  width: 100%;
  flex-direction: row;
  padding-top: 15px;
  padding-bottom: 8px;
`;
