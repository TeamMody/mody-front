import { ModalProps } from '@shared/types/my/modalProps';
import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import ReactDOM from 'react-dom';
interface EditUserInfoModalProps extends ModalProps {
  profileImg?: string | undefined;
  name: string;
  birth: string;
  gender: string;
  height: string;
}
export const EditUserInfoModal = ({
  isOpened,
  onClose,
  profileImg,
  name,
  birth,
  gender,
  height,
}: EditUserInfoModalProps) => {
  const ModalClose = () => {
    if (onClose) onClose();
  };
  return ReactDOM.createPortal(
    <AnimatePresence>
      {isOpened && (
        <Container
          initial={{ x: '100%', y: '0%' }}
          animate={{ x: '0%' }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <Top>
            <button></button>
            <span>회원정보 수정</span>
          </Top>
          <Middle>
            <input type="file"></input>
            <button></button>
          </Middle>
          <Bottom>
            <span>이름</span>
            <input className="Name" type="text"></input>
            <span className="Birth">생년월일</span>
            <input type="date"></input>
            <span className="Gender">성별</span>
            <input></input>
            <span className="Height">키</span>
            <input type="text"></input>
          </Bottom>
          <button onClick={ModalClose}>완료</button>
        </Container>
      )}
    </AnimatePresence>,
    document.body,
  );
};

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: absolute;
  max-width: 440px;
  width: 100vw;
  height: 100vh;
  z-index: 10000;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const Top = styled.div``;
const Middle = styled.div``;
const Bottom = styled.div``;
