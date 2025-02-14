import styled from 'styled-components';
import Post from '@pages/my/components/Post';
import NoPosts from '@pages/my/components/NoPosts';
import useGetInfinitePosts from '../hooks/query/useGetInfinitePosts';
import { useInView } from 'react-intersection-observer';
import { SmallLoading } from '@shared/ui/SmallLoading';
import { PostData } from '@shared/types/my/my';
import useInfiniteScroll from '../hooks/useInfiniteScroll';
import { ActiveIndex } from '../features/store/useTabBarStore';

const MyAndLikePosts = ({ activeIndex }: { activeIndex: ActiveIndex }) => {
  const {
    data: posts,
    isLoading,
    isFetching,
    isError,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useGetInfinitePosts(activeIndex);

  const { ref } = useInView({ threshold: 0 });

  const { containerRef } = useInfiniteScroll({ hasNextPage, isFetchingNextPage, fetchNextPage }); // 스크롤 감지

  if (isLoading || isFetching) {
    return (
      <LoadingWrapper>
        <SmallLoading />
      </LoadingWrapper>
    );
  }
  if (isError) return <p>에러</p>;

  return posts?.pages[0] ? (
    <MyAndLikePostsWrapper ref={containerRef}>
      {posts?.pages.map((post: PostData) => (
        <Post key={post.postId} id={post.postId} imageUrl={post.files[0].s3Url} />
      ))}
      {hasNextPage && <Bottom ref={ref}>{isFetchingNextPage && <SmallLoading />}</Bottom>}
    </MyAndLikePostsWrapper>
  ) : (
    <NoPosts />
  );
};

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

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
  width: 100%;
  grid-column: 1 / -1;
`;

export default MyAndLikePosts;
