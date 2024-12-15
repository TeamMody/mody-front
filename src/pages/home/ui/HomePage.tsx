import styled from 'styled-components';

export const HomePage = () => {
  return (
    <Wrapper>
      <h1>fdasdsafdfsa</h1>
      <button>안녕</button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  max-width: 480px;
  height: 100vh;

  background-color: ${({ theme }) => theme.colors.gray900};
`;
