import React from 'react';
import styled, { css } from 'styled-components/native';

// import placeholderFox from '../../assets/placeholder-fox.png';

export default ({ index, source, isSelected = false, onPress }: {
  index: number, source: any, isSelected?: boolean, onPress: () => void,
}) => {
  return (
    <TouchableWrapper onPress={onPress}>
      <Container
        source={source}
        imageStyle={{
          borderRadius: 10,
          borderWidth: isSelected ? 3 : 1,
          borderColor: isSelected ? '#7a5cc5' : '#999999',
        }}
      >
        <Badge>
          <BadgeText>{index}</BadgeText>
        </Badge>
      </Container>
    </TouchableWrapper>
  );
};

const TouchableWrapper = styled.TouchableWithoutFeedback`
`;

const Container = styled.ImageBackground.attrs({
  resizeMode: 'cover',
})`
  width: 85px;
  height: 80px;
  margin-right: 9px;
`;

const Badge = styled.View`
  margin: 6px;
  width: 22px;
  height: 22px;
  background-color: #7a5cc5;
  justify-content: center;
  align-items: center;
  border-radius: 11px;
`;

const BadgeText = styled.Text`
  font-weight: bold;
  font-size: 18px;
  line-height: ${18 * 1.22}px;
  color: #ffffff;
`;
