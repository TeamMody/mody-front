import styled from 'styled-components';
import CheckPassword from '../components/CheckPassword';
import { useEffect, useState } from 'react';
import { PasswordSchema, PasswordSchemaType } from '../schema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import DoubleChekPassword from '../components/DoubleCheckPassword';
import Message from '../components/Message';
import { StateProps } from '@shared/types';

interface PasswordPageProps extends StateProps<boolean> {}

const PasswordPage = ({ value: buttonActive, setValue: setButtonActive }: PasswordPageProps) => {
  const schema = PasswordSchema;
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
    watch,
  } = useForm<PasswordSchemaType>({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });
  const onSubmit = (data: PasswordSchemaType) => {
    console.log(data);
  };

  useEffect(() => {
    if (!errors.password && !errors.passwordConfirm && watch('passwordConfirm')) {
      setButtonActive(true);
    } else {
      setButtonActive(false);
    }
  }, [errors.password, errors.passwordConfirm, touchedFields.passwordConfirm]);
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <CheckPassword register={register} errors={errors} touchedFields={touchedFields} />
      {errors.password ? (
        <Message isvalid={!errors.password} message={errors.password?.message} />
      ) : watch('password') ? (
        <DoubleChekPassword
          watch={watch}
          register={register}
          errors={errors}
          touchedFields={touchedFields}
        />
      ) : null}
    </Form>
  );
};
const Form = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10.6vh auto;
  width: 90%;
  height: 100%;
`;

export default PasswordPage;
