import React, { useState } from "react";
import { SvgXml } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";

import styled from "styled-components/native";

import ReportModal from "./ReportModal";
import { screenWidth } from "../../utils/screenSize";

import logoImage from "../../assets/logo.png";
import leftIconSvg from "../../assets/left-header.svg";
import rightIconSvg from "../../assets/siren.svg";

export default () => {
  const navigation = useNavigation();
  const [isReportOpen, setIsReportOpen] = useState<boolean>(false);

  return (
    <>
      <Container>
        <IconWrapper
          onPress={() => navigation.goBack()}
        >
          <LeftIcon />
        </IconWrapper>
        <LogoImage source={logoImage} />
        <IconWrapper
          onPress={() => setIsReportOpen(true)}
        >
          <RightIcon />
        </IconWrapper>
      </Container>
      <ReportModal
        isVisible={isReportOpen}
        setIsVisible={setIsReportOpen}
      />
    </>
  );
};

const Container = styled.View`
  padding: 7.9px ${screenWidth * 0.05}px;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  elevation: 33;
`;

const IconWrapper = styled.TouchableWithoutFeedback``;

const LeftIcon = styled(SvgXml).attrs({
  xml: leftIconSvg,
  width: 10.11,
  height: 19.76,
  color: "#7a5cc5",
})``;

const LogoImage = styled.Image`
  width: 37.6px;
  height: 36.4px;
`;

const RightIcon = styled(SvgXml).attrs({
  xml: rightIconSvg,
  width: 16.47,
  height: 21.13,
  color: "#7a5cc5",
})``;
