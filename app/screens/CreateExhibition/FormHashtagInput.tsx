import React from 'react';
import styled from 'styled-components/native';

import Hashtag from '../../components/Hashtag';
import { screenWidth } from '../../utils/screenSize';

interface IFormHashtagInput {
  field?: string;
}

export default ({ field }: IFormHashtagInput) => {
  return (
    <Wrapper>
      {field && (
        <Field>
          {field}
        </Field>
      )}
      <HashtagList>
        <Hashtag>따뜻한</Hashtag>
        <Hashtag isSelected>일러스트</Hashtag>
        <Hashtag>조각</Hashtag>
        <Hashtag>그림</Hashtag>
      </HashtagList>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  margin-bottom: 24px;
`;

const Field = styled.Text`
  width: ${screenWidth * 0.8}px;
  margin-bottom: 8px;
  font-size: 18px;
  line-height: ${18 * 1.22}px;
  color: #000000;
  font-weight: bold;
`;

const HashtagList = styled.View`
  width: ${screenWidth * 0.8}px;
  flex-direction: row;
`;
