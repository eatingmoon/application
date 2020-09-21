import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { SvgXml } from 'react-native-svg';
import styled from 'styled-components/native';

import cancelIconSvg from '../../assets/search/cancel.svg';

interface IRecentItem {
  query: string;
  onPressCancel: (query: string) => void;
  style?: StyleProp<ViewStyle>;
}

const RecentItem: React.FC<IRecentItem> = ({
  query,
  onPressCancel,
  style = {},
}) => {
  return (
    <Container
      style={style}
    >
      <QueryText>
        {query}
      </QueryText>
      <TouchableWrapper
        onPress={() => onPressCancel(query)}
      >
        <CancelIcon />
      </TouchableWrapper>
    </Container>
  );
};

export default RecentItem;

const Container = styled.View`
`;

const QueryText = styled.Text`
`;

const TouchableWrapper = styled.TouchableWithoutFeedback`
`;

const CancelIcon = styled(SvgXml).attrs({
  width: 14,
  height: 14,
  color: '#ececec',
  xml: cancelIconSvg,
})``;
