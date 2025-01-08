import { theme } from '@app/styles';
import styled from 'styled-components';

interface ToggleProps {
  isOn: boolean;
  onSetToggle: () => void;
}

export const Toggle = ({ isOn, onSetToggle }: ToggleProps) => {
  return (
    <ToggleButton isOn={isOn} onClick={onSetToggle}>
      <Circle isOn={isOn} />
    </ToggleButton>
  );
};

// 토글 버튼 스타일링
const ToggleButton = styled.button<{ isOn: boolean }>`
  position: relative;
  width: 42.8px;
  height: 24px;
  background-color: ${(props) => (props.isOn ? props.theme.colors.green600 : '#f44336')};
  border-radius: 20.5px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  /* 버튼 크기 조정 */
  padding: 0;
`;

const Circle = styled.div<{ isOn: boolean }>`
  position: absolute;
  top: 1.75px;
  left: ${(props) =>
    props.isOn ? '20.6px' : '1.7px'}; /* isOn이 true일 때 오른쪽, false일 때 왼쪽 */
  width: 20.5px;
  height: 20.5px;
  background-color: white;
  border-radius: 50%;
  transition: left 0.3s;
`;
