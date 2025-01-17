import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';
import EmailCodePage from './EmailCodePage';
import Logo from '@shared/assets/icon/ic-inputuser-logo.svg?react';
import CustomButton from '@shared/ui/CustomButton';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import FinishedSignUpPage from './FinishedSignUpPage';
import PasswordPage from './PasswordPage';
const SignUpMain = () => {
  const [buttonActive, setButtonActive] = useState<boolean>(false);
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const navigate = useNavigate();

  const handleOnClick = () => {
    // 회원가입 완료 시 페이지 이동
    if (slideIndex === 1) {
      setButtonActive(true);
    } else if (slideIndex === 2) {
      navigate('/onboarding/inputuser');
    } else {
      setButtonActive(false);
    }
    setSlideIndex((prevIndex) => prevIndex + 1);
  };
  // 인디케이터 표시 여부를 결정하는 함수
  const shouldShowIndicator = slideIndex < 2; // 두 번째 슬라이드까지만 인디케이터 표시
  const buttonLabel = ['다음', '완료', '기본 정보 입력하러 가기'];
  return (
    <Wrapper>
      <CustomLogo />
      <ButtonWrapper>
        <CustomButton
          active={buttonActive}
          label={buttonLabel[slideIndex]}
          onClick={handleOnClick}
          paddingBottom="16px"
          paddingTop="16px"
        />
      </ButtonWrapper>

      <StyledCarousel
        selectedItem={slideIndex} // 현재 슬라이드 인덱스
        showArrows={false} // 화살표 숨김
        showStatus={false} // 상태 표시 숨김
        showThumbs={false} // 썸네일 표시 숨김
        showIndicators={shouldShowIndicator} // 인디케이터 숨김
        swipeable={false} // 스와이프 사용하지 않음
        renderIndicator={(onClickHandler, isSelected, index) => {
          if (index > 1) return null; // 2번째 인디케이터까지만 표시
          return (
            <CustomIndicator
              isSelected={isSelected}
              onClick={(e) => e.preventDefault()} // 클릭 이벤트 막기
            />
          );
        }}
      >
        <EmailCodePage value={buttonActive} setValue={setButtonActive} />
        <PasswordPage value={buttonActive} setValue={setButtonActive} />
        <FinishedSignUpPage />
      </StyledCarousel>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  max-width: 440px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.gray900};
`;

const ButtonWrapper = styled.div`
  justify-content: flex-end;
  display: flex;
  position: absolute;
  flex-direction: column;
  bottom: 4vh;
  width: 90%;
  z-index: 1;
`;

const CustomLogo = styled(Logo)`
  margin-top: 4.5vh;
  position: absolute;
  z-index: 1;
`;

const StyledCarousel = styled(Carousel)`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  .slider-wrapper {
    height: 80vh;
    padding-top: 17vh;
  }
  .carousel-slider {
    height: 100%;
  }
  .slider {
    height: 100%;
  }
  /* 인디케이터 위치를 맨 위로 설정 */
  .control-dots {
    top: 0;
    height: 2vh;
    margin: 0;
  }
`;

const CustomIndicator = styled.div<{ isSelected: boolean }>`
  display: inline-block;
  width: 1.5vw;
  height: 0.7vh;
  border-radius: 50%;
  margin: 1.8vh 1vw 0 1vw;
  background-color: ${(props) =>
    props.isSelected ? props.theme.colors.green500 : props.theme.colors.gray500};
  cursor: default; // 클릭 시 아무 동작도 하지 않음
`;

export default SignUpMain;
