import styled from 'styled-components';
import FirstPage from '@onboarding/ui/FirstPage';
import SecondPage from '@onboarding/ui/SecondPage';
const InputUserMain = ({ curIdx }: { curIdx: number }) => {
  return (
    <Container>
      {curIdx === 0 && <FirstPage />}
      {curIdx === 1 && <SecondPage />}
    </Container>
  );
};

const Container = styled.main`
  width: 100%;
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default InputUserMain;
