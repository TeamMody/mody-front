import styled from 'styled-components';

const FinishedSignUpPage = () => {
  return (
    <Wrapper>
      <Text>모디 회원가입이</Text>
      <Text>완료되었어요!</Text>
      <ImageWrapper></ImageWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 90%;
  height: 100%;
`;

const Text = styled.div`
  color: white;
  font-size: ${({ theme }) => theme.fonts.heading_bold_24px};
  margiin-bottom: 2.6vh;
`;

const ImageWrapper = styled.div`
  margin-top: 9.48vh;
  width: 176px;
  height: 176px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.gray800};
`;
export default FinishedSignUpPage;
