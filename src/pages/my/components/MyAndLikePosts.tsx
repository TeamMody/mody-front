import styled from 'styled-components';
import Post from '@pages/my/components/Post';
import NoPosts from '@pages/my/components/NoPosts';

import useGetInfinitePosts from '../hooks/useGetInfinitePosts';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { SmallLoading } from '@shared/ui/SmallLoading';
import { PostData } from '@shared/types/my/my';

const MyAndLikePosts = ({ activeTab }: { activeTab: string }) => {
  const {
    data: posts,
    isLoading,
    isError,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useGetInfinitePosts({ activeTab });

  const { ref, inView } = useInView({ threshold: 0 });
  const [userScrolled, setUserScrolled] = useState(false);

  const containerRef = React.useRef<HTMLDivElement>(null);

  // 스크롤 감지 핸들러
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      // 스크롤이 맨 아래에 도달했을 때
      const isAtBottom =
        container.scrollTop + container.clientHeight >=
        container.scrollHeight - container.clientHeight * 0.4;
      if (isAtBottom && hasNextPage && !isFetchingNextPage) {
        setUserScrolled(true);
      }
    };
    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [hasNextPage, isFetchingNextPage]);

  // 스크롤이 맨 아래에 도달했을 때 fetch 실행
  useEffect(() => {
    if (userScrolled && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
      setUserScrolled(false);
    }
  }, [userScrolled, hasNextPage, fetchNextPage, isFetchingNextPage]);

  if (isLoading) {
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
        <Post key={post.postId} data={post} activeTab={activeTab} />
      ))}
      {hasNextPage && <Bottom ref={ref}>{isFetchingNextPage && <SmallLoading />}</Bottom>}
    </MyAndLikePostsWrapper>
  ) : (
    <NoPosts activeTab={activeTab} />
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
