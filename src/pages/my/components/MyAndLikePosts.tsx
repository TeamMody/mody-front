import styled from 'styled-components';
import Post from '@pages/my/components/Post';
import NoPosts from '@pages/my/components/NoPosts';
import { PostData } from '@shared/types';
import ClipLoader from 'react-spinners/ClipLoader';
import useGetInfinitePosts from '../hooks/useGetInfinitePosts';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
const MyAndLikePosts = ({ activeTab }: { activeTab: string }) => {
  const {
    data: posts,
    isLoading,
    isError,
    hasNextPage,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
  } = useGetInfinitePosts({ activeTab });

  const { ref, inView } = useInView({ threshold: 0 });

  useEffect(() => {
    if (inView) {
      !isFetching && hasNextPage && fetchNextPage();
    }
  }, [inView, isFetching, hasNextPage, fetchNextPage]);

  if (isLoading) return <p>로딩중</p>;
  if (isError) return <p>에러</p>;

  console.log(posts);
  return (posts?.pages?.length ?? 0 > 0) ? (
    //게시글이 있을 때
    <MyAndLikePostsWrapper>
      {posts?.pages.map((post: PostData) => (
        <Post key={post.postId} data={post} activeTab={activeTab} />
      ))}
      {hasNextPage && (
        <Bottom ref={ref}>{isFetchingNextPage && <ClipLoader color={'#fff'} />}</Bottom>
      )}{' '}
    </MyAndLikePostsWrapper>
  ) : (
    //게시글이 없을 때
    <NoPosts activeTab={activeTab} />
  );
};

const MyAndLikePostsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 50%;
  width: 100%;
  height: 100%;
  gap: 0.7vw;
  overflow-y: auto;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: center;
  height: 3rem;
  width: 100%;
  //새로운 행으로 배치
  grid-column: 1 / -1;
`;

export default MyAndLikePosts;
