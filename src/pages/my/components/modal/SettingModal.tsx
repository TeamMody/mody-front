import { IcLeftArrow } from '@shared/assets/icon/ic-left-arrow';
import CustomDivider from '@shared/ui/CustomDivider';
import styled from 'styled-components';
import { useState } from 'react';
import { ConfirmationModal } from '@pages/my/components/modal/ConfirmationModal';
import { AnimatePresence, motion } from 'framer-motion';
interface SettingModalProps {
  isOpened: boolean | undefined;
  onClose: () => void;
}

export const SettingModal = ({ isOpened, onClose }: SettingModalProps) => {
  const [modalState2, setModalState2] = useState<string | null>(null);
  const openModal = (modalName: string) => {
    setModalState2(modalName);
  };
  const closeModal = () => {
    setModalState2(null);
  };

  const handleClose = () => {
    console.log('handleClose 호출됨');
    if (onClose) onClose();
  };

  return (
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
            <div>설정</div>
          </TopBox>
          <BottomBox>
            <div>
              <img />
              <div>회원정보 수정</div>
            </div>
            <CustomDivider width="89.487vw" border="0.5px" />
            <LogOut onClick={() => openModal('logout')}>로그아웃</LogOut>
            <WithDraw onClick={() => openModal('withdraw')}>회원 탈퇴</WithDraw>
          </BottomBox>
          {modalState2 === 'logout' && (
            <ConfirmationModal
              isOpened={true}
              content="로그아웃을 진행할까요?"
              onClose={closeModal}
            />
          )}
          {modalState2 === 'withdraw' && (
            <ConfirmationModal
              isOpened={true}
              content="회원탈퇴를 진행할까요?"
              onClose={closeModal}
            />
          )}
        </Container>
      )}
    </AnimatePresence>
  );
};
const Container = styled(motion.div)`
  position: absolute;
  max-width: 440px;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const TopBox = styled.div`
  max-width: 440px;
  width: 100vw;
  height: 7.583vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, #121212, #262626);

  & > button:nth-child(1) {
    margin-right: 90%;
  }

  & > div:nth-child(2) {
    position: fixed;
    display: flex;
    font-size: ${({ theme }) => theme.fonts.heading_bold_22px};
  }
`;
const BottomBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.896vh 5.385vw 0 4.872vw;
  max-width: 440px;
  width: 100vw;
  height: 100%;
  background: ${({ theme }) => theme.colors.gray900};

  & > div:nth-child(1) {
    display: flex;
    align-items: center;
    gap: 4.103vw;
    margin-bottom: 1.896vh;
  }

  & > div:nth-child(1) > img:nth-child(1) {
    aspect-ratio: 1 / 1;
    width: 10.256vw;
    border: 1px solid blue;
    border-radius: 50%;
    margin-left: 0.256vw;
  }
  & > div:nth-child(1) > div:nth-child(2) {
    font-size: ${({ theme }) => theme.fonts.body_bold_16px};
    cursor: pointer;
    &:hover {
      color: ${({ theme }) => theme.colors.green500};
    }
  }
`;

const LogOut = styled.div`
  font-size: ${({ theme }) => theme.fonts.body_bold_16px};
  margin-top: 1.896vh;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.green500};
  }
`;

const WithDraw = styled.div`
  font-size: ${({ theme }) => theme.fonts.body_bold_16px};
  margin-top: 1.896vh;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.green500};
  }
`;
