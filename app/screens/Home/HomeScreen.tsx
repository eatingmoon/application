import { useNavigation } from '@react-navigation/native';
import React from 'react';
import styled from 'styled-components/native';

import Header from './Header';
import Carousel from './Carousel';
import Section from '../../components/Section';
import ExhibitionList from '../../components/ExhibitionList';
import ArtistList from '../../components/ArtistList';
import Divider from '../../components/Divider';
import ScrollContainer from '../../components/ContentWrapper/ScrollContainer';

export default () => {
  const navigation = useNavigation();

  return (
    <RelativeContainer>
      <ScrollContainer>
        <Header />
        <Carousel />
        <Section
          title="회원님을 위한 맞춤 전시회"
          onPressMore={() => navigation.navigate('ExhibitionList')}
        >
          <ExhibitionList />
        </Section>
        <Divider />
        <Section title="이달의 인기 작품">
          <ExhibitionList />
        </Section>
        <Divider />
        <Section title="태그별 전시회">
          <ExhibitionList />
        </Section>
        <Divider />
        <Section title="요즘 뜨는 아티스트">
          <ArtistList />
        </Section>
        <Section title="이 아티스트는 어때요?">
          <ArtistList />
        </Section>
      </ScrollContainer>
    </RelativeContainer>
  );
};

const RelativeContainer = styled.View`
  flex: 1;
`;
