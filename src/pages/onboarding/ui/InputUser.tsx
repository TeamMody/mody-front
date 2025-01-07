import styled from 'styled-components';
import { useState } from 'react';
import ProgressBar from '@shared/ui/ProgressBar';
import Logo from '@shared/assets/icon/ic-inputuser-logo.svg?react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import InputUserMain from '@onboarding/ui/InputUserMain';

export const InputUser = () => {
  const [curIdx, setCurIdx] = useState<number>(0);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (curIdx < 3) setCurIdx((prev) => ++prev);
    else {
      navigate('/body-survey');
    }
  };
  return (
    <Wrapper>
      <ProgressBar length={4} curIdx={curIdx} />
      <CustomLogo />
      <InputUserMain curIdx={curIdx} />
      <Button type="button" onClick={handleButtonClick}>
        {curIdx !== 3 ? '다음' : '체형 분석하기'}
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  max-width: 440px;
  height: 100vh;
  padding: 16px 20px;
  background-color: ${({ theme }) => theme.colors.gray900};
`;

const CustomLogo = styled(Logo)`
  margin-top: 16px;
`;

const Button = styled.button`
  width: 90%;
  height: 7vh;
  position: absolute;
  display: flex;
  bottom: 4vh;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.green500};
  color: black;
`;
