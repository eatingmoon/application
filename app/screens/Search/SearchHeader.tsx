import { useNavigation } from '@react-navigation/native';
import React from 'react';
import styled from 'styled-components/native';
import { SvgXml } from 'react-native-svg';

import { screenWidth } from '../../utils/screenSize';

import leftIconSvg from '../../assets/left.svg';
import searchIconSvg from '../../assets/search/search.svg';
import cancelIconSvg from '../../assets/search/cancel.svg';

interface ISearchHeader {
  query: string;
  onChangeQuery: (value: string) => void;
}

const SearchHeader: React.FC<ISearchHeader> = ({ query, onChangeQuery }) => {
  const navigation = useNavigation();

  return (
    <Container>
      <TouchableWrapper
        onPress={() => navigation.goBack()}
      >
        <IconWrapper>
          <LeftIcon />
        </IconWrapper>
      </TouchableWrapper>
      <SearchBarContainer>
        <SearchIcon />
        <SearchBar
          placeholder="검색어를 입력해 주세요."
          value={query}
          onChangeText={onChangeQuery}
        />
        <CancelIconWrapper>
          <CancelIcon />
        </CancelIconWrapper>
      </SearchBarContainer>
    </Container>
  );
};

export default SearchHeader;

const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 16.2px;
  padding-bottom: 14.5px;
  margin: 0 auto;
  width: ${screenWidth * 0.9}px;
`;

const TouchableWrapper = styled.TouchableWithoutFeedback`
`;

const IconWrapper = styled.View`
  padding: 10px;
  margin-left: ${screenWidth * 0.025}px;
  margin-right: 7.1px;
`;

const LeftIcon = styled(SvgXml).attrs({
  width: 15,
  height: 15,
  color: '#7A5CC5',
  xml: leftIconSvg,
})`
`;

const SearchBarContainer = styled.View`
  flex-direction: row;
  border-radius: 15px;
  border: solid 1px #c5c5c5;
  background-color: #fcfcfc;
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  height: 46px;
  padding-left: 11px;
  padding-right: 14px;
  elevation: 10;
`;

const SearchIcon = styled(SvgXml).attrs({
  width: 20,
  height: 20,
  color: '#7a5cc5',
  xml: searchIconSvg,
})`
`;

const SearchBar = styled.TextInput`
  margin-left: 8px;
  font-size: 18px;
  line-height: ${1.2 * 18}px;
  color: #000000;
`;

const CancelIconWrapper = styled.View`
  margin-left: auto;
`;

const CancelIcon = styled(SvgXml).attrs({
  width: 17,
  height: 17,
  color: '#ececec',
  xml: cancelIconSvg,
})`
`;
