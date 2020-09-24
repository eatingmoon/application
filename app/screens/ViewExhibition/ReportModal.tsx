import React from 'react';
import Modal from '../../components/Modal';

interface IReportModal {
  isVisible: boolean;
  setIsVisible: (value: boolean) => void;
}

const ReportModal: React.FC<IReportModal> = ({ isVisible, setIsVisible }) => {
  return (
    <Modal
      isVisible={isVisible}
      onPressConfirm={() => setIsVisible(false)}
      title="신고 완료"
      description={'신고가 완료되었습니다.\n운영자의 검토 후 제재 여부가 결정됩니다.'}
      centerButton="확인"
      isCenterButtonPrimary={true}
      onPressCenterButton={() => setIsVisible(false)}
      isConfirmedWhenBackdropPressed={true}
    />
  );
};

export default ReportModal;
