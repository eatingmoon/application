import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import styled from 'styled-components/native';

import NotificationItem, { INotificationItem } from './NotificationItem';
import { screenWidth } from '../../utils/screenSize';

interface INotificationGroup {
  period: string;
  notifications: INotificationItem[];
  style?: StyleProp<ViewStyle>;
}

const NotificationGroup: React.FC<INotificationGroup> = ({
  period, notifications, style = {},
}) => {
  return (
    <Wrapper
      style={style}
    >
      <PeriodText>
        {period}
      </PeriodText>
      <NotificationList>
        {notifications.map((notification, index) => (
          <NotificationItem
            key={`notification-${index}`}
            {...notification}
            style={{ marginTop: index ? 12 : 0 }}
          />
        ))}
      </NotificationList>
    </Wrapper>
  );
};

export default NotificationGroup;

const Wrapper = styled.View`
  margin-left: ${screenWidth * 0.025}px;
  flex: 1;
`;

const PeriodText = styled.Text`
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 20.7px;
`;

const NotificationList = styled.View`
  width: 100%;
  margin-left: ${screenWidth * 0.025}px;
  flex: 1;
`;
