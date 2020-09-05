import React from 'react';
import styled from 'styled-components/native';

import AuthHeader from './AuthHeader';
import ScrollContainer from '../ScrollContainer';

export default () => {
  return (
    <ScrollContainer>
      <AuthHeader>
        회원가입(1/3)
      </AuthHeader>
    </ScrollContainer>
  );
};
