import styled from 'styled-components';
import { useEffect, useState } from 'react';
import ProgressBar from '@shared/ui/ProgressBar';
import Logo from '@shared/assets/icon/ic-inputuser-logo.svg?react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import InputUserMain from '@onboarding/ui/InputUserMain';
import { UserInfoSchema, UserInfoSchemaType } from '@onboarding/schema';
import { zodResolver } from '@hookform/resolvers/zod';

export const InputUser = () => {
  const [curIdx, setCurIdx] = useState<number>(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    watch,
    formState: { errors, isValid },
  } = useForm<UserInfoSchemaType>({
    resolver: zodResolver(UserInfoSchema),
    mode: 'onChange',
  });

  const handleButtonClick = () => {
    if (curIdx < 3) setCurIdx((prev) => ++prev);
    else {
      navigate('/body-survey');
    }
  };

  const handleIsValid = (curIdx: number): boolean => {
    console.log(watch());
    console.log(errors);
    if (curIdx === 0) {
      const nickname = watch('nickname');
      return nickname?.length === 0 || !!errors.nickname;
    }
    if (curIdx === 1) {
      return (
        watch('birthday')?.length === 0 ||
        watch('sex')?.length === 0 ||
        watch('height')?.length === 0
      );
    }
    return false;
  };
  useEffect(() => {
    setIsButtonDisabled(handleIsValid(curIdx));
  }, [curIdx, watch(), errors]);
  // 값이 바뀔 때마다 전체 값이 렌더링되는 현상 발생
  return (
    <Wrapper>
      <ProgressBar length={4} curIdx={curIdx} />
      <CustomLogo />
      <InputUserMain
        curIdx={curIdx}
        register={register}
        watch={watch}
        setValue={setValue}
        getValues={getValues}
      />
      <Button type="button" onClick={handleButtonClick} disabled={isButtonDisabled}>
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

const Button = styled.button<{ disabled: boolean }>`
  width: 90%;
  height: 7vh;
  position: absolute;
  display: flex;
  bottom: 4vh;
  align-items: center;
  justify-content: center;
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.colors.gray800 : theme.colors.green500};
  color: black;
`;
