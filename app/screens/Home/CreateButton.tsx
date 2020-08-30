import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import ActionButton from 'react-native-action-button';
import { SvgXml } from 'react-native-svg';
import styled from 'styled-components/native';

import Modal from '../../components/Modal';

import plusIconSvg from '../../assets/plus.svg';

export default () => {
  const navigation = useNavigation();
  const [isCreateModalShown, setIsCreateModalShown] = useState<boolean>(false);

  return (
    <>
      <ActionButton
        buttonColor="white"
        renderIcon={() => <PlusIcon />}
        size={71}
        shadowStyle={{
          shadowColor: 'black',
          shadowRadius: 6,
          shadowOpacity: 0.16,
          shadowOffset: {
            width: 0,
            height: 3,
          },
        }}
        onPress={() => setIsCreateModalShown(true)}
      />
      <Modal
        isVisible={isCreateModalShown}
        onPressConfirm={() => setIsCreateModalShown(false)}
        title="제작하기"
        description="무엇을 제작하실지 선택해 주세요."
        leftButton="전시회"
        onPressLeftButton={() => navigation.navigate('CreateExhibition')}
        rightButton="작품"
      />
    </>
  );
};

const PlusIcon = styled(SvgXml).attrs({
  width: 26,
  height: 26.3,
  color: '#7458bc',
  xml: plusIconSvg,
})`
`;
