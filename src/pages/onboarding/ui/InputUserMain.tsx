import styled from 'styled-components';
import FirstPage from '@onboarding/ui/FirstPage';
import SecondPage from '@onboarding/ui/SecondPage';
import ThirdPage from '@onboarding/ui/ThirdPage';
import FourthPage from '@onboarding/ui/FourthPage';
import { RegisterType } from '@onboarding/types';
const InputUserMain = ({
  curIdx,
  register,
  watch,
  setValue,
  getValues,
}: {
  curIdx: number;
  register: RegisterType;
}) => {
  return (
    <Container>
      {curIdx === 0 && <FirstPage register={register} watch={watch} setValue={setValue} />}
      {curIdx === 1 && <SecondPage register={register} setValue={setValue} />}
      {curIdx === 2 && <ThirdPage getValues={getValues} />}
      {curIdx === 3 && <FourthPage getValues={getValues} />}
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
