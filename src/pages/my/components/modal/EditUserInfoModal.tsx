import { ModalProps } from '@shared/types/my/modalProps';
import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';
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
  return (
    <AnimatePresence>
      {isOpened && (
        <Container
          initial={{ x: '100%' }}
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
            <span></span>
            <input className="Name" type="text"></input>
            <span></span>
            <input></input>
            <span className="Birth"></span>
            <input type="date"></input>
            <span className="Gender"></span>
            <input></input>
            <span className="Height"></span>
            <input type="text"></input>
          </Bottom>
        </Container>
      )}
    </AnimatePresence>
  );
};

const Container = styled(motion.div)``;

const Top = styled.div``;
const Middle = styled.div``;
const Bottom = styled.div``;
