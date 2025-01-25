import styled from 'styled-components';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ModalProps } from '@shared/types/my/modalProps';
import { IcLeftArrow } from '@shared/assets/icon/ic-left-arrow';
import { CreateNewPostModal } from '@pages/post/components/modal/CreateNewPostModal';
import { useNavigate } from 'react-router';
import { SelectPhotoBottomSheetModal } from '@pages/post/components/modal/SelectPhotoBottomSheetModal';

export const CreatePost = ({ isOpened }: { isOpened: boolean }) => {
  const [modalState, setModalState] = useState<boolean>(false);
  const [opened, setIsOpened] = useState<boolean>(isOpened);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [selectedId, setSelectedIds] = useState<number[]>([]);
  const [imgZoom, setImgZoom] = useState<boolean>(false);
  const navigate = useNavigate();
  const openModal = () => {
    setModalState(true);
  };
  const closeModal = () => {
    setModalState(false);
    setImgZoom(false);
  };
  const closePage = () => {
    setIsOpened(false);
    setTimeout(() => {
      navigate('/post');
    }, 500);
  };

  return ReactDOM.createPortal(
    <AnimatePresence>
      {opened && (
        <Container
          initial={{ x: '100%' }}
          animate={{ x: '0%' }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <TopBox>
            <button onClick={closePage}>
              <IcLeftArrow />
            </button>
            <button onClick={openModal}>다음</button>
            <CreateNewPostModal
              isOpened={modalState}
              onClose={closeModal}
              selectedImages={selectedImages}
              imgZoom={imgZoom}
              setImgZoom={setImgZoom}
            />
          </TopBox>
          <BottomBox isOpened={isOpened}>
            {selectedImages ? <ChooseImg src={selectedImages.slice(-1)[0]} /> : <></>}
          </BottomBox>
          <SelectPhotoBottomSheetModal
            isOpened={isOpened}
            onClose={closePage}
            setSelectedImages={setSelectedImages}
            selectedId={selectedId}
            setSelectedIds={setSelectedIds}
          />
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
    &:hover {
      color: ${({ theme }) => theme.colors.green500};
    }
  }
`;

type StyledProps = Pick<ModalProps, 'isOpened'>;

const BottomBox = styled.div<StyledProps>`
  max-width: 440px;
  width: 100%;
  height: 92.417vh;
  background: ${({ theme }) => theme.colors.gray900};
  display: flex;
  padding: 1.1vh 0.9vw 0 0.9vw;
`;

const ChooseImg = styled(motion.img)`
  width: 100%;
  height: 46vh;
  background-color: ${({ theme }) => theme.colors.gray800};
`;
