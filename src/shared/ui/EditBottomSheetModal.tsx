import { useRef } from 'react';
import { Sheet, SheetRef } from 'react-modal-sheet';
import { styled } from 'styled-components';
import IcPen from '@shared/assets/icon/ic-pen.svg';
import IcTrashCan from '@shared/assets/icon/ic-trash-can.svg';
import BottomSheetItem from '@pages/my/components/BottomSheetItem';
import { PostData } from '@shared/types/my/my';

interface EditBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  data: PostData;
}

const EditBottomSheet = ({ isOpen, onClose, data }: EditBottomSheetProps) => {
  const ref = useRef<SheetRef>(null);

  return (
    <Sheet isOpen={isOpen} onClose={onClose} ref={ref}>
      <SheetContainer>
        <SheetContent>
          <BottomSheetItem content="수정하기" icon={IcPen} data={data} />
          <BottomSheetItem content="삭제하기" icon={IcTrashCan} />
          <BottomSheetItem content="나만보기" />
        </SheetContent>
      </SheetContainer>
    </Sheet>
  );
};

const SheetContainer = styled(Sheet.Container)`
  height: 22.3vh !important;
  width: 100vw !important;
  border-radius: 30px 30px 0 0 !important;
  background-color: ${({ theme }) => theme.colors.gray800} !important;
`;

const SheetContent = styled(Sheet.Content)`
  padding: 4.1vh 5.1vw 0 5.1vw;
  display: flex;
  flex-direction: column;
`;

export default EditBottomSheet;
