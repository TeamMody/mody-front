import { useEffect, useState } from 'react';
import styled from 'styled-components';
import TypeLetter from './TypeLetter';
import InputField from './InputField';
import Message from './Message';
import SubmitButton from './SubmitButton';
import { useForm } from 'react-hook-form';
import { CodeSchema, CodeSchemaType } from '@onboarding/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { StateProps } from '@shared/types';

interface CheckCodeProps extends StateProps<boolean> {}

const CheckCode = ({ value: buttonActive, setValue: setButtonActive }: CheckCodeProps) => {
  const [message, setMessage] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>(false);
  const [codeConfirmed, setCodeConfirmed] = useState<boolean>(false);
  const schema = CodeSchema;
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
    watch,
  } = useForm<CodeSchemaType>({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  const code = watch('code'); // 이메일 값을 실시간으로 추적

  // 이메일이 변경될 때마다 메시지 초기화
  useEffect(() => {
    if (code?.length === 8) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
    setMessage('');
  }, [code]);

  const onSubmit = (data: CodeSchemaType) => {
    if (data.code === '12345678') {
      setCodeConfirmed(true);
      setButtonActive(true);
      setMessage('인증 코드가 확인 됐어요.');
    } else {
      setIsValid(false);
      setCodeConfirmed(false);
      setMessage('인증 코드가 일치하지 않아요.');
    }
  };
  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <TypeLetter type="인증 코드" />
        <InputField
          placeholder="이메일로 발송된 인증코드를 입력해 주세요!"
          register={register('code')}
          type={'number'}
          isvalid={isValid || !touchedFields.code}
        />
        {touchedFields.code && errors.code ? (
          <Message isvalid={isValid} message={errors.code?.message} />
        ) : (
          <Message isvalid={codeConfirmed} message={message} />
        )}
        <SubmitButton content="인증 코드 확인" isvalid={isValid} />
      </Form>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  margin-top: 2.84vh;
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export default CheckCode;
