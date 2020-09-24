import React from 'react';
import { SvgXml as Icon } from 'react-native-svg';
import styled from 'styled-components/native';

import { screenWidth } from "../../utils/screenSize";

interface ISettingsItem {
  icon?: string;
  title?: React.ReactNode;
  rightComponent?: React.ReactNode,
  showBottomDivider?: boolean;
  onPress?: () => void;
}

export default ({
  icon,
  title,
  rightComponent,
  showBottomDivider = false,
  onPress,
}: ISettingsItem) => {
  return (
    <TouchableWrapper onPress={onPress}>
      <Wrapper>
        <Container>
          <LeftContainer>
            {icon && (
              <IconWrapper>
                <Icon
                  width={24.4}
                  height={24.4}
                  xml={icon}
                  color="#7A5CC5"
                />
              </IconWrapper>
            )}
            <Text>
              {title}
            </Text>
          </LeftContainer>
          {rightComponent && rightComponent}
        </Container>
        {showBottomDivider && (
          <Divider />
        )}
      </Wrapper>
    </TouchableWrapper>
  );
};

const TouchableWrapper = styled.TouchableWithoutFeedback`
`;

const Wrapper = styled.View`
  width: ${screenWidth * 0.93}px;
  align-items: center;
`;

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 13.1px 0;
  width: ${screenWidth * 0.88}px;
`;

const LeftContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const IconWrapper = styled.View`
`;

const Text = styled.Text`
  margin-left: 10px;
  font-weight: 500;
  font-size: 16px;
  line-height: ${16 * 1.19}px;
  color: #000000;
`;

const Divider = styled.View`
  width: 100%;
  height: 1px;
  background-color: rgba(122, 92, 197, 0.16);
`;
