import InputField from './InputField';
import TypeLetter from './TypeLetter';
import Message from './Message';
import styled from 'styled-components';

interface DoubleChekPasswordProps {
  errors: any;
  touchedFields: any;
  register: any;
  watch: any;
}

const DoubleChekPassword = ({
  errors,
  touchedFields,
  register,
  watch,
}: DoubleChekPasswordProps) => {
  return (
    <Wrapper>
      <TypeLetter type="비밀번호 확인" />
      <InputField
        placeholder="비밀번호를 한번 더 입력해 주세요!"
        type="password"
        register={register('passwordConfirm')}
        isvalid={!errors.passwordConfirm || !touchedFields.passwordConfirm}
      />
      {touchedFields.passwordConfirm &&
        watch('passwordConfirm') &&
        (errors.passwordConfirm ? (
          <Message isvalid={!errors.passwordConfirm} message={errors.passwordConfirm?.message} />
        ) : (
          <Message isvalid={!errors.passwordConfirm} message="비밀번호가 일치해요" />
        ))}
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
