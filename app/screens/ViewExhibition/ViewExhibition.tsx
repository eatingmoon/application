import React from 'react';
import styled from 'styled-components/native';

import Header from './Header';
import Button from '../../components/Button';
import ViewContainer from '../../components/ContentWrapper/ViewContainer';

import placeholderFox from '../../assets/placeholder-fox-background.png';

export default () => {
  return (
    <ViewContainer>
      <Header />
      <ContentWrapper
        source={placeholderFox}
      >
        <OverlayWrapper>
        </OverlayWrapper>
      </ContentWrapper>
      <BottomButton isPrimary isBiggerText>
        전시회 입장하기
      </BottomButton>
    </ViewContainer>
  );
};

const ContentWrapper = styled.ImageBackground.attrs({
  resizeMode: 'cover',
})`
  flex: 1;
  width: 100%;
  position: relative;
`;

const OverlayWrapper = styled.View`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.35);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const BottomButton = styled(Button)`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;
