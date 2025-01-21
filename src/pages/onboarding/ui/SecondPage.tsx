import styled from 'styled-components';
import { useRef, useState } from 'react';
import { SecondPageProps } from '@onboarding/types';
import BirthdayModal from '../components/BirthdayModal';
import ButtonBox from '../components/ButtonBox';
import HeightBox from '../components/HeightModal';

const SecondPage = ({ watch, register, setValue, getValues }: SecondPageProps) => {
  const rootRef = useRef<HTMLDivElement>(null);

  return (
    <Container ref={rootRef}>
      <Text>모디는 당신의 정보가 필요해요!</Text>
      <InputContainer>
        <BirthdayModal watch={watch} rootRef={rootRef} setValue={setValue} />
        <ButtonBox
          title={'성별'}
          register={register}
          setValue={setValue}
          getValues={getValues}
        ></ButtonBox>
        <HeightBox watch={watch} rootRef={rootRef} setValue={setValue} />
      </InputContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Text = styled.span`
  margin-top: 5vh;
  color: #ffffff;
  font-size: ${({ theme }) => theme.fonts.heading_bold_22px};
`;
const InputContainer = styled.div`
  width: 100%;
  margin-top: 10vh;

  display: flex;
  flex-direction: column;

  gap: 3vh;
`;

export default SecondPage;
