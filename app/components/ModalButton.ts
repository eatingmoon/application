import styled from 'styled-components/native';

import Button from './Button';

import { screenWidth } from '../utils/screenSize';

export default styled(Button).attrs({
  textStyle: {
    fontSize: 15,
    lineHeight: 15 * 1.2,
  },
})`
  border-radius: 7px;
  height: 56px;
  width: ${(screenWidth * 0.82 - 70) / 2}px;
`;
