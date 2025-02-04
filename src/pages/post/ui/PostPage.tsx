import styled from 'styled-components';
import AppBar from '@shared/ui/AppBar.tsx';
import plus from '@shared/assets/icon/ic-plus.svg';
import Post from '@shared/ui/Post.tsx';
import TempImg1 from '@post/images/tempImg1.jpg';
import TempImg2 from '@post/images/tempImg2.jpg';
import TempImg3 from '@post/images/tempImg3.png';
import { useMemo } from 'react';
import { useNavigate } from 'react-router';
import { useRef } from 'react';
import useGetPostData from '../hooks/useGetPostData';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { FileData, PostData } from '@shared/types/my/my';

const file1: FileData = {
  s3Url: TempImg1,
};
const file2: FileData = {
  s3Url: TempImg2,
};
const file3: FileData = {
  s3Url: TempImg3,
};

export const mockData: PostData[] = [
  {
    files: [file3, file2, file3, file1, file1, file1, file1, file3, file2, file3],
    writerNickname: '사람1',
    bodyType: '네모형 체형',
    content:
      '안녕하세요 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋzzzzzzzzzzzzzzzzzzzㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ',
    likeCount: 112,
    isLiked: true,
    postId: 1,
    writerId: 1,
    isPublic: true,
  },
  {
    files: [file1, file2],
    writerNickname: '사람2',
    bodyType: '네모형 체형',
    content: '테스트 데이터입니다. ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ',
    likeCount: 98,
    isLiked: false,
    postId: 2,
    writerId: 1,
    isPublic: true,
  },
  {
    files: [file1, file2],
    writerNickname: '사람2',
    bodyType: '네모형 체형',
    content: '테스트 데이터입니다. ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ',
    likeCount: 98,
    isLiked: false,
    postId: 3,
    writerId: 1,
    isPublic: true,
  },
  {
    files: [file1],
    writerNickname: '사람2',
    bodyType: '네모형 체형',
    content: '테스트 데이터입니다. ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ',
    likeCount: 98,
    isLiked: false,
    postId: 4,
    writerId: 1,
    isPublic: true,
  },
];

export const PostPage = () => {
  const navigate = useNavigate();
  const rightHeaderActionArr = [{ icon: plus, onClick: () => navigate('createPost') }];
  // Post내부 Container 리렌더링 발생은 나중에 해결
  const memoizedData = useMemo(() => mockData, []);

  const bottomRef = useRef<HTMLDivElement | null>(null);
  const { data: postData, isLoading, error, fetchNextPage } = useGetPostData();
  useIntersectionObserver(bottomRef, fetchNextPage);

  return (
    <>
      <AppBar title={'김모디'} rightHeaderActionArr={rightHeaderActionArr} />

      <Container>
        {postData && postData.map((data, index) => <Post key={index} data={data} type={'post'} />)}
        {isLoading && <div>로딩중</div>}
      </Container>
      {/* <BottomRef className="bottomRef" ref={bottomRef}></BottomRef> */}
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 9vh - 64px);
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  position: relative;
`;

const BottomRef = styled.div`
  width: 100%;
  height: 5vh;
  border: 1px solid red;
`;
export default PostPage;
