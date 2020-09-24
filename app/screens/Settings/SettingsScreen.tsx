import { useNavigation } from '@react-navigation/native';
import React from 'react';
import styled from 'styled-components/native';

import ScrollContainer from '../../components/ContentWrapper/ScrollContainer';
import Header from '../../components/BasicHeader';
import { screenWidth } from "../../utils/screenSize";
import SettingsItem from './SettingsItem';

import icons from './settingIcons';

const SmallVersion = styled.Text`
  font-weight: 500;
  font-size: 12px;
  line-height: ${12 * 1.17}px;
  color: #808080;
`;

const settingItems = {
  account: [
    { title: '개인 정보 수정', icon: icons[0] },
    { title: '비밀번호 변경', icon: icons[1] },
    { title: '알림 설정', icon: icons[2] },
  ],
  support: [
    { title: '공지사항', icon: icons[3] },
    { title: '내 신고함', icon: icons[4] },
  ],
  informations: [
    {
      title: '널리 이용 가이드', icon: icons[5], route: 'Document',
      props: { uri: 'https://www.notion.so/d77bb0856145495588d31cae93009ce8' },
    },
    {
      title: '서비스 이용 약관', icon: icons[6], route: 'Document',
      props: { uri: 'https://www.notion.so/90c4468627524b6d9ad6f688dfcd02c4' },
    },
    {
      title: '개인 정보 보호 정책', icon: icons[7], route: 'Document',
      props: { uri: 'https://www.notion.so/78501c09b2ec466ab6a29ce5da3ff86b' },
    },
  ],
  update: [
    {
      title: '앱 버전',
      icon: icons[8],
      rightComponent: <SmallVersion>1.01</SmallVersion>,
    },
  ],
};

export default () => {
  const navigation = useNavigation();

  const onPressItem = (item: any) => item.route
    ? navigation.navigate(item.route, {
      title: item.title,
      ...item.props })
    : undefined;

  return (
    <RelativeContainer>
      <ScrollContainer>
        <Header
          onPressBack={() => navigation.goBack()}
        >
          설정
        </Header>
        <Title style={{ marginTop: 18, }}>계정</Title>
        <Section>
          {settingItems.account.map(({ ...item }, index) => (
            <SettingsItem
              key={`info-${index}`}
              showBottomDivider={index !== settingItems.account.length - 1}
              onPress={() => onPressItem(item)}
              {...item}
            />
          ))}
        </Section>
        <Title style={{ marginTop: 20.5, }}>고객지원</Title>
        <Section>
          {settingItems.support.map(({ ...item }, index) => (
            <SettingsItem
              key={`info-${index}`}
              showBottomDivider={index !== settingItems.account.length - 1}
              onPress={() => onPressItem(item)}
              {...item}
            />
          ))}
        </Section>
        <Title style={{ marginTop: 62.5, }}>정보</Title>
        <Section>
          {settingItems.informations.map(({ ...item }, index) => (
            <SettingsItem
              key={`info-${index}`}
              showBottomDivider={index !== settingItems.account.length - 1}
              onPress={() => onPressItem(item)}
              {...item}
            />
          ))}
        </Section>
        <Title style={{ marginTop: 20.5, }}>업데이트</Title>
        <Section style={{ marginBottom: 81 }}>
          {settingItems.update.map(({ ...item }, index) => (
            <SettingsItem
              key={`info-${index}`}
              {...item}
            />
          ))}
        </Section>
      </ScrollContainer>
    </RelativeContainer>
  );
};

const RelativeContainer = styled.View`
  flex: 1;
`;

const Title = styled.Text`
  width: ${screenWidth * 0.9}px;
  font-weight: bold;
  font-size: 19px;
  line-height: ${19 * 1.21}px;
  color: #000000;
`;

const Section = styled.View`
  width: 100%;
  border-top-color: rgba(122, 92, 197, 0.16);
  border-top-width: 1px;
  border-bottom-color: rgba(122, 92, 197, 0.16);
  border-bottom-width: 1;
  margin-top: 13.5px;
  align-items: center;
`;
