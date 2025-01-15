import { IcLeftArrow } from '@shared/assets/icon/ic-left-arrow';
import CustomDivider from '@shared/ui/CustomDivider';
import styled from 'styled-components';
import { useState } from 'react';
import { ConfirmationModal } from '@pages/my/components/modal/ConfirmationModal';
import { AnimatePresence, motion } from 'framer-motion';
import { IcEmptyProfile } from '@shared/assets/icon/ic-emptyProfileIcon';
import { ModalProps } from '@shared/types/my/modalProps';
import { EditUserInfoModal } from '@pages/my/components/modal/EditUserInfoModal';
import ReactDOM from 'react-dom';

export const SelectPhotoModal = ({ isOpened, onClose }: ModalProps) => {
  const [modalState, setModalState] = useState<string | null>(null);
  const openModal = (modalName: string) => {
    setModalState(modalName);
  };
  const closeModal = () => {
    setModalState(null);
  };

  const handleClose = () => {
    if (onClose) onClose();
  };

  return ReactDOM.createPortal(
    <AnimatePresence>
      {isOpened && (
        <Container
          key="hi"
          initial={{ x: '100%' }}
          animate={{ x: '0%' }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <TopBox>
            <button onClick={handleClose}>
              <IcLeftArrow />
            </button>
            <button>다음</button>
          </TopBox>
          <BottomBox isOpened={isOpened}>
            <ChooseImg
              initial={{ width: '100%', height: '100%' }}
              animate={{ width: '57.692vw', height: '45.316vh' }}
              transition={{ duration: 0.4, ease: 'linear' }}
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
