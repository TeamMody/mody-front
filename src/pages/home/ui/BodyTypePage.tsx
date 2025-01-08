import styled from 'styled-components';

export const BodyTypePage = () => {
  return (
    <Wrapper>
      하이
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 440px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.gray900};
`;
