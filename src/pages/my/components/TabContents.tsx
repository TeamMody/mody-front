import styled from 'styled-components';
import Post from '@pages/my/components/Post';
import NoPosts from '@pages/my/components/NoPosts';

interface TabContentsProps {
  img: string;
  divide: number;
  activeTab: string;
}

const TabContents = ({ img, divide, activeTab }: TabContentsProps) => {
  return img ? (
    //게시글이 있을 때
    <TabContentsWrapper $divide={divide}>
      {Array.from({ length: 10 }).map((_, i) => (
        <Post key={i} img={img} activeTab={activeTab} />
      ))}
    </TabContentsWrapper>
  ) : (
    //게시글이 없을 때
    <NoPosts activeTab={activeTab} />
  );
};

const TabContentsWrapper = styled.div<{ $divide: number }>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: ${({ $divide }) => `calc(100% / ${$divide})`};
  width: 100%;
  height: 100%;
  gap: 0.7vw;
  overflow-y: auto;
`;

export default TabContents;
