import styled from 'styled-components';

interface ToggleButtonProps {
  $isOn: boolean;
  onSetToggle: () => void;
}

export const ToggleButton = ({ $isOn, onSetToggle }: ToggleButtonProps) => {
  return (
    <ToggleButtonStyle $isOn={$isOn} onClick={onSetToggle}>
      <Circle $isOn={$isOn} />
    </ToggleButtonStyle>
  );
};

// 토글 버튼 스타일링
const ToggleButtonStyle = styled.button<{ $isOn: boolean }>`
  position: relative;
  width: 53.57px;
  height: 30px;
  background-color: ${(props) =>
    props.$isOn ? props.theme.colors.green600 : props.theme.colors.gray500};
  border-radius: 25.7px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
`;

const Circle = styled.div<{ $isOn: boolean }>`
  position: absolute;
  top: 2.14px;
  left: ${(props) =>
    props.$isOn ? '25.73px' : '2.14px'}; /* isOn이 true일 때 오른쪽, false일 때 왼쪽 */
  width: 25.7px;
  height: 25.7px;
  background-color: white;
  border-radius: 50%;
  transition: left 0.3s;
`;
