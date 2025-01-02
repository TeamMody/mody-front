import styled from 'styled-components';

export const OnboardingPage = () => {
  return (
    <Wrapper>
      <h1>온보딩</h1>
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
