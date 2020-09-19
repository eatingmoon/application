import React from 'react';
import { ImageSourcePropType, StyleProp, ViewStyle } from 'react-native';
import styled from 'styled-components/native';

import heartIcon from '../../assets/notifications/heart.png';
import subscribeIcon from '../../assets/notifications/subscribe.png';
import reviewIcon from '../../assets/notifications/review.png';

const notificationIcons: {
  [key: string]: ImageSourcePropType;
} = {
  heart: heartIcon,
  subscribe: subscribeIcon,
  review: reviewIcon,
};

export interface INotificationItem {
  type: string;
  content: string;
  style?: StyleProp<ViewStyle>;
}

const NotificationItem: React.FC<INotificationItem> = ({
  type,
  content,
  style = {},
}) => {
  const icon = notificationIcons[type];

  return (
    <Container
      style={style}
    >
      <Icon
        source={icon}
      />
      <ContentText>
        {content}
      </ContentText>
    </Container>
  );
};

export default NotificationItem;

const Container = styled.View`
  flex-direction: row;
  width: 85%;
  flex: 1;
  align-items: center;
`;

const Icon = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 36.3px;
  height: 36.3px;
`;

const ContentText = styled.Text`
  margin-left: 9.7px;
`;
