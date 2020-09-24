import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import styled from 'styled-components/native';

import FormWrapper from './FormWrapper';
import BasicSettings from './BasicSettings';
import ImageSelect from './ImageSelect';
import PieceSettings from './PieceSettings';
import Preview from './Preview';
import Modal from '../../components/Modal';
import { ImageSourcePropType } from 'react-native';

import uploadImageToS3 from '../../utils/uploadImageToS3';

export default () => {
  const navigation = useNavigation();
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [rightButtonText, setRightButtonText] = useState<string>('다음');
  const [isFinishModalVisible, setIsFinishModalVisible] = useState<boolean>(false);

  const [coverImage, setCoverImage] = useState<ImageSourcePropType | undefined>();

  const steps = [
    {
      title: '기본 설정',
      component: (
        <BasicSettings
          coverImage={coverImage}
          setCoverImage={setCoverImage}
        />
      ),
      step: 1,
      callback: async () => {
        console.log('S3')
        if (coverImage) {
          await uploadImageToS3(coverImage?.uri || '')
        }
      },
    },
    { title: '이미지 선택', component: <ImageSelect />, bottomSpaceSize: 66, ignoredWhenBack: true },
    { title: '작품 세부 설정', component: <PieceSettings />, step: 2 },
    { title: '미리보기', component: <Preview />, step: 3 },
  ];

  const currentStep = steps[currentStepIndex];

  const onPressPreviousStep = () => {
    const nextStepIndex = currentStepIndex - 1;
    if (nextStepIndex >= 0) {
      if (steps[nextStepIndex].ignoredWhenBack) {
        setCurrentStepIndex(nextStepIndex - 1);
      } else {
        setCurrentStepIndex(nextStepIndex);
      }

      if (nextStepIndex !== 2) {
        setRightButtonText('다음');
      }
    } else {
      navigation.navigate('Home');
    }
  };

  const onPressNextStep = async (callback: (() => void | Promise<void>) | undefined) => {
    try {
      console.log('C', callback)
      if (callback) {
        await callback();
      }
    } catch (error) {
      console.log(error);
      return;
    }

    const nextStepIndex = currentStepIndex + 1;
    if (nextStepIndex <= 2) {
      setCurrentStepIndex(nextStepIndex);

      if (nextStepIndex === 2) {
        setRightButtonText('확인');
      }
    } else {
      setIsFinishModalVisible(true);
    }
  };

  console.log(currentStep.callback)
  return (
    <FormWrapper
      title={currentStep.title}
      progress={currentStep.step}
      bottomSpaceSize={currentStep.bottomSpaceSize}
      onPressLeft={onPressPreviousStep}
      onPressRight={() => onPressNextStep(currentStep.callback)}
      rightButton={rightButtonText}
    >
      {currentStep.component}
      <Modal
        isVisible={isFinishModalVisible}
        onPressConfirm={() => setIsFinishModalVisible(false)}
        title="전시회 미리보기 완료"
        description={'전시회 미리보기를 완료했습니다.\n이동하실 페이지를 선택해주세요.'}
        leftButton="메인으로"
        onPressLeftButton={() => navigation.navigate('Home')}
        rightButton="전시회 입장"
        isRightButtonPrimary={true}
        onPressRightButton={() => navigation.navigate('ViewExhibition')}
        isConfirmedWhenBackdropPressed={false}
      />
    </FormWrapper>
  );
};
