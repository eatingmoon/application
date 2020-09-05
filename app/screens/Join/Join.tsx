import React from 'react';
import styled from 'styled-components/native';

import FormTextInput from './FormTextInput';
import FormButton from './FormButton';
import AuthContainer from '../../components/ContentWrapper/AuthContainer';
import { screenWidth } from '../../utils/screenSize';

export default () => {
  return (
    <AuthContainer
      title={'이름과 함께\n널리에서 사용할\n아이디를\n정해주세요.'}
      description="여러분을 불러드릴 수 있게요."
      image={require('../../assets/illusts/nout.png')}
      imageStyle={{
        width: 259,
        height: 209,
        right: -90,
        bottom: 7,
      }}
    >
      <FormTextInput
        field="아이디"
        placeholder="아이디를 입력하세요."
      />
      <FormTextInput
        field="비밀번호"
        placeholder="비밀번호를 입력하세요."
      />
      <FormButton>다음으로</FormButton>
    </AuthContainer>
  );
};
