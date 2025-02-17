import styled from 'styled-components';
import NoPosts from '@pages/my/components/NoPosts';
import useGetInfiniteRecommendations from '@my/features/hooks/query/useGetInfiniteRecommendations';
import { useInView } from 'react-intersection-observer';
import useInfiniteScroll from '@my/features/hooks/useInfiniteScroll';
import { SmallLoading } from '@shared/ui/SmallLoading';
import { RecommendationResponse, RecommendationType } from '@shared/types';
import Post from './Post';
import { ActiveIndex } from '../features/store/useTabBarStore';

const RecommendResults = () => {
  const {
    data: results,
    isLoading,
    isError,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useGetInfiniteRecommendations();
  const { ref } = useInView({ threshold: 0 });

  const { containerRef } = useInfiniteScroll({ hasNextPage, isFetchingNextPage, fetchNextPage }); // 스크롤 감지

  if (isLoading) {
    return (
      <LoadingWrapper>
        <SmallLoading />
      </LoadingWrapper>
    );
  }
  if (isError) return <p>에러</p>;

  return results?.pages[0] ? (
    <RecommendResultsWrapper ref={containerRef}>
      {results?.pages.map((post: RecommendationResponse) => (
        <Post
          key={post.recommendationId}
          id={post.recommendationId}
          imageUrl={post.imageUrl}
          recommendType={RecommendationType[post.recommendType as keyof typeof RecommendationType]}
          result={post}
        />
      ))}
      {hasNextPage && <Bottom ref={ref}>{isFetchingNextPage && <SmallLoading />}</Bottom>}
    </RecommendResultsWrapper>
  ) : (
    <NoPosts activeIndex={ActiveIndex.RECOMMEND} />
  );
};

const RecommendResultsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 33.33%;
  width: 100%;
  height: 100%;
  gap: 0.7vw;
  overflow-y: auto;
`;

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  grid-column: 1 / -1;
`;

export default RecommendResults;
