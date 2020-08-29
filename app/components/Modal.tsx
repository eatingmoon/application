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
  leftIcon?: React.ReactNode;
  isLeftIconPrimary?: boolean;
  rightIcon?: React.ReactNode;
  isRightIconPrimary?: boolean;
}

const Modal: React.FC<IModal> = ({
  isVisible,
  title,
  description,
  onPressConfirm,
  isConfirmedWhenBackdropPressed = true,
  leftIcon = '',
  isLeftIconPrimary = false,
  rightIcon = '',
  isRightIconPrimary = false,
}) => {
  const onBackdropPress = isConfirmedWhenBackdropPressed
    ? onPressConfirm : undefined;

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
            isPrimary={isLeftIconPrimary}
          >
            {leftIcon}
          </ModalButton>
          <ModalButton
            isPrimary={isRightIconPrimary}
          >
            {rightIcon}
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
