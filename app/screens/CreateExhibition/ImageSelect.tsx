import React, { useEffect, useState } from 'react';
import { PermissionsAndroid } from 'react-native';
import PhotoSelector, { PhotoProps } from 'react-native-photo-selector';
import styled from 'styled-components/native';

import ImageSelectedMarker from './ImageSelectedMarker';
import { screenWidth } from '../../utils/screenSize';

const EmptyComponent: React.FC = () => null;

interface IImageSelect {}

const ImageSelect: React.FC<IImageSelect> = () => {
  const [photoSelectorReady, setPhotoSelectorReady] = useState(0);
  const bump = () => setPhotoSelectorReady(photoSelectorReady + 1);

  useEffect(() => {
    async function checkAndroidPermission(): Promise<boolean> {
      const permission = PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;
      const hasPermission = await PermissionsAndroid.check(permission);

      if (!hasPermission) {
        const status = await PermissionsAndroid.request(permission);
        return status === 'granted';
      }

      return true;
    }

    checkAndroidPermission()
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

  const renderSelectedMarker = (selectedNumber: number) => (
    <ImageSelectedMarker>
      {selectedNumber}
    </ImageSelectedMarker>
  );

  return (
    <Container>
      {!!photoSelectorReady && (
        <PhotoSelector
          callback={onSelectPhoto}
          headerOption={{
            headerContainerStyle: {
              borderBottomWidth: 0,
            },
            headerLeftComponent: <EmptyComponent />,
            headerRightComponent: <EmptyComponent />,
          }}
          zoomImageOption={{
            isZoomEnabled: false,
          }}
          imageListOption={{
            imageMargin: 2,
            containerStyle: {
              backgroundColor: 'black',
            },
          }}
          selectedMarker={renderSelectedMarker}
        />
      )}
    </Container>
  );
};

export default ImageSelect;

const Container = styled.View`
  width: ${screenWidth}px;
  flex: 1;
`;
