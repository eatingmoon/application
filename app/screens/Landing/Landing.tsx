import React from 'react';
import styled from 'styled-components/native';

import { screenWidth } from '../../utils/screenSize';

export default () => {
  return (
    <RelativeContainer>
      <ContentWrapper>
        <LogoImage
          source={require('../../assets/logo-white.png')}
        />
        <HeaderTitle>
          당신의 작품을,{'\n'}
          <HeaderBiggerTitle>
            널리
          </HeaderBiggerTitle>
        </HeaderTitle>
      </ContentWrapper>
    </RelativeContainer>
  );
};

const RelativeContainer = styled.View`
  flex: 1;
  background-color: #a68be7;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentWrapper = styled.View`
  padding-top: ${screenWidth * 0.1}px;
`;

const LogoImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: ${screenWidth * 0.46 + 40}px;
  height: ${screenWidth * 0.45 + 40}px;
`;

const HeaderTitle = styled.Text`
  font-size: 30px;
  line-height: ${30 * 1.54};
  color: #ffffff;
  text-align: center;
  margin-top: 12.9px;
  margin-bottom: 21px;
`;

const HeaderBiggerTitle = styled.Text`
  font-size: 42px;
  line-height: ${42 * 1.54};
`;

const FormContainer = styled.View`
  width: ${screenWidth * 0.9}px;
`;
