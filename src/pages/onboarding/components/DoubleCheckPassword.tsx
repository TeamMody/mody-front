import InputField from './InputField';
import TypeLetter from './TypeLetter';
import Message from './Message';
import styled from 'styled-components';
import { PasswordSchemaType } from '../feature/schema';
import { FieldProps } from '@shared/types';
import { UseFormSetValue, UseFormWatch } from 'react-hook-form';
import { useEffect } from 'react';

interface DoubleChekPasswordProps extends FieldProps<PasswordSchemaType> {
  watch: UseFormWatch<PasswordSchemaType>;
  password: string;
  passwordConfirm: string;
  setValue: UseFormSetValue<PasswordSchemaType>;
}
const DoubleChekPassword = ({
  errors,
  touchedFields,
  register,
  setValue,
  password,
  passwordConfirm,
}: DoubleChekPasswordProps) => {
  // 비밀번호와 비밀번호 확인이 일치하는지 확인
  const isPasswordMatch = password && passwordConfirm && password === passwordConfirm;

  useEffect(() => {
    // password가 변경될 때마다 passwordConfirm을 빈 값으로 리셋
    if (password) {
      setValue('passwordConfirm', '');
    }
  }, [password, setValue]);
  return (
    <Wrapper>
      <TypeLetter type="비밀번호 확인" />
      <InputField
        placeholder="비밀번호를 한번 더 입력해 주세요!"
        type="password"
        register={register('passwordConfirm')}
        isvalid={!errors.passwordConfirm || !touchedFields.passwordConfirm || !passwordConfirm}
      />
      {errors.passwordConfirm && passwordConfirm ? (
        <Message isvalid={!errors.passwordConfirm} message={errors.passwordConfirm?.message} />
      ) : isPasswordMatch ? (
        <Message isvalid={isPasswordMatch} message="비밀번호가 일치해요" />
      ) : null}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 2.84vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  animation: fadeInUp 0.8s ease;

  @keyframes fadeInUp {
    from {
      transform: translateY(40px); /* 아래에서 시작 */
      opacity: 0; /* 투명하게 시작 */
    }
    to {
      transform: translateY(0); /* 원래 위치 */
      opacity: 1; /* 완전히 보이게 */
    }
  }
`;

export default DoubleChekPassword;
