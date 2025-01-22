import { UseFormRegister, UseFormWatch, UseFormSetValue, UseFormGetValues } from 'react-hook-form';
import { UserInfoSchemaType } from '@onboarding/schema';

export type RegisterType = UseFormRegister<UserInfoSchemaType>;

export type InputUserMainProps = {
  curIdx: number;
  register: UseFormRegister<UserInfoSchemaType>;
  watch: UseFormWatch<UserInfoSchemaType>;
  setValue: UseFormSetValue<UserInfoSchemaType>;
  getValues: UseFormGetValues<UserInfoSchemaType>;
};

export type FirstPageProps = Omit<InputUserMainProps, 'curIdx' | 'getValues'>;
export type SecondPageProps = Omit<InputUserMainProps, 'curIdx'>;
export type ThirdPageProps = Pick<InputUserMainProps, 'getValues'>;
