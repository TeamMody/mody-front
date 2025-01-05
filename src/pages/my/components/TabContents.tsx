import styled from 'styled-components';
import Post from './Post';
import { useEffect, useRef } from 'react';

interface TabContentsProps {
  img: string;
  divide: number;
  activeTab: string;
}

const TabContents = ({ img, divide, activeTab }: TabContentsProps) => {
  const tabWrapperRef = useRef<HTMLDivElement | null>(null);

  // activeTab 변경 시마다 스크롤을 초기화
  useEffect(() => {
    if (tabWrapperRef.current) {
      tabWrapperRef.current.scrollTop = 0;
    }
  }, [activeTab]);
  return (
    <TabContentsWrapper ref={tabWrapperRef} $divide={divide}>
      {Array.from({ length: 10 }).map((_, i) => (
        <Post key={i} img={img} />
      ))}
    </TabContentsWrapper>
  );
};

const TabContentsWrapper = styled.div<{ $divide: number }>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: ${({ $divide }) => `calc(100% / ${$divide})`};
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

export default TabContents;
