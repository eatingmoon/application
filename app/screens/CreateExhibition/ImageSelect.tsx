import React, { useEffect, useState } from 'react';
import { PermissionsAndroid } from 'react-native';
import RNFS from 'react-native-fs';
import PhotoSelector, { PhotoProps } from 'react-native-photo-selector';
import styled from 'styled-components/native';

interface IImageSelect {}

const ImageSelect: React.FC<IImageSelect> = () => {
  const [photoSelectorReady, setPhotoSelectorReady] = useState(0);
  const bump = () => setPhotoSelectorReady(photoSelectorReady + 1);

  useEffect(() => {
    async function hasAndroidPermission(): Promise<boolean> {
      const permission = PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;
      const hasPermission = await PermissionsAndroid.check(permission);

      if (!hasPermission) {
        const status = await PermissionsAndroid.request(permission);
        return status === 'granted';
      }

      return true;
    }

    hasAndroidPermission()
      .then((status) => {
        if (status) {
          bump();
        }
      });
  }, []);

  const [image, setImage] = useState<any>({});

  const onSelectPhoto = async (images: PhotoProps[], receivedImage: PhotoProps) => {
    console.log('selected images:', images);
    console.log('current image:', receivedImage);
    const uri = receivedImage.uri;
    setImage({ uri })
  };

  return (
    <Container>
      <Image
        source={image}
      />
      {!!photoSelectorReady && (
        <PhotoSelector
          callback={onSelectPhoto}
        />
      )}
    </Container>
  );
};

export default ImageSelect;

const Container = styled.View`
  width: 100%;
  align-items: center;
`;

const Image = styled.Image`
  width: 128px;
  height: 128px;
`;
