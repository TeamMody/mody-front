import Logo from '@shared/assets/icon/ic-inputuser-logo.svg?react';
import InputField from '@onboarding/components/InputField';
import Message from '@onboarding/components/Message';
import { LoginSchema, LoginSchemaType } from '@onboarding/schema';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import TypeLetter from '@onboarding/components/TypeLetter';
import useLoginMutation from '@onboarding/hooks/useLoginMutation';

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
    mode: 'onChange',
  });
  const loginMutation = useLoginMutation();

  return (
    <Wrapper>
      <CustomLogo topMargin={'6.4vh'} />
      <Form
        onSubmit={handleSubmit((data: LoginSchemaType) => {
          loginMutation.mutate(data);
        })}
      >
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
  position: relative;
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
  width: 100%;
  height: 13vh;
`;

const Button = styled.button<{ active: boolean }>`
  position: absolute;
  padding-top: 19px;
  padding-bottom: 19px;
  width: 100%;
  bottom: -28vh;
  background-color: ${({ theme, active }) =>
    active ? theme.colors.green500 : theme.colors.gray500};
  color: ${({ active }) => (active ? 'black' : 'white')};
`;
