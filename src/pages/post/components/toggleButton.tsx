import BottomSheetItem from '@pages/my/components/BottomSheetItem';

interface buttonStateProps {
  setButtonState: React.Dispatch<React.SetStateAction<boolean>>;
}
export const ToggleButton = ({ setButtonState }: buttonStateProps) => {
  return <BottomSheetItem content="나만보기" setButtonState={setButtonState} />;
};
