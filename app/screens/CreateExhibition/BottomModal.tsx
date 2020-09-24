import React, { useRef } from 'react';
import styled from 'styled-components/native';
import RBSheet from "react-native-raw-bottom-sheet";

import { screenWidth } from "../../utils/screenSize";

interface IBottomModal {
  children?: React.ReactNode;
  modalRef?: any;
  bottomComponent?: React.ReactNode;
  height?: number;
  closeOnSwipeDown?: boolean;
}

const BottomModal: React.FC<IBottomModal> = ({ children, modalRef, bottomComponent, height, closeOnSwipeDown = true }) => {
  return (
    <RBSheet
      ref={modalRef}
      closeOnDragDown={closeOnSwipeDown}
      closeOnPressMask={true}
      customStyles={{
        wrapper: {
          backgroundColor: 'rgba(0, 0, 0, 0.4)'
        },
        container: {
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          elevation: 5,
          alignItems: 'center',
          height,
        },
        draggableIcon: {
          backgroundColor: "#D1D1D1"
        }
      }}
    >
      <Container>
        {children}
      </Container>
      {bottomComponent}
    </RBSheet>
  );
};

export default BottomModal;

const Container = styled.View`
  flex: 1;
  width: ${screenWidth * 0.8}px;
  margin-top: 15px;
`;
