import React from 'react';
import styled from 'styled-components/native';

import Header from './Header';
import notificationData from './notificationData';
import NotificationGroup from './NotificationGroup';

import ScrollContainer from '../../components/ContentWrapper/ScrollContainer';
import { screenWidth } from '../../utils/screenSize';

const NotificationScreen = () => {
  return (
    <RelativeContainer>
      <ScrollContainer>
        <Header />
        <NotificationGroupContainer>
          {notificationData.map(({ period, notifications }, index) => (
            <NotificationGroup
              key={`notification-group-${period}`}
              period={period}
              notifications={notifications}
              style={{ marginTop: index ? 25.4 : 14 }}
            />
          ))}
        </NotificationGroupContainer>
      </ScrollContainer>
    </RelativeContainer>
  );
};

export default NotificationScreen;

const RelativeContainer = styled.View`
  flex: 1;
`;

const NotificationGroupContainer = styled.View`
  width: ${screenWidth * 0.9}px;
  margin-bottom: 80px;
`;
