import { useNavigation } from '@react-navigation/native';
import React, { useState, useRef } from 'react';

import forms, { IFormItem } from './forms';
import FormTextInput from './FormTextInput';
import FormButton from './FormButton';
import FormCheckbox from './FormCheckbox';
import AuthContainer from '../../components/ContentWrapper/AuthContainer';
import { screenWidth } from '../../utils/screenSize';
import FormSelect from './FormSelect';

export default () => {
  const navigation = useNavigation();
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const currentForm = forms[currentStepIndex];
  const [userInfo, setUserInfo] = useState<any>({ gender: 'f' });

  const scrollContainerRef = useRef<any>(null);

  const isLastStep = currentStepIndex === forms.length - 1;

  const onPressNextStep = () => {
    if (isLastStep) {
      navigation.navigate('Home');
      return;
    }
    scrollContainerRef?.current?.scrollTo({ x: 0, y: 0, animated: true });
    if (currentStepIndex + 1 < forms.length) {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };

  return (
    <AuthContainer
      header={`회원가입(${currentStepIndex + 1}/${forms.length})`}
      title={currentForm.title}
      description={currentForm.description}
      image={currentForm.image}
      imageStyle={currentForm.imageStyle}
      isAlignedRight={currentForm.isAlignedRight}
      innerRef={scrollContainerRef}
    >
      {(currentForm.forms as IFormItem[]).map((value: IFormItem) => {
        const { type, field, placeholder, key } = value;
        if (type === 'text') {
          return (
            <FormTextInput
              key={key}
              field={field}
              placeholder={placeholder}
            />
          );
        } else if (type === 'checkbox') {
          return (
            <FormCheckbox
              value={userInfo[key]}
              onChange={(v) => setUserInfo({ ...userInfo, [key]: v })}
            >
              {field}
            </FormCheckbox>
          );
        }
        return (
          <FormSelect
            key={key}
            field={field}
            value={userInfo.gender}
            onChange={(v) => setUserInfo({ ...userInfo, gender: v })}
            items={value.items}
          />
        );
      })}
      <FormButton
        onPress={onPressNextStep}
        style={isLastStep ? { marginTop: 24 } : undefined}
      >
        {isLastStep ? '시작하기' : '다음으로'}
      </FormButton>
    </AuthContainer>
  );
};
