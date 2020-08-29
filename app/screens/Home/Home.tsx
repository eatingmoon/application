import React from 'react';
import styled from 'styled-components/native';

import Header from './Header';
import Carousel from './Carousel';
import Section from './Section';
import ExhibitionList from '../../components/ExhibitionList';
import Divider from '../../components/Divider';
import ScrollContainer from '../../components/ContentWrapper/ScrollContainer';

export default () => {
  return (
    <ScrollContainer>
      <Header />
      <Carousel />
      <Section title="회원님을 위한 맞춤 전시회">
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
      <Section title="요즘 뜨는 아티스트"></Section>
      <Section title="이 아티스트는 어때요?"></Section>
    </ScrollContainer>
  );
};
