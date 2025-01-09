import { useRef } from 'react';
import { Sheet, SheetRef } from 'react-modal-sheet';
import { styled } from 'styled-components';
import BottomSheetItem from '../BottomSheetItem';
import IcPen from '@shared/assets/icon/ic-pen.svg';
import IcTrashCan from '@shared/assets/icon/ic-trash-can.svg';

interface EditBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

const EditBottomSheet = ({ isOpen, onClose }: EditBottomSheetProps) => {
  const ref = useRef<SheetRef>(null);
  return (
    <>
      <CustomSheet ref={ref} isOpen={isOpen} onClose={onClose}>
        <Sheet.Container>
          <Sheet.Content>
            <BottomSheetItem content="수정하기" icon={IcPen} />
            <BottomSheetItem content="삭제하기" icon={IcTrashCan} />
            <BottomSheetItem content="나만보기" />
          </Sheet.Content>
        </Sheet.Container>
      </CustomSheet>
    </>
  );
};

const CustomSheet = styled(Sheet)`
  .react-modal-sheet-container {
    height: 22.3vh !important;
    width: 100vw !important;
    border-radius: 30px 30px 0 0 !important;
    background-color: ${({ theme }) => theme.colors.gray800} !important;
  }

  .react-modal-sheet-content {
    padding: 4.1vh 5.1vw 0 5.1vw;
    display: flex;
    flex-direction: column;
  }
`;

export default EditBottomSheet;
