import React, { useEffect, useState } from 'react';
import ImagePicker from 'react-native-image-picker';
import { SvgXml } from 'react-native-svg';
import styled, { css } from 'styled-components/native';

import { screenWidth } from '../../utils/screenSize';

import FormTextInput from './FormTextInput';
import FormHashtagInput from './FormHashtagInput';

import cameraIconSvg from '../../assets/camera.svg';
import { ImageSourcePropType } from 'react-native';

interface IBasicSettings {
  coverImage: ImageSourcePropType | undefined;
  setCoverImage: (coverImage: ImageSourcePropType | undefined) => void;
  title: string;
  setTitle: (title: string) => void;
  description: string;
  setDescription: (description: string) => void;
  hashtags: string[];
  setHashtags: (hashtags: string[]) => void;
}

export default ({
  coverImage, setCoverImage,
  title, setTitle, description, setDescription,
  hashtags, setHashtags,
}: IBasicSettings) => {
  const onClickUpload = () => {
    ImagePicker.showImagePicker({
      title: '커버 사진 업로드',
      cancelButtonTitle: '취소',
      takePhotoButtonTitle: '사진 촬영하기',
      chooseFromLibraryButtonTitle: '앨범에서 가져오기',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    }, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        if (response.uri) {
          setCoverImage({ uri: response.uri });
        }
      }
    });
  };

  return (
    <Container>
      <TouchableWrapper
        onPress={onClickUpload}
      >
        {coverImage ? (
          <CoverImageBackground
            source={coverImage}
          >
            <CoverImageTextWrapper>
              <CoverImageText>
                커버 사진 선택
              </CoverImageText>
              <CameraIcon />
            </CoverImageTextWrapper>
          </CoverImageBackground>
        ) : (
          <CoverImageView>
            <CoverImageTextWrapper>
              <CoverImageText>
                커버 사진 선택
              </CoverImageText>
              <CameraIcon />
            </CoverImageTextWrapper>
          </CoverImageView>
        )}
      </TouchableWrapper>
      <FormTextInput
        field="전시회 제목"
        placeholder="ex) 우주를 건너자"
        value={title}
        onChangeText={setTitle}
      />
      <FormTextInput
        field="전시회 소개"
        placeholder="관람자에게 어떤 전시회인지 소개해 주세요!"
        textAlignVertical="top"
        multiline
        style={{ height: 131 }}
        value={description}
        onChangeText={setDescription}
      />
      <FormHashtagInput
        field="전시회 해시태그"
        hashtags={hashtags}
        setHashtags={setHashtags}
      />
    </Container>
  );
};

const TouchableWrapper = styled.TouchableWithoutFeedback`
`;

const Container = styled.View`
  width: 100%;
  align-items: center;
`;

const coverImageContainerStyle = css`
  margin-top: 16px;
  margin-bottom: 35px;
  width: ${screenWidth * 0.84}px;
  height: ${screenWidth * 0.53}px;
  background: #7a5cc5;
  border-radius: 12px;
  position: relative;
  elevation: 6;
`;

const CoverImageBackground = styled.ImageBackground.attrs({
  resizeMode: 'cover',
  imageStyle: {
    borderRadius: 12,
  },
})`
  ${coverImageContainerStyle}
`;

const CoverImageView = styled.View`
  ${coverImageContainerStyle}
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
