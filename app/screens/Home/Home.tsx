import React from 'react';
import styled from 'styled-components/native';

import Header from './Header';
import Carousel from './Carousel';
import ScrollContainer from '../../components/ContentWrapper/ScrollContainer';

export default () => {
  return (
    <ScrollContainer>
      <Header />
      <Carousel />
    </ScrollContainer>
  );
};
