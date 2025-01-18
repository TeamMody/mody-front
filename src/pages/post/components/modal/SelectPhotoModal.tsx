import styled from 'styled-components';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ModalProps } from '@shared/types/my/modalProps';
import { IcLeftArrow } from '@shared/assets/icon/ic-left-arrow';
import { CreateNewPostModal } from '@pages/post/components/modal/CreateNewPostModal';
import { useImagesStore } from '@pages/post/components/store/selectedImg';
export const SelectPhotoModal = ({ isOpened, onClose }: ModalProps) => {
  const [modalState, setModalState] = useState<boolean>(false);
  const { image, setImages, reset } = useImagesStore();
  console.log(image);
  const openModal = () => {
    setModalState(true);
  };
  const closeModal = () => {
    setModalState(false);
  };

  const handleClose = () => {
    if (onClose) {
      reset();
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <AnimatePresence>
      {isOpened && (
        <Container
          initial={{ x: '100%' }}
          animate={{ x: '0%' }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <TopBox>
            <button onClick={handleClose}>
              <IcLeftArrow />
            </button>
            <button onClick={openModal}>다음</button>
            <CreateNewPostModal isOpened={modalState} onClose={closeModal} />
          </TopBox>
          <BottomBox isOpened={isOpened}>
            <ChooseImg
              initial={{ width: '100%', height: '100%' }}
              animate={{ width: '57.692vw', height: '45.316vh' }}
              transition={{ duration: 0.4, ease: 'linear' }}
              src={image}
              alt="이미지를 넣어주세요"
            />
          </BottomBox>
        </Container>
      )}
    </AnimatePresence>,
    document.body,
  );
};
const Container = styled(motion.div)`
  position: absolute;
  max-width: 440px;
  width: 100%;
  height: 100vh;
  z-index: 1000;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const TopBox = styled.div`
  max-width: 440px;
  width: 100%;
  height: 8.101vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(to bottom, #121212, #262626);
  padding: 1.556vh 6.154vw 1.556vh 5.641vw;

  & > button:nth-child(1) {
    height: 100%;
  }

  & > button:nth-child(2) {
    height: 100%;
    color: white;
    font-size: ${({ theme }) => theme.fonts.heading_medium_18px};
  }
`;

type StyledProps = Pick<ModalProps, 'isOpened'>;

const BottomBox = styled.div<StyledProps>`
  max-width: 440px;
  width: 100%;
  height: 92.417vh;
  background: ${({ theme }) => theme.colors.gray900};
  display: flex;
  justify-content: center;
`;

const ChooseImg = styled(motion.img)`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.gray800};
`;
