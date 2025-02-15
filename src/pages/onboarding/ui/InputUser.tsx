import styled from 'styled-components';
import { useEffect, useState } from 'react';
import ProgressBar from '@shared/ui/ProgressBar';
import Logo from '@shared/assets/icon/ic-inputuser-logo.svg?react';
import { useForm } from 'react-hook-form';
import InputUserMain from '@onboarding/ui/InputUserMain';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router';
import { handleOnSubmit } from '@onboarding/feature/utils/handleOnSubmit';
import { UserInfoSchema, UserInfoSchemaType } from '@onboarding/feature/schema';
import { RecommendationType } from '@shared/types';

export const InputUser = () => {
  const [curIdx, setCurIdx] = useState<number>(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
  const navigate = useNavigate();

  const {
    register,
    getValues,
    setValue,
    watch,
    formState: { errors },
  } = useForm<UserInfoSchemaType>({
    resolver: zodResolver(UserInfoSchema),
    mode: 'onChange',
    defaultValues: {
      birthday: {
        year: 1996,
        month: 4,
        day: 11,
      },
      height: 160,
    },
  });

  const handleButtonClick = () => {
    if (curIdx < 3) setCurIdx((prev) => ++prev);
    if (curIdx === 3) navigate('body-survey', { state: { type: RecommendationType.BODY_TYPE } });
  };

  const handleIsValid = (curIdx: number): boolean => {
    if (curIdx === 0) {
      const nickname = watch('nickname');
      return nickname === '' || !!errors.nickname;
    }
    if (curIdx === 1) {
      return watch('sex')?.length === 0;
    }

    return false;
  };

  useEffect(() => {
    setIsButtonDisabled(handleIsValid(curIdx));
  }, [curIdx, watch(), errors]);

  // 값이 바뀔 때마다 전체 값이 렌더링되는 현상 발생
  return (
    <Wrapper onSubmit={(e) => handleOnSubmit(e, curIdx, getValues)}>
      <ProgressBar length={4} curIdx={curIdx} />
      <CustomLogo />
      <InputUserMain
        curIdx={curIdx}
        register={register}
        watch={watch}
        setValue={setValue}
        getValues={getValues}
      />
      <ButtonContainer>
        <Button
          type={curIdx !== 2 ? 'button' : 'submit'}
          onClick={handleButtonClick}
          disabled={isButtonDisabled}
        >
          {curIdx !== 3 ? '다음' : '체형 분석하기'}
        </Button>
      </ButtonContainer>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  max-width: 440px;
  padding: 16px 20px;
  background-color: ${({ theme }) => theme.colors.gray900};
  overflow-y: auto;
`;

const CustomLogo = styled(Logo)`
  margin-top: 16px;
  width: 104px;
  height: 33px;
`;

const ButtonContainer = styled.div`
  width: 100%;
  margin-top: auto;
`;

const Button = styled.button<{ disabled: boolean }>`
  margin-top: 35px;
  width: 100%;
  height: 7vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.colors.gray800 : theme.colors.green500};
  color: black;
`;
