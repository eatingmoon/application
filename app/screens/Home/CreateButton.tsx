import React from 'react';
import ActionButton from 'react-native-action-button';
import { SvgXml } from 'react-native-svg';
import styled from 'styled-components/native';

import plusIconSvg from '../../assets/plus.svg';

export default () => {
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
