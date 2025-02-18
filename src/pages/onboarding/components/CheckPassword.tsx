import styled from 'styled-components';
import TypeLetter from './TypeLetter';
import InputField from './InputField';
import { PasswordSchemaType } from '../feature/schema';
import { FieldProps } from '@shared/types';

interface CheckPasswordProps extends FieldProps<PasswordSchemaType> {}
const CheckPassword = ({ register, errors, touchedFields }: CheckPasswordProps) => {
  return (
    <Wrapper>
      <TypeLetter type="비밀번호" />
      <InputField
        placeholder="비밀번호를 입력해주세요!"
        type="password"
        register={register('password')}
        isvalid={!errors.password || !touchedFields.password}
      />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export default CheckPassword;
