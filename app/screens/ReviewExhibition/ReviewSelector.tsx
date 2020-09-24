import React, { useState } from 'react';
import { SvgXml as Icon } from 'react-native-svg';
import styled from 'styled-components/native';

import starEmpty from '../../assets/review/star_empty.svg';
import starHalf from '../../assets/review/star_half.svg';
import starFull from '../../assets/review/star_full.svg';

interface IReviewSelector {
  value: number;
  setValue: (value: number) => void;
}

const ReviewSelector: React.FC<IReviewSelector> = ({ value, setValue }) => {
  const [previousPressed, setPreviousPressed] = useState<number | undefined>();
  const [previousValue, setPreviousValue] = useState<number>(0);

  return (
    <Container>
      {[...Array(5)].map((_, index) => {
        const iconXML = (value >= (index + 1))
          ? starFull
          : (index < value && value < (index + 1))
            ? starHalf
            : starEmpty;

        const onPressStar = () => {
          const isPreviouslyPressed = (previousPressed !== undefined && previousPressed === index);
          const currentValue = isPreviouslyPressed ?
            ((previousValue === 0) ? 0.5 : (previousValue === 0.5) ? 1 : 0) : 0;
          const starValue = (index * 1) + currentValue;
          setPreviousPressed(index);
          setPreviousValue(currentValue);
          setValue(starValue);
        };

        return (
          <IconWrapper>
            <TouchableWrapper
              onPress={onPressStar}
            >
              <Icon
                width={26}
                height={26}
                xml={iconXML}
                color="#7a5cc5"
              />
            </TouchableWrapper>
          </IconWrapper>
        );
      })}
    </Container>
  );
};

export default ReviewSelector;

const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

const IconWrapper = styled.View`
  margin-right: 4.3px;
`;

const TouchableWrapper = styled.TouchableWithoutFeedback`
`;
