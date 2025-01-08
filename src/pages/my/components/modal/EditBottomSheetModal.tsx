import React from 'react';
import styled from 'styled-components';
import BottomSheetItem from '../BottomSheetItem';
import IcPen from '@shared/assets/icon/ic-pen.svg';
import IcTrashCan from '@shared/assets/icon/ic-trash-can.svg';
// Props 타입 정의
interface EditBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

const EditBottomSheet: React.FC<EditBottomSheetProps> = ({ isOpen, onClose }) => {
  return (
    <SheetWrapper isOpen={isOpen}>
      <SheetContent>
        <CloseButton onClick={onClose}>닫기 </CloseButton>
        <BottomSheetItem content="수정하기" icon={IcPen} />
        <BottomSheetItem content="삭제하기" icon={IcTrashCan} />
        <BottomSheetItem content="나만보기" />
      </SheetContent>
    </SheetWrapper>
  );
};

// styled-components에 props 타입 적용
const SheetWrapper = styled.div<{ isOpen: boolean }>`
  position: fixed;
  bottom: 0%;
  width: 100vw;
  max-width: 440px;
  height: ${({ isOpen }) => (isOpen ? '22.3vh' : '0')};
  background-color: ${({ theme }) => theme.colors.gray800};
  transition: height 0.3s ease;
  z-index: 1; /* 내비게이션 바 위로 */
  border-radius: 30px 30px 0 0;
`;

const SheetContent = styled.div`
  padding: 4.1vh 5.1vw 0 5.1vw;
  height: 100%;
  flex-direction: row;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const Content = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-weight: 700;
`;
const SheetContentItem = styled.div`
  display: flex;
  height: 2.8vh;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.8vh;
`;

export default EditBottomSheet;
