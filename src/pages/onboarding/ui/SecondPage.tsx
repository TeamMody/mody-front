import styled from 'styled-components';
import { useState } from 'react';
import { SecondPageProps } from '@onboarding/types';
import BirthdaySelector from '@onboarding/components/BirthdaySelector.tsx';
import HeightSelector from '@onboarding/components/HeightSelector.tsx';

const SecondPage = ({ register, setValue }: SecondPageProps) => {
  const [selectedSex, setSelectedSex] = useState<string | null>(null);
  const [isVisibleBirthday, setIsVisibleBirthday] = useState(false);
  const [isVisibleHeight, setIsVisibleHeight] = useState(false);

  const handleSexClick = (sex: string) => {
    setSelectedSex(sex); // 상태 업데이트
    setValue('sex', sex); // react-hook-form에 값 설정
  };
  return (
    <>
      <Text>모디는 당신의 정보가 필요해요!</Text>
      <InputContainer>
        <InputBox>
          <span className="title">생년월일 8자리</span>
          <div className="input-box">
            {isVisibleBirthday ?
              <BirthdaySelector />
              : <input
                onClick={() => setIsVisibleBirthday(!isVisibleBirthday)}
                type="text"
                placeholder="1996년 4월 11일"
                {...register('birthday', { required: true })}
              />
            }
          </div>
        </InputBox>
        <InputBox>
          <span className="title">성별</span>
          <div className="input-box">
            <button
              type="button"
              onClick={() => handleSexClick('male')}
              className={selectedSex === 'male' ? 'selected' : ''}
              {...register('sex', { required: true })}
            >
              남성
            </button>
            <button
              type="button"
              onClick={() => handleSexClick('female')}
              className={selectedSex === 'female' ? 'selected' : ''}
              {...register('sex', { required: true })}
            >
              여성
            </button>
          </div>
        </InputBox>
        <InputBox>
          <span className="title">키</span>
          {isVisibleHeight
            ? <HeightSelector />
            : <div className="input-box" onClick={() => setIsVisibleHeight(!isVisibleHeight)}>
              <input
                type="text"
                placeholder="160cm"
                {...register('height', { required: true })}
              />
            </div>
          }
        </InputBox>
      </InputContainer>
    </>
  );
};

const Text = styled.span`
  margin-top: 5vh;
  color: #ffffff;
  font-size: ${({ theme }) => theme.fonts.heading_bold_22px};
`;
const InputContainer = styled.div`
  width: 100%;
  margin-top: 10vh;

  display: flex;
  flex-direction: column;

  gap: 3vh;
`;
const InputBox = styled.div`
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

    input {
      border-radius: 10px;
      border: none;
      width: 100%;
      height: 5vh;
      text-align: center;
      color: white;
      background-color: ${({ theme }) => theme.colors.gray800};
      font-size: ${({ theme }) => theme.fonts.heading_medium_20px};

      &::placeholder {
        font-size: ${({ theme }) => theme.fonts.heading_medium_20px};
        color: white;
        line-height: 5vh;
      }
    }

    button {
      border-radius: 10px;
      width: 100%;
      height: 7vh;
      font-size: ${({ theme }) => theme.fonts.heading_medium_20px};
      color: white;
      background-color: ${({ theme }) => theme.colors.gray800};

      &.selected {
        background-color: ${({ theme }) => theme.colors.green500};
        color: black;
      }
    }
`;
export default SecondPage;
