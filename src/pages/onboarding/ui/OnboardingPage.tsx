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
  padding: 16px 20px;

  background-color: ${({ theme }) => theme.colors.gray900};
`;
