import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { MyUserInfoSchemaType } from '@pages/my/features/schema/MyUserInfoSchema';
type RegisterType = UseFormRegister<MyUserInfoSchemaType>;
type ErrorsType = FieldErrors<MyUserInfoSchemaType>;
export const UserDataInput = ({
  inputTitle,
  type,
  inputValue,
  inputKind,
  maxLength,
  register,
  errors,
}: {
  inputTitle: string;
  type: string;
  inputValue: string;
  inputKind: 'nickname' | 'height' | 'birthday';
  maxLength?: number;
  register: RegisterType;
  errors: ErrorsType;
}) => {
  return (
    <>
      <span className={inputKind}>{inputTitle}</span>
      <input
        maxLength={maxLength}
        type={type}
        defaultValue={inputValue}
        placeholder={inputValue}
        {...register(`${inputKind}`)}
      ></input>
      {errors[inputKind]?.message ? <p>{errors[inputKind]?.message}</p> : <p></p>}
    </>
  );
};
