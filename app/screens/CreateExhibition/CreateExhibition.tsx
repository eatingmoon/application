import React, { useState } from 'react';
import styled from 'styled-components/native';

import FormWrapper from './FormWrapper';
import BasicSettings from './BasicSettings';
import PieceSettings from './PieceSettings';
import Preview from './Preview';

export default () => {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [rightButtonText, setRightButtonText] = useState<string>('다음');

  const steps = [
    { title: '기본 설정', component: <BasicSettings /> },
    { title: '작품 세부 설정', component: <PieceSettings /> },
    { title: '미리보기', component: <Preview /> },
  ];

  const currentStep = steps[currentStepIndex];

  const onPressPreviousStep = () => {
    const nextStepIndex = currentStepIndex - 1;
    if (nextStepIndex >= 0) {
      setCurrentStepIndex(nextStepIndex);

      if (nextStepIndex !== 2) {
        setRightButtonText('다음');
      }
    }
  };

  const onPressNextStep = () => {
    const nextStepIndex = currentStepIndex + 1;
    if (nextStepIndex <= 2) {
      setCurrentStepIndex(nextStepIndex);

      if (nextStepIndex === 2) {
        setRightButtonText('확인');
      }
    }
  };

  return (
    <FormWrapper
      title={currentStep.title}
      progress={currentStepIndex}
      onPressLeft={onPressPreviousStep}
      onPressRight={onPressNextStep}
      rightButton={rightButtonText}
    >
      {currentStep.component}
    </FormWrapper>
  );
};
