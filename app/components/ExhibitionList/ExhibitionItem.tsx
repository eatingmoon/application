import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SvgXml } from 'react-native-svg';
import styled from 'styled-components/native';

import { screenWidth } from '../../utils/screenSize';

import starIconSvg from '../../assets/star.svg';
import placeholderImage from '../../assets/placeholder-night.png';

export default () => {
  const navigation = useNavigation();

  return (
    <TouchableWrapper
      onPress={() => navigation.navigate('ViewExhibition')}
    >
      <Container>
        <ExhibitionImage
          source={placeholderImage}
        />
        <ExhibitionTitle>
          하얗고 반투명한{'\n'}
          캔버스들의 모임
        </ExhibitionTitle>
        <ExhibitionInformation>
          <CreatorName>
            김성우
          </CreatorName>
          <RatingWrapper>
            <RatingIcon />
            <RatingScore>
              4.9
            </RatingScore>
          </RatingWrapper>
        </ExhibitionInformation>
      </Container>
    </TouchableWrapper>
  );
};

const TouchableWrapper = styled.TouchableWithoutFeedback`
`;

const Container = styled.View`
  width: 130px;
  margin-right: ${screenWidth * 0.05}px;
`;

const ExhibitionImage = styled.Image`
  width: 130px;
  height: 130px;
  border-radius: 5px;
`;

const ExhibitionTitle = styled.Text`
  font-size: 18px;
  line-height: ${18 * 1.22}px;
  color: #343a40;
  margin-top: 11px;
`;

const ExhibitionInformation = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
`;

const CreatorName = styled.Text`
  font-size: 13px;
  line-height: ${13 * 1.23}px;
  color: #868e96;
`;

const RatingWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const RatingIcon = styled(SvgXml).attrs({
  width: 13.4,
  height: 12.7,
  color: "#ac92ec",
  xml: starIconSvg,
})`
`;

const RatingScore = styled.Text`
  font-size: 13px;
  line-height: ${13 * 1.23}px;
  color: #ac92ec;
  margin-left: 4.3px;
`;
