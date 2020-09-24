import React from 'react';
import { ImageSourcePropType, StyleProp, ViewStyle } from 'react-native';
import styled from 'styled-components/native';

interface IShareIcon {
  image: ImageSourcePropType;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

const ShareIcon: React.FC<IShareIcon>= ({ image, onPress, style }) => {
  return (
    <IconWrapper
      style={style}
    >
      <TouchableWrapper
        onPress={onPress}
      >
        <Image source={image}/>
      </TouchableWrapper>
    </IconWrapper>
  );
};

export default ShareIcon;

const IconWrapper = styled.View`
`;

const TouchableWrapper = styled.TouchableWithoutFeedback`
`;

const Image = styled.Image.attrs({
  resizeMode: 'cover',
})`
  height: 62px;
  width: 62px;
  border-radius: 4px;
`;
