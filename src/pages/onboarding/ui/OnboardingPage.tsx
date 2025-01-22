import styled from 'styled-components';
import Logo from '@shared/assets/icon/ic-onboarding-logo.svg?react';
import KakaoLogo from '@pages/onboarding/icons/ic-kakao-logo.svg?react';

export const OnboardingPage = () => {
  // const handleAccount = (e) => {
  //   console.log(e);
  // };
  return (
    <Wrapper>
      <CustomLogo />
      <Button type="button" fontColor={'#000000'} bgColor={'#FFE812'}>
        <KakaoLogo />
        카카오로 시작하기
      </Button>

      <AccountContainer>
        <span className="signin">이메일로 로그인</span>|
        <span className="signup">이메일로 회원가입</span>
      </AccountContainer>
      <Policy>
        계속 진행됨에 따라 <span className="link">이용약관</span>과 개인정보{' '}
        <span className="link">처리방침</span>에 동의합니다.
      </Policy>
    </Wrapper>
  );
};
const AccountContainer = styled.div`
  margin-top: 3vh;
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    color: ${({ theme }) => theme.colors.gray100};
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  max-width: 440px;
  height: 100vh;
  padding: 16px 20px;
  background-color: ${({ theme }) => theme.colors.gray900};
`;

const CustomLogo = styled(Logo)`
  margin-top: 30vh;
`;

const Button = styled.button<{ fontColor: string; bgColor: string }>`
  margin-top: 15vh;
  width: 100%;
  height: 7vh;
  border-radius: 10px;
  border: none;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ fontColor }) => fontColor};
  font-size: ${({ theme }) => theme.fonts.body_medium_16px};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Policy = styled.span`
  margin-top: 15vh;
  color: #e0e0e0;
  font-size: ${({ theme }) => theme.fonts.detail_medium_12px};

  .link {
    color: #0084ff;
    text-decoration: underline;
  }
`;
