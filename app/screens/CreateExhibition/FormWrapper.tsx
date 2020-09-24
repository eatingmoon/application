import React from 'react';
import styled, { css } from 'styled-components/native';

import FormButton from './FormButton';
import BasicHeader from '../../components/BasicHeader';
import ViewContainer from '../../components/ContentWrapper/ViewContainer';
import ScrollContainer from '../../components/ContentWrapper/ScrollContainer';
import { screenWidth } from '../../utils/screenSize';

interface IFormWrapper {
  title?: string;
  progress?: number;
  bottomSpaceSize?: number;
  children?: React.ReactNode;
  onPressLeft?: () => void;
  onPressRight?: () => void;
  rightButton?: string;
}

export default ({
  title, progress, bottomSpaceSize = 88,
  children, onPressLeft, onPressRight,
  rightButton = '다음'
}: IFormWrapper) => {
  return (
    <ViewContainer>
      <BasicHeader
        onPressBack={onPressLeft}
      >
        {title}
        {progress && ` (${progress}/3)`}
      </BasicHeader>
      <ScrollContainer
        style={{ width: '100%' }}
      >
        {children}
        <BottomSpace
          style={{ height: bottomSpaceSize, width: bottomSpaceSize }}
        />
      </ScrollContainer>
      <ButtonList>
        <FormButton onPress={onPressLeft}>이전</FormButton>
        <FormButton
          isPrimary
          onPress={onPressRight}
        >
          {rightButton}
        </FormButton>
      </ButtonList>
    </ViewContainer>
  );
};

const ContentWrapper = styled.View`
  margin-top: 16px;
`;

const StatusContainer = styled.View`
  flex-direction: row;
`;

interface IStatusCircle {
  isSelected?: boolean;
}

const StatusCircle = styled.View<IStatusCircle>`
  width: 10px;
  height: 10px;
  background-color: #e5e5e5;
  border-radius: 5px;
  margin-right: 12px;

  ${({ isSelected = false }) => isSelected && css`
    background-color: #7a5cc5;
  `};
`;

const Title = styled.Text`
  margin-top: 12px;
  font-weight: 500;
  font-size: 30px;
  line-height: ${30 * 1.2}px;
  color: #000000;
`;

const BottomSpace = styled.View``;

const ButtonList = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  flex-direction: row;
`;
