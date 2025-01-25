import Logo from '@shared/assets/icon/ic-inputuser-logo.svg?react';
import InputField from '@onboarding/components/InputField';
import Message from '@onboarding/components/Message';
import { LoginSchema, LoginSchemaType } from '../schema';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import TypeLetter from '@onboarding/components/TypeLetter';
import { useMutation } from '@tanstack/react-query';
import { apiInstance } from '@shared/apis/instance';
import useAuthStore from '@shared/store/token';
import axios, { AxiosError } from 'axios';

interface ErrorResponse {
  message: string;
  status: number;
}

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
    mode: 'onChange',
  });

  const loginMutation = useMutation({
    mutationFn: async (data: LoginSchemaType) => {
      const response = await apiInstance.post('/auth/login', data);
      return response;
    },
    onSuccess: (data) => {
      // 예: 토큰 저장 후 페이지 리다이렉트
      const accessToken = data.headers.authorization.split(' ')[1];
      const { setAccessToken } = useAuthStore.getState();
      setAccessToken(accessToken);

      alert('로그인이 완료되었습니다.');
      window.location.href = '/';
    },
    onError: (error: AxiosError) => {
      const axiosError = error as AxiosError<ErrorResponse>;
      if (error.status === 401 && axiosError.response?.data) {
        alert(axiosError.response.data.message);
      } else {
        alert('서버에 문제가 있다.');
      }
    },
  });

  const handleLogin = (data: LoginSchemaType) => {
    loginMutation.mutate(data);
  };
  return (
    <Wrapper>
      <CustomLogo topMargin={'6.4vh'} />
      <Form onSubmit={handleSubmit(handleLogin)}>
        <InputWrapper>
          <TypeLetter type="이메일" />
          <InputField
            placeholder="이메일을 입력해주세요."
            type="email"
            register={register('email')}
            isvalid={isValid || !errors.email}
          />
          {errors.email && <Message isvalid={!errors.email} message={errors.email?.message} />}
        </InputWrapper>
        <InputWrapper>
          <TypeLetter type="비밀번호" />
          <InputField
            placeholder="비밀번호를 입력해주세요."
            type="password"
            register={register('password')}
            isvalid={isValid || !errors.password}
          />
          {errors.password && (
            <Message isvalid={!errors.password} message={errors.password?.message} />
          )}
        </InputWrapper>
        <Button type="submit" active={isValid}>
          로그인
        </Button>
      </Form>
    </Wrapper>
  );
};

export default SignIn;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  max-width: 440px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.gray900};
`;

const CustomLogo = styled(Logo)<{ topMargin: string }>`
  margin-top: ${(props) => `calc(4.5vh + ${props.topMargin})`};
  position: absolute;
  z-index: 1;
`;

const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin-top: 40vh;
  gap: 2vh;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: 100%;
`;

const Button = styled.button<{ active: boolean }>`
  margin-top: 25vh;
  padding-top: 19px;
  padding-bottom: 19px;
  width: 80%;
  background-color: ${({ theme, active }) =>
    active ? theme.colors.green500 : theme.colors.gray500};
  color: ${({ active }) => (active ? 'black' : 'white')};
`;
