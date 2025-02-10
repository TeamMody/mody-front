import styled from 'styled-components';
import FirstPage from '@onboarding/ui/FirstPage';
import SecondPage from '@onboarding/ui/SecondPage';
import ThirdPage from '@onboarding/ui/ThirdPage';
import FourthPage from '@onboarding/ui/FourthPage';
import { InputUserMainProps } from '@onboarding/types';

const InputUserMain = ({ curIdx, register, watch, setValue, getValues }: InputUserMainProps) => {
  return (
    <Container>
      {curIdx === 0 && <FirstPage register={register} watch={watch} setValue={setValue} />}
      {curIdx === 1 && (
        <SecondPage watch={watch} register={register} setValue={setValue} getValues={getValues} />
      )}
      {curIdx === 2 && <ThirdPage />}
      {curIdx === 3 && <FourthPage />}
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
