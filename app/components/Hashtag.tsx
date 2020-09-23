import React from 'react';
import styled, { css } from 'styled-components/native';

interface ISelected {
  isSelected?: boolean;
}

interface IHashtag extends ISelected {
  children?: React.ReactNode;
}

export default ({ children, isSelected = false }: IHashtag) => {
  return (
    <Container isSelected={isSelected}>
      <Text isSelected={isSelected}>
        {children}
      </Text>
    </Container>
  );
};

const Container = styled.View<ISelected>`
  margin-right: 8px;
  margin-bottom: 9px;
  border-radius: 22px;
  border: solid 1px #d4d4d4;
  background-color: #ffffff;
  padding: 15px 19px;
  elevation: 6;

  ${({ isSelected }) => isSelected && css`
    background-color: #7a5cc5;
  `};
`;

const Text = styled.Text<ISelected>`
  font-weight: bold;
  font-size: 14px;
  line-height: ${14 * 1.21}px;
  color: #d4d4d4;

  ${({ isSelected }) => isSelected && css`
    color: #ffffff;
  `};
`;
