import BottomSheetItem from '@pages/my/components/BottomSheetItem';

interface buttonStateProps {
  buttonState: boolean;
  setButtonState: React.Dispatch<React.SetStateAction<boolean>>;
}
export const ToggleButton = ({ buttonState, setButtonState }: buttonStateProps) => {
  return (
    <BottomSheetItem content="나만보기" buttonState={buttonState} setButtonState={setButtonState} />
  );
};
