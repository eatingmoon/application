import styled from 'styled-components/native';

import Button from './Button';

import { screenWidth } from '../utils/screenSize';

export default styled(Button)`
  border-radius: 7px;
  height: 56px;
  width: ${(screenWidth * 0.82 - 70) / 2}
`;
