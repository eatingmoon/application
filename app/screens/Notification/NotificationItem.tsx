import React from 'react';
import styled from 'styled-components/native';

import heartIconSvg from '../../assets/notifications/heart.png';
import subscribeIconSvg from '../../assets/notifications/subscribe.png';
import reviewIconSvg from '../../assets/notifications/review.png';

export interface INotificationItem {
  type: string;
  content: string;
}

const notificationIcons: {
  [key: string]: string;
} = {
  heart: heartIconSvg,
  subscribe: subscribeIconSvg,
  review: reviewIconSvg,
};

const NotificationItem: React.FC<INotificationItem> = ({
  type,
  content,
}) => {
  const icon = notificationIcons[type];

  return (
    <Container>
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
`;

const Icon = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 36.3px;
  height: 36.3px;
`;

const ContentText = styled.Text`
`;
