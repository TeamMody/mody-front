import styled from 'styled-components';
import { UseFormRegister, UseFormSetValue, UseFormGetValues } from 'react-hook-form';
import { UserInfoSchemaType } from '@onboarding/schema';

const ButtonBox = ({
  title,
  register,
  getValues,
  setValue,
}: {
  title: string;
  register: UseFormRegister<UserInfoSchemaType>;
  setValue: UseFormSetValue<UserInfoSchemaType>;
  getValues: UseFormGetValues<UserInfoSchemaType>;
}) => {
  const selectedSex = getValues('sex');

  const handleSexClick = (sex: string) => {
    setValue('sex', sex); // react-hook-form에 값 설정
  };
  return (
    <Container>
      <span className="title">{title}</span>
      <div className="input-box">
        <button
          type="button"
          onClick={() => handleSexClick('MALE')}
          className={selectedSex === 'MALE' ? 'selected' : ''}
          {...register('sex', { required: true })}
        >
          남성
        </button>
        <button
          type="button"
          onClick={() => handleSexClick('FEMALE')}
          className={selectedSex === 'FEMALE' ? 'selected' : ''}
          {...register('sex', { required: true })}
        >
          여성
        </button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .title {
    font-size: ${({ theme }) => theme.fonts.body_medium_16px};
    color: white;
  }

  .input-box {
    width: 100%;
    margin-top: 1vh;
    display: flex;
    gap: 0.5vh;

    

    button {
      border-radius: 10px;
      width: 100%;
      height: 7vh;
      font-size: ${({ theme }) => theme.fonts.heading_medium_20px};
      color: white;
      background-color: ${({ theme }) => theme.colors.gray600};

      &.selected {
        background-color: ${({ theme }) => theme.colors.green500};
        color: black;
      }
    }
`;

export default ButtonBox;
