import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { scrollToCenter } from '@onboarding/utils/scroll.ts';

const heights = Array.from({ length: 131 }, (_, i) => 120 + i);

const HeightSelector = () => {
  const [selectedHeight, setSelectedHeight] = useState<number>(160);
  const heightRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    scrollToCenter(heightRefs, heights.indexOf(selectedHeight));
  }, [selectedHeight, heights]);

  return (
    <Container>
      <SelectedHeight>{selectedHeight}cm</SelectedHeight>
      <Divider />
      <Dropdown>
        {heights.map((height, index) => (
          <Option
            key={height}
            isSelected={height === selectedHeight}
            onClick={() => setSelectedHeight(height)}
            ref={(el) => (heightRefs.current[index] = el)}
          >
            {height}
          </Option>
        ))}
      </Dropdown>
    </Container>
  );
};

export default HeightSelector;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #66666680;
  color: white;
  padding: 6px 18px 19.5px 18px;
  border-radius: 10px;
`;

const SelectedHeight = styled.div`
  font: ${({ theme }) => theme.fonts.heading_medium_20px};
`;

const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 230px;
  overflow-y: auto;
  padding: 30% 8px 30% 8px;
  scroll-snap-type: y mandatory;
`;

const Option = styled.div<{ isSelected: boolean }>`
  font: ${({ theme }) => theme.fonts.heading_medium_20px};
  text-align: center;
  cursor: pointer;
  background-color: ${({ isSelected, theme }) => (isSelected ? theme.colors.green500 : 'transparent')};
  color: ${({ isSelected, theme }) => (isSelected ? theme.colors.green800 : '#fff')};
  border-radius: 10px;
  &:hover {
    background-color: ${({ isSelected }) => (isSelected ? undefined : '#808080')};
  }
`;

const Divider = styled.div`
  margin-top: 6px;
  margin-bottom: 18px;
  width: 100%;
  height: 1px;
  background-color: #808080;
`;
