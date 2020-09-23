import React from 'react';
import styled from 'styled-components/native';

const ImageSelectedMarker: React.FC = ({ children }) => {
  return (
    <Container>
      <Text>
        {children}
      </Text>
    </Container>
  );
}

export default ImageSelectedMarker;

const Container = styled.View`
  position: absolute;
  top: 5;
  right: 5;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  border-radius: ${25 / 2}px;
  border: solid 2px rgba(255, 255, 255, 0.8);
  background-color: #7a5cc5;
`;

const Text = styled.Text`
  font-weight: bold;
  font-size: 15px;
  line-height: ${15 * 1.2}px;
  color: #ffffff;
`;
