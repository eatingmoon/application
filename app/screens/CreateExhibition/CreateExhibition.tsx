import React from 'react';
import styled from 'styled-components/native';

import FormWrapper from './FormWrapper';
import BasicSettings from './BasicSettings';
import PieceSettings from './PieceSettings';

export default () => {
  return (
    <FormWrapper>
      {/* <BasicSettings /> */}
      <PieceSettings />
    </FormWrapper>
  );
};
