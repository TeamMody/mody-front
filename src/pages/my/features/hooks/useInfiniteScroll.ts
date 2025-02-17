import { useEffect, useState, useRef } from 'react';

interface UseInfiniteScrollProps {
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  fetchNextPage: () => void;
}

const useInfiniteScroll = ({
  hasNextPage,
  isFetchingNextPage,
  fetchNextPage,
}: UseInfiniteScrollProps) => {
  const [userScrolled, setUserScrolled] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

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

  return { containerRef };
};

export default useInfiniteScroll;
