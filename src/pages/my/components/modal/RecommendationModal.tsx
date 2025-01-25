import { IcCancel } from '@shared/assets/icon/ic-cancel';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { useNavigate } from 'react-router';
import ReactDOM from 'react-dom';
interface ModalProps {
  isOpened: boolean;
  onClose: () => void;
  img?: string | undefined;
  content: '내 체형을 분석하러 가볼까요?' | '스타일을 추천 받으러 가볼까요?';
  btnText: '체형 분석하기' | '스타일 추천 받기';
}

export const RecommendationModal = ({ isOpened, img, content, btnText, onClose }: ModalProps) => {
  const navigate = useNavigate();
  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <AnimatePresence>
      {isOpened && (
        <Wrapper>
          <Container
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <CancelButton onClick={handleClose}>
              <IcCancel />
            </CancelButton>
            <div>
              <img src={img} alt="이미지 없음" />
              <div>{content}</div>
              {btnText === '체형 분석하기' ? (
                <button onClick={() => navigate('/body-survey')}>{btnText}</button>
              ) : (
                <button>{btnText}</button>
              )}
            </div>
          </Container>
        </Wrapper>
      )}
    </AnimatePresence>,
    document.body,
  );
};

const Wrapper = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  margin: 0px;
  padding: 0px;
  position: absolute;
  z-index: 1000;
  backdrop-filter: blur(2px);
`;
const Container = styled(motion.div)`
  height: 47.39vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.gray800};
  border-radius: 30px 30px 0px 0px;
  position: fixed;
  bottom: 0%;
  display: flex;
  flex-direction: column;
  padding: 2.581vh 4.63vw 4.55vh 4.63vw;

  & > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2.956vh;
  }

  & > div:nth-child(2) > img:nth-child(1) {
    aspect-ratio: 1 / 1;
    width: 35.641vw;
    border: 2px solid black;
    border-radius: 50%;
  }
  & > div:nth-child(2) > div:nth-child(2) {
    font-size: ${({ theme }) => theme.fonts.heading_bold_24px};
    margin-top: 2.956vh;
    height: 3.889vh;
  }
  & > div:nth-child(2) > button:nth-child(3) {
    width: 100%;
    height: 6.222vh;
    font-size: ${({ theme }) => theme.fonts.button_medium_16px};
    background-color: ${({ theme }) => theme.colors.green500};
    margin-top: 3.556vh;
    color: black;
  }
`;

const CancelButton = styled.button`
  display: flex;
  justify-content: flex-end;
`;
