import React from 'react';
import { SvgXml } from 'react-native-svg';
import styled from 'styled-components/native';

import { screenWidth } from '../../utils/screenSize';

import FormTextInput from './FormTextInput';
import FormHashtagInput from './FormHashtagInput';

import cameraIconSvg from '../../assets/camera.svg';

export default () => {
  return (
    <Container>
      <CoverImageBackground>
        <CoverImageTextWrapper>
          <CoverImageText>
            커버 사진 선택
          </CoverImageText>
          <CameraIcon />
        </CoverImageTextWrapper>
      </CoverImageBackground>
      <FormTextInput
        field="전시회 제목"
        placeholder="ex) 우주를 건너자"
      />
      <FormTextInput
        field="전시회 소개"
        placeholder="관람자에게 어떤 전시회인지 소개해 주세요!"
        multiline
        style={{ height: 131 }}
      />
      <FormHashtagInput
        field="전시회 해시태그"
      />
    </Container>
  );
};

const Container = styled.View`
  width: 100%;
  align-items: center;
`;

const CoverImageBackground = styled.View`
  margin-bottom: 25px;
  width: ${screenWidth * 0.8}px;
  height: 215px;
  background: #7a5cc5;
  border-radius: 12px;
  position: relative;
`;

const CoverImageTextWrapper = styled.View`
  position: absolute;
  right: 18.8px;
  bottom: 14.2px;
  flex-direction: row;
`;

const CoverImageText = styled.Text`
  font-weight: bold;
  font-size: 18px;
  line-height: ${18 * 1.22}px;
  color: #ffffff;
  margin-right: 10.7px;
`;

const CameraIcon = styled(SvgXml).attrs({
  width: 26.4,
  height: 22,
  color: 'white',
  xml: cameraIconSvg,
})`
`;
