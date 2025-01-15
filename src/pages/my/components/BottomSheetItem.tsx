import styled from 'styled-components';
import { ToggleButton } from '@shared/ui/ToggleButton';
import { useState } from 'react';

interface BottomSheetItemProps {
  content: string;
  icon?: string;
}

const BottomSheetItem = ({ content, icon }: BottomSheetItemProps) => {
  // 토글 상태 관리
  const [isOn, setIsOn] = useState<boolean>(false);

  // 버튼 클릭 시 상태 토글
  const toggleState = () => {
    setIsOn((prevState) => !prevState);
  };
  return (
    <SheetContentItem>
      <Content>{content}</Content>
      {content === '나만보기' ? (
        <ToggleButton $isOn={isOn} onSetToggle={toggleState} />
      ) : (
        <img src={icon}></img>
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
