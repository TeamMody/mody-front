import { useEffect } from 'react';

type UsePositionedDialogProps = {
  inputRef: React.RefObject<HTMLInputElement>;
  dialogRef: React.RefObject<HTMLDialogElement>;
  isModalOpen: boolean;
};

const usePositionedDialog = ({ inputRef, dialogRef, isModalOpen }: UsePositionedDialogProps) => {
  useEffect(() => {
    // dialog의 위치를 inputPosition 바로 밑에 배치하기 위함
    if (isModalOpen && inputRef.current && dialogRef.current) {
      const inputPosition = inputRef.current.getBoundingClientRect();
      const dialog = dialogRef.current;
      dialog.style.width = `${inputPosition.width}px`;
    }
  }, [isModalOpen, inputRef, dialogRef]);
};

export default usePositionedDialog;
