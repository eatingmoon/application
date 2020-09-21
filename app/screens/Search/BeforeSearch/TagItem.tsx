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
  margin-right: 15px;
  margin-top: 9px;
`;

const TagContainer = styled.View`
  align-self: flex-start;
  background-color: #7a5cc5;
  padding: 4px 10px;
  border-radius: 12px;
  elevation: 3;
`;

const TagText = styled.Text`
  align-self: flex-start;
  font-weight: 500;
  font-size: 13px;
  line-height: ${13 * 1.23}px;
  color: #f6f6f6;
`;
