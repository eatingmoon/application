import React from 'react';
import { SvgXml } from 'react-native-svg';
import styled from 'styled-components/native';

import leftIconSvg from '../assets/left.svg';

interface IBasicHeaderBackButton {
  onPress?: () => void;
}

const BasicHeaderBackButton: React.FC<IBasicHeaderBackButton> = ({
  onPress,
}) => {
  return (
    <IconWrapper>
      <TouchableWrapper
        onPress={onPress}
      >
        <IconContainer>
          <BackIcon />
        </IconContainer>
      </TouchableWrapper>
    </IconWrapper>
  );
};

export default BasicHeaderBackButton;

const IconWrapper = styled.View`
  margin-left: 5px;
`;

const TouchableWrapper = styled.TouchableWithoutFeedback`
`;

const IconContainer = styled.View`
  padding: 7px;
`;

const BackIcon = styled(SvgXml).attrs({
  width: 10.1,
  height: 19.8,
  color: '#7a5cc5',
  xml: leftIconSvg,
})`
`;
