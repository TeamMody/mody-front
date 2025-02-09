import styled from 'styled-components';
import { ToggleButton } from '@shared/ui/ToggleButton';
import React, { useState } from 'react';
import { ConfirmationModal } from './modal/ConfirmationModal';
import { useModalStore } from '@my/features/store/useModalState.ts';
import { useNavigate } from 'react-router';
import { PostData } from '@shared/types/my/my';

interface BottomSheetItemProps {
  content: '수정하기' | '삭제하기' | '나만보기';
  icon?: string;
  setButtonState?: React.Dispatch<React.SetStateAction<boolean>>;
  data?: PostData;
}

const BottomSheetItem = ({ content, icon, setButtonState, data }: BottomSheetItemProps) => {
  const navigate = useNavigate();
  // 토글 상태 관리
  const [isOn, setIsOn] = useState<boolean>(false);

  // 버튼 클릭 시 상태 토글
  const toggleState = () => {
    setIsOn((prevState) => !prevState);
    if (setButtonState) setButtonState(!isOn);
  };

  const { modalState, closeModal, openModal } = useModalStore();

  const handleOnClick = () => {
    if (content === '수정하기') {
      console.log('수정하기');
      navigate('/post/editpost', { state: { data } });
    } else if (content === '삭제하기') {
      openModal();
    } else if (content === '나만보기') {
      console.log('나만보기');
    }
  };

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
          isOpened={modalState}
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
