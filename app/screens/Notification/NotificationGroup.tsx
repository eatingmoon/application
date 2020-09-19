import React from 'react';
import styled from 'styled-components/native';

import NotificationItem, { INotificationItem } from './NotificationItem';

interface INotificationGroup {
  period: string;
  notifications: INotificationItem[];
}

const NotificationGroup: React.FC<INotificationGroup> = ({
  period, notifications,
}) => {
  return (
    <Wrapper>
      <PeriodText>
        {period}
      </PeriodText>
      <NotificationList>
        {notifications.map((notification, index) => (
          <NotificationItem
            key={`notification-${index}`}
            {...notification}
          />
        ))}
      </NotificationList>
    </Wrapper>
  );
};

export default NotificationGroup;

const Wrapper = styled.View`
`;

const PeriodText = styled.Text`
`;

const NotificationList = styled.View`
`;
