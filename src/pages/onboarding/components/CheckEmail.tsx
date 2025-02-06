import styled from 'styled-components';
import TypeLetter from '@onboarding/components/TypeLetter';
import InputField from '@onboarding/components/InputField';
import Message from '@onboarding/components/Message';
import SubmitButton from '@onboarding/components/SubmitButton';
import { useEffect, useState } from 'react';
import { EmailSchema, EmailSchemaType } from '../schema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { StateProps } from '@shared/types';
import useSignupStore from '../store/signup';
import { useSendMail } from '@onboarding/hooks/useSendMail.ts';

interface CheckEmailProps extends StateProps<boolean> {}

const CheckEmail = ({ value: codeSent, setValue: setCodeSent }: CheckEmailProps) => {
  const schema = EmailSchema;
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, isValid },
    watch,
  } = useForm<EmailSchemaType>({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });
  const { mutate } = useSendMail();

  const [message, setMessage] = useState<string>('');
  const { setEmail } = useSignupStore();

  const onSubmit = (data: EmailSchemaType) => {
    mutate(data.email);
    setMessage('인증 코드가 전송되었어요.');
    setEmail(data.email);
    setCodeSent(true);
  };
  const email = watch('email'); // 이메일 값을 실시간으로 추적

  // 이메일이 변경될 때마다 메시지 초기화, 인증번호 전송 여부 초기화
  useEffect(() => {
    if (codeSent) {
      setMessage('');
      setCodeSent(false);
    }
  }, [email]);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <TypeLetter type="이메일" />
      <InputField
        placeholder="이메일을 입력해주세요."
        type="email"
        register={register('email')}
        isvalid={isValid || !touchedFields.email}
      />
      {touchedFields.email && errors.email ? (
        <Message isvalid={isValid} message={errors.email?.message} />
      ) : (
        <Message isvalid={isValid} message={message} />
      )}
      {/* 인증번호 전송 여부에 따라 버튼 내용 변경 */}
      {codeSent ? (
        <SubmitButton content="인증 코드 재전송" isvalid={isValid} />
      ) : (
        <SubmitButton content="인증 코드 전송" isvalid={isValid} />
      )}
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export default CheckEmail;
