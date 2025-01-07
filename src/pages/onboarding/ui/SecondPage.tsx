import styled from 'styled-components';
const SecondPage = () => {
  return (
    <>
      <Text>모디는 당신의 정보가 필요해요!</Text>
      <InputContainer>
        <InputBox>
          <span className="title">생년월일 8자리</span>
          <div className="input-box">
            <input type="text" placeholder="1996년 4월 11일" />
          </div>
        </InputBox>
        <InputBox>
          <span className="title">성별</span>
          <div className="input-box">
            <button>남성</button>
            <button>여성</button>
          </div>
        </InputBox>
        <InputBox>
          <span className="title">키</span>
          <div className="input-box">
            <input type="text" placeholder="160cm" />
          </div>
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
    }
  }
`;
export default SecondPage;
