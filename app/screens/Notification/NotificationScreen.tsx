import React from 'react';
import styled from 'styled-components/native';

import Header from './Header';
import notificationData from './notificationData';
import NotificationGroup from './NotificationGroup';

import ScrollContainer from '../../components/ContentWrapper/ScrollContainer';

const NotificationScreen = () => {
  return (
    <RelativeContainer>
      <ScrollContainer>
        <Header />
        {notificationData.map(({ period, notifications }) => (
          <NotificationGroup
            key={`notification-group-${period}`}
            period={period}
            notifications={notifications}
          />
        ))}
      </ScrollContainer>
    </RelativeContainer>
  );
};

export default NotificationScreen;

const RelativeContainer = styled.View`
  flex: 1;
`;
