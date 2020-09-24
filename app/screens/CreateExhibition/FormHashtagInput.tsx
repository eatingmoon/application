import React from 'react';
import styled from 'styled-components/native';

import Hashtag from '../../components/Hashtag';
import { screenWidth } from '../../utils/screenSize';

interface IFormHashtagInput {
  field?: string;
  hashtags: string[];
  setHashtags: (hashtags: string[]) => void;
}

const AllHashtags = ["수채화","일러스트","민화","판화","사진","캐리커쳐","조형","유화","수묵화","조각","콜라쥬","삽화","아크릴화","CG","소묘"];

export default ({ field, hashtags, setHashtags }: IFormHashtagInput) => {
  return (
    <Wrapper>
      {field && (
        <Field>
          {field}
        </Field>
      )}
      <HashtagList>
        {AllHashtags.map((value) => (
          <Hashtag
            key={value}
            onPress={() => {
              if (hashtags.includes(value))
                setHashtags(hashtags.filter((v: string) => v !== value));
              else setHashtags([...hashtags, value]);
            }}
            isSelected={hashtags.includes(value)}
          >
            {value}
          </Hashtag>
        ))}
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
  flex-wrap: wrap;
`;
