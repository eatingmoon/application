import styled from 'styled-components/native';

export default styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: 'center',
  },
})`
  flex: 1;
`;
