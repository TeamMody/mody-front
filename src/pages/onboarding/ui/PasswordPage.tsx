import styled from 'styled-components';
import CheckPassword from '../components/CheckPassword';
import { useEffect } from 'react';
import { PasswordSchema, PasswordSchemaType } from '../schema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import DoubleChekPassword from '../components/DoubleCheckPassword';
import Message from '../components/Message';
import { StateProps } from '@shared/types';
import useSignupStore from '@onboarding/store/signup';

interface PasswordPageProps extends StateProps<boolean> {}

const PasswordPage = ({ setValue: setButtonActive }: PasswordPageProps) => {
  const schema = PasswordSchema;

  const {
    register,
    formState: { errors, touchedFields },
    watch,
    setValue,
  } = useForm<PasswordSchemaType>({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });
  const { password, passwordConfirm } = watch();
  const { setPassword } = useSignupStore();

  useEffect(() => {
    if (!errors.password && !errors.passwordConfirm && passwordConfirm === password) {
      setPassword(password);
      setButtonActive(true);
    } else {
      setButtonActive(false);
    }
  }, [
    errors.password,
    errors.passwordConfirm,
    touchedFields.passwordConfirm,
    password,
    passwordConfirm,
  ]);
  return (
    <Form>
      {/* 비밀번호 유효성 검사 실패 시 메시지 출력, 성공시 더블체크 패스워드 컴포넌트 렌더링 */}
      <CheckPassword register={register} errors={errors} touchedFields={touchedFields} />
      {touchedFields.password && errors.password ? (
        <Message isvalid={!errors.password} message={errors.password?.message} />
      ) : watch('password') && !errors.password ? (
        <DoubleChekPassword
          setValue={setValue}
          watch={watch}
          register={register}
          errors={errors}
          touchedFields={touchedFields}
          password={password}
          passwordConfirm={passwordConfirm}
        />
      ) : null}
    </Form>
  );
};
const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10.6vh auto;
  width: 90%;
  height: 100%;
`;
export default PasswordPage;
