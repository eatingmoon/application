import React from 'react';
import styled from 'styled-components/native';

interface ITagItem {
  children: string;
  onPress: (tag: string) => void;
}

const TagItem: React.FC<ITagItem> = ({
  children,
  onPress,
}) => {
  return (
    <TouchableWrapper
      onPress={() => onPress(children)}
    >
      <TagContainer>
        <TagText>
          {children}
        </TagText>
      </TagContainer>
    </TouchableWrapper>
  );
};

export default TagItem;

const TouchableWrapper = styled.TouchableOpacity`
`;

const TagContainer = styled.View`
`;

const TagText = styled.Text`
`;
