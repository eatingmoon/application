import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { SvgXml as Icon } from 'react-native-svg';
import styled from 'styled-components/native';

import { screenWidth } from '../../utils/screenSize';

interface IMenuItem {
  icon: string;
  name: string;
  route?: string;
  isLastItem?: boolean;
}

const MenuItem: React.FC<IMenuItem> = ({ icon, name, route, isLastItem = false }) => {
  const navigation = useNavigation();

  return (
    <Wrapper>
      <Divider />
      <TouchableOpacity
        onPress={route ? () => navigation.navigate(route) : undefined}
      >
        <Container>
          <Icon
            width={25}
            height={25}
            xml={icon}
            color="#7A5CC5"
          />
          <Name>
            {name}
          </Name>
        </Container>
      </TouchableOpacity>
      {isLastItem && <Divider />}
    </Wrapper>
  );
};

export default MenuItem;

const Wrapper = styled.View`
  width: ${screenWidth * 0.9}px;
`;

const Divider = styled.View`
  background-color: rgba(122, 92, 197, 0.1);
  height: 2px;
  border-radius: 1px;
  width: 100%;
`;

const Container = styled.View`
  width: 100%;
  flex-direction: row;
  padding: 16px 5px;
  align-items: center;
`;

const Name = styled.Text`
  margin-left: 18.7px;
  font-size: 23px;
  line-height: 28px;
  color: #8E8E8E;
`;
