import styled from 'styled-components';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ModalProps } from '@shared/types/my/modalProps';
import { IcLeftArrow } from '@shared/assets/icon/ic-left-arrow';
import CustomDivider from '@shared/ui/CustomDivider';
import { useImagesStore } from '@pages/post/components/store/selectedImg';
import BottomSheetItem from '@pages/my/components/BottomSheetItem';

export const CreateNewPostModal = ({ isOpened, onClose }: ModalProps) => {
  const { images, setImages } = useImagesStore();
  const [modalState, setModalState] = useState<string | null>(null);
  const openModal = (modalName: string) => {
    setModalState(modalName);
  };
  const closeModal = () => {
    setModalState(null);
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };
  console.log(images);
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
            <div>새로운 게시물</div>
          </TopBox>
          <BottomBox>
            <img></img>
            <div>
              <textarea placeholder="게시글을 작성해주세요."></textarea>
              <CustomDivider width="100%" border="1px" />
              <div>
                <BottomSheetItem content="나만보기" />
                <button>스타일 저장하기</button>
              </div>
            </div>
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
  z-index: 10000;
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

  & > div:nth-child(2) {
    height: 100%;
    color: white;
    font-size: ${({ theme }) => theme.fonts.heading_bold_22px};
    text-align: center;
    align-content: center;
    margin-right: 30%;
  }
`;

// type StyledProps = Pick<ModalProps, 'isOpened'>;

const BottomBox = styled.div`
  max-width: 440px;
  width: 100%;
  height: 92.417vh;
  background-color: ${({ theme }) => theme.colors.gray900};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & > img:nth-child(1) {
    width: 100%;
    border: 1px solid red;
    height: 45.735vh;
    margin-top: 4.147vh;
  }
  & > div:nth-child(2) {
    width: 100%;
  }
  & > div:nth-child(2) > textarea:nth-child(1) {
    width: 100%;
    font-size: ${({ theme }) => theme.fonts.body_medium_16px};
    border: none;
    color: white;
    background-color: transparent;
    outline: none;
    padding: 0px 5.128vw;
  }

  & > div:nth-child(2) > div:nth-child(3) {
    width: 100%;
    padding: 0px 5.128vw;
    margin: 1.896vh 0 4.028vh 0;
  }
  & > div:nth-child(2) > div:nth-child(3) > button {
    width: 100%;
    height: 6.635vh;
    background-color: ${({ theme }) => theme.colors.green500};
  }
`;
