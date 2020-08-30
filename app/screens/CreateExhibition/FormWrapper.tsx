import React from 'react';
import styled, { css } from 'styled-components/native';

import FormButton from './FormButton';
import ViewContainer from '../../components/ContentWrapper/ViewContainer';
import { screenWidth } from '../../utils/screenSize';

interface IFormWrapper {
  title?: string;
  progress?: number;
  children?: React.ReactNode;
  onPressLeft?: () => void;
  onPressRight?: () => void;
  rightButton?: string;
}

export default ({ title, progress, children, onPressLeft, onPressRight, rightButton = '다음' }: IFormWrapper) => {
  return (
    <ViewContainer>
      <Container>
        <StatusContainer>
          {[...Array(3)].map((_: undefined, statusIndex: number) => (
            <StatusCircle
              key={`status-${statusIndex}`}
              isSelected={statusIndex === progress}
            />
          ))}
        </StatusContainer>
        <Title>{title}</Title>
      </Container>
      {children}
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

const Container = styled.View`
  width: ${screenWidth * 0.8}px;
  padding: 32px 0;
  padding-bottom: 18px;
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

const ButtonList = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  flex-direction: row;
`;
