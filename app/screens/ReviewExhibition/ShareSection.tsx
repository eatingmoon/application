import React from 'react';
import Share from "react-native-share";
import styled from 'styled-components/native';

import ShareIcon from './ShareIcon';
import { screenWidth } from '../../utils/screenSize';

interface IShareSection {}

const ShareSection: React.FC<IShareSection> = () => {
  const shareIcons = [
    { image: require('../../assets/review/icons/kakaotalk.png') },
    { image: require('../../assets/review/icons/facebook.png') },
    { image: require('../../assets/review/icons/twitter.png') },
    {
      image: require('../../assets/review/icons/share.png'),
      onPress: () => {
        Share.open({
          title: '당신의 작품을, 널리',
          message: '널리를 통해 새로운 아티스트를 만나보세요!',
          url: 'https://play.google.com/store/apps/details?id=com.nully',
        })
          .then((res: any) => { console.log(res) })
          .catch((err: Error) => { err && console.log(err); });
      },
    },
  ];

  return (
    <Container>
      <SectionTitle>
        이 아티스트를 널리 알려주세요!
      </SectionTitle>
      <ShareIconList>
        {shareIcons.map(({ image, onPress }, index) => (
          <ShareIcon
            key={`icon-${index}`}
            image={image}
            onPress={onPress}
            style={{ marginRight: (index !== shareIcons.length - 1) ? 25 : 0 }}
          />
        ))}
      </ShareIconList>
    </Container>
  );
};

export default ShareSection;

const Container = styled.View`
  width: ${screenWidth * 0.9}px;
  margin: 40px 0;
`;

const SectionTitle = styled.Text`
  font-weight: bold;
  font-size: 18px;
  line-height: ${18 * 1.22}px;
  color: #000000;
`;

const ShareIconList = styled.View`
  flex-direction: row;
  margin-top: 33px;
  align-items: center;
  justify-content: center;
`;
