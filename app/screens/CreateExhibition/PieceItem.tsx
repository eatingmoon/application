import React from 'react';
import styled from 'styled-components/native';

import placeholderFox from '../../assets/placeholder-fox.png';

export default ({ index }: {index: number}) => {
  return (
    <Container source={placeholderFox}>
      <Badge>
        <BadgeText>{index}</BadgeText>
      </Badge>
    </Container>
  );
};

const Container = styled.ImageBackground.attrs({
  resizeMode: 'cover',
  imageStyle: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#999999',
  },
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
