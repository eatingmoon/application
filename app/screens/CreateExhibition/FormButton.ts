import styled from 'styled-components/native';

import Button from '../../components/Button';

import { screenWidth } from '../../utils/screenSize';

export default styled(Button).attrs({
  isBiggerText: true,
})`
  height: 65px;
  width: ${screenWidth / 2}px;
  border: solid 1px #d1d1d1;
`;
