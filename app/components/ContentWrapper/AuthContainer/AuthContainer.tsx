import React from 'react';
import { StyleProp, ImageStyle, ImageSourcePropType } from 'react-native';
import styled, { css } from 'styled-components/native';

import AuthHeader from './AuthHeader';
import ScrollContainer from '../ScrollContainer';

interface IsAlignedRight {
  isAlignedRight?: boolean;
}

interface IAuthContainer extends IsAlignedRight {
  title: string;
  description: string;
  children?: React.ReactNode;
  image?: ImageSourcePropType;
  imageStyle?: StyleProp<ImageStyle>;
}

export default ({
  title,
  description,
  isAlignedRight = false,
  children,
  image,
  imageStyle,
}: IAuthContainer) => {
  return (
    <ScrollContainer>
      <AuthHeader>
        회원가입(1/3)
      </AuthHeader>
      <Wrapper>
        <Container>
          <Title
            isAlignedRight={isAlignedRight}
          >
            {title}
          </Title>
          <Description
            isAlignedRight={isAlignedRight}
          >
            {description}
          </Description>
        </Container>
        {image && (
          <AbsoluteImage
            source={image}
            style={imageStyle}
          />
        )}
      </Wrapper>
      {children}
    </ScrollContainer>
  );
};

const Wrapper = styled.View`
  width: 100%;
  align-items: center;
`;

const Container = styled.View`
  width: 90%;
  padding-bottom: 146px;
  position: relative;
`;

const Title = styled.Text<IsAlignedRight>`
  margin-top: 30.4px;
  font-weight: 300;
  font-size: 32px;
  line-height: ${32 * 1.11}px;
  color: #343a40;

  ${({ isAlignedRight = false }) => isAlignedRight && css`
    text-align: right;
  `};
`;

const Description = styled.Text<IsAlignedRight>`
  font-weight: 500;
  font-size: 14px;
  line-height: ${14 * 3}px;
  color: #868e96;

  ${({ isAlignedRight = false }) => isAlignedRight && css`
    text-align: right;
  `};
`;

const AbsoluteImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  position: absolute;
`;
