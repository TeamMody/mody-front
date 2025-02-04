import styled from 'styled-components';
import AppBar from '@shared/ui/AppBar.tsx';
import plus from '@shared/assets/icon/ic-plus.svg';
import Post from '@shared/ui/Post.tsx';
import { useNavigate } from 'react-router';
import { useRef } from 'react';
import useGetPostData from '../hooks/useGetPostData';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

export const PostPage = () => {
  const navigate = useNavigate();
  const rightHeaderActionArr = [{ icon: plus, onClick: () => navigate('createPost') }];

  const bottomRef = useRef<HTMLDivElement | null>(null);
  const { data: postData, isLoading, error, fetchNextPage } = useGetPostData();
  useIntersectionObserver(bottomRef, fetchNextPage);

  return (
    <>
      <AppBar title={'김모디'} rightHeaderActionArr={rightHeaderActionArr} />

      <Container>
        {postData && postData.map((data, index) => <Post key={index} data={data} type="post" />)}
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
