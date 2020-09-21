import React from 'react';
import styled from 'styled-components/native';

import ContainerWrapper from './ContainerWrapper';
import ContainerTitle from './ContainerTitle';
import TagItem from './TagItem';

interface ITagContainer {}

const TagContainer: React.FC<ITagContainer> = () => {
  return (
    <ContainerWrapper>
      <ContainerTitle>
        인기 급상승 태그
      </ContainerTitle>
      <TagList>
        {exampleTags.map((tag) => (
          <TagItem
            key={tag}
            onPress={() => {}}
          >
            {tag}
          </TagItem>
        ))}
      </TagList>
    </ContainerWrapper>
  );
};

export default TagContainer;

const exampleTags = ['수채화', '소묘', '캐리커쳐', '조각', '사진', 'CG', '아크릴화', '수묵화', '유화'];

const TagList = styled.View`
`;
