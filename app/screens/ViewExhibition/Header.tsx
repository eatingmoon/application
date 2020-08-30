import React from "react";
import { SvgXml } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";

import styled from "styled-components/native";

import { screenWidth } from "../../utils/screenSize";

import logoImage from "../../assets/logo.png";
import leftIconSvg from "../../assets/left-header.svg";

export default () => {
  const navigation = useNavigation();

  return (
    <Container>
      <LeftIconWrapper
        onPress={() => navigation.goBack()}
      >
        <LeftIcon />
      </LeftIconWrapper>
      <LogoImage source={logoImage} />
      <Dummy />
    </Container>
  );
};

const Container = styled.View`
  padding: 7.9px ${screenWidth * 0.1}px;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

const LeftIconWrapper = styled.TouchableWithoutFeedback``;

const LeftIcon = styled(SvgXml).attrs({
  xml: leftIconSvg,
  width: 10.1,
  height: 19.8,
  color: "#7a5cc5",
})``;

const LogoImage = styled.Image`
  width: 37.6px;
  height: 36.4px;
`;

const Dummy = styled.View`
  width: 10.1px;
  height: 19.8px;
`;
