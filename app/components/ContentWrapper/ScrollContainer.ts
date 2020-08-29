import styled from 'styled-components/native';

export default styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    flex: 1,
    alignItems: 'center',
  },
})`
  flex: 1;
`;
