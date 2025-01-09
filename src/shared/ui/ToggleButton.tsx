import styled from 'styled-components';

interface ToggleButtonProps {
  $ison: boolean;
  onSetToggle: () => void;
}

export const ToggleButton = ({ $ison, onSetToggle }: ToggleButtonProps) => {
  return (
    <ToggleButtonStyle $ison={$ison} onClick={onSetToggle}>
      <Circle $ison={$ison} />
    </ToggleButtonStyle>
  );
};

// 토글 버튼 스타일링
const ToggleButtonStyle = styled.button<{ $ison: boolean }>`
  position: relative;
  width: 53.57px;
  height: 30px;
  background-color: ${(props) =>
    props.$ison ? props.theme.colors.green600 : props.theme.colors.gray500};
  border-radius: 25.7px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
`;

const Circle = styled.div<{ $ison: boolean }>`
  position: absolute;
  top: 2.14px;
  left: ${(props) =>
    props.$ison ? '25.73px' : '2.14px'}; /* ison이 true일 때 오른쪽, false일 때 왼쪽 */
  width: 25.7px;
  height: 25.7px;
  background-color: white;
  border-radius: 50%;
  transition: left 0.3s;
`;
