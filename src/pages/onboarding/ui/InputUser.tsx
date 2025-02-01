import styled from 'styled-components';
import { useEffect, useState } from 'react';
import ProgressBar from '@shared/ui/ProgressBar';
import Logo from '@shared/assets/icon/ic-inputuser-logo.svg?react';
import { useForm } from 'react-hook-form';
import InputUserMain from '@onboarding/ui/InputUserMain';
import { UserInfoSchema, UserInfoSchemaType } from '@onboarding/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import useAuthStore from '@shared/store/token';
import { apiInstance } from '@shared/apis/instance';
export const InputUser = () => {
  const [curIdx, setCurIdx] = useState<number>(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
  const { accessToken } = useAuthStore();

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
  };
  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { birthday, height, sex, image, nickname } = getValues();
    console.log(image);
    let presignedURL;
    if (image.length === 0) {
      presignedURL = '';
    } else {
      const imgFile = image[0];
      console.log(imgFile);
      const res = await apiInstance.post('/image/upload/profiles', image[0]);
      console.log(res);
    }

    const body = {
      nickname,
      birthday: `${birthday.year}-${birthday.month}-${birthday.day}`,
      gender: sex,
      height,
    };
    console.log(body);
    console.log(birthday, sex, height, image, nickname);
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
    <Wrapper onSubmit={handleOnSubmit}>
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
          type={curIdx !== 3 ? 'button' : 'submit'}
          onClick={curIdx !== 3 ? handleButtonClick : undefined}
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
