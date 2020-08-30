import React from 'react';
import styled from 'styled-components/native';

import PieceViewer from './PieceViewer';

export default () => {
  return (
    <PreviewContainer>
      <PieceViewer />
    </PreviewContainer>
  );
};

const PreviewContainer = styled.ImageBackground.attrs({
  resizeMode: 'cover',
})`
  flex: 1;
  background-color: #EEE9E6;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-bottom: 65px;
`;
