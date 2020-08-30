import React from 'react';
import RNModal from 'react-native-modal';
import styled from 'styled-components/native';

import ModalButton from './ModalButton';

import { screenWidth } from '../utils/screenSize';

interface IModal {
  isVisible: boolean;
  title: string;
  description?: string;
  onPressConfirm?: () => void;
  isConfirmedWhenBackdropPressed?: boolean;
  leftButton?: React.ReactNode;
  isLeftButtonPrimary?: boolean;
  onPressLeftButton?: () => void;
  rightButton?: React.ReactNode;
  isRightButtonPrimary?: boolean;
  onPressRightButton?: () => void;
}

const Modal: React.FC<IModal> = ({
  isVisible,
  title,
  description,
  onPressConfirm,
  isConfirmedWhenBackdropPressed = true,
  leftButton = '',
  isLeftButtonPrimary = false,
  onPressLeftButton,
  rightButton = '',
  isRightButtonPrimary = false,
  onPressRightButton,
}) => {
  const onBackdropPress = isConfirmedWhenBackdropPressed
    ? onPressConfirm : undefined;

  const onPressLeft = () => {
    if (onPressLeftButton)
      onPressLeftButton();
    if (onPressConfirm)
      onPressConfirm();
  };

  const onPressRight = () => {
    if (onPressRightButton) {
      onPressRightButton();
    }
    if (onPressConfirm)
    onPressConfirm();
  };

  return (
    <RNModal
      isVisible={isVisible}
      onBackdropPress={onBackdropPress}
      backdropColor="rgba(0, 0, 0, 0.4)"
    >
      <ModalContainer>
        <Title>
          {title}
        </Title>
        {description && (
          <Description>
            {description}
          </Description>
        )}
        <ButtonList>
          <ModalButton
            isPrimary={isLeftButtonPrimary}
            onPress={onPressLeft}
          >
            {leftButton}
          </ModalButton>
          <ModalButton
            isPrimary={isRightButtonPrimary}
            onPress={onPressRight}
          >
            {rightButton}
          </ModalButton>
        </ButtonList>
      </ModalContainer>
    </RNModal>
  );
};

export default Modal;

const ModalContainer = styled.View`
  width: ${screenWidth * 0.82};
  border-radius: 35px;
  border: solid 1px #d1d1d1;
  background-color: #ffffff;
  padding: 26px 30px;
  padding-top: 49px;
  align-items: center;
  margin: 0 auto;
`;

const Title = styled.Text`
  font-weight: bold;
  font-size: 24px;
  line-height: ${24 * 1.21}px;
  color: #353535;
  margin-bottom: 25px;
`;

const Description = styled.Text`
  font-size: 14px;
  line-height: ${14 * 1.21}px;
  color: rgba(53, 53, 53, 0.73);
  margin-bottom: 38px;
`;

const ButtonList = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
