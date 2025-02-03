import styled from 'styled-components';
import { ToggleButton } from '@shared/ui/ToggleButton';
import React, { useEffect, useState } from 'react';
import { ConfirmationModal } from './modal/ConfirmationModal';

interface BottomSheetItemProps {
  content: '수정하기' | '삭제하기' | '나만보기';
  icon?: string;
  setButtonState?: React.Dispatch<React.SetStateAction<boolean>>;
}

const BottomSheetItem = ({ content, icon, setButtonState }: BottomSheetItemProps) => {
  // 토글 상태 관리
  const [isOn, setIsOn] = useState<boolean>(false);

  // 버튼 클릭 시 상태 토글
  const toggleState = () => {
    setIsOn((prevState) => !prevState);
    if (setButtonState) setButtonState(!isOn);
  };

  // 모달 상태 관리
  const [modalState, setModalState] = useState<boolean>(false);
  const openModal = () => {
    setModalState(true);
  };
  const closeModal = () => {
    setModalState(false);
  };

  const handleOnClick = () => {
    if (content === '수정하기') {
      console.log('수정하기');
    } else if (content === '삭제하기') {
      openModal();
    } else if (content === '나만보기') {
      console.log('나만보기');
    }
  };

  useEffect(() => {
    console.log(modalState);
  }, [modalState]);
  return (
    <SheetContentItem onClick={handleOnClick}>
      <Content>{content}</Content>
      {content === '나만보기' ? (
        <ToggleButton $isOn={isOn} onSetToggle={toggleState} />
      ) : (
        <img src={icon}></img>
      )}
      {modalState && (
        <ConfirmationModal
          isOpened={true}
          content="이 게시글을 삭제할까요?"
          onClose={closeModal}
          index={2}
        />
      )}
    </SheetContentItem>
  );
};

const SheetContentItem = styled.div`
  display: flex;
  height: 2.8vh;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.8vh;
`;
const Content = styled.div`
  color: white;
  font: ${({ theme }) => theme.fonts.body_bold_16px};
`;

export default BottomSheetItem;
