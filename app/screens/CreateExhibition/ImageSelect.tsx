import React, { useEffect } from 'react';
import PhotoSelector, { PhotoProps } from 'react-native-photo-selector';
import styled from 'styled-components/native';

interface IImageSelect {}

const ImageSelect: React.FC<IImageSelect> = () => {
  const onSelectPhoto = (images: PhotoProps[], image: PhotoProps) => {
    console.log('selected images:', images);
    console.log('current image:', image);
  };

  return (
    <Container>
      <PhotoSelector
        callback={onSelectPhoto}
      />
    </Container>
  );
};

export default ImageSelect;

const Container = styled.View`
  width: 100%;
  align-items: center;
`;
