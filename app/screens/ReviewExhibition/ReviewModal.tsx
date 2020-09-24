import React from 'react';
import Modal from '../../components/Modal';

interface IReviewModal {
  isVisible: boolean;
  setIsVisible: (value: boolean) => void;
}

const ReviewModal: React.FC<IReviewModal> = ({ isVisible, setIsVisible }) => {
  return (
    <Modal
      isVisible={isVisible}
      onPressConfirm={() => setIsVisible(false)}
      subtitle="리뷰가 성공적으로 등록되었습니다!"
      centerButton="확인"
      isCenterButtonPrimary={true}
      onPressCenterButton={() => setIsVisible(false)}
      isConfirmedWhenBackdropPressed={true}
      style={{
        minHeight: 216,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    />
  );
};

export default ReviewModal;
