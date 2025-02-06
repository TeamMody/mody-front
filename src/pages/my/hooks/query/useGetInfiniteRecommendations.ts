import { useInfiniteQuery } from '@tanstack/react-query';
import { getRecommendationResults } from '@shared/apis/my';

const useGetInfiniteRecommendations = () => {
  const size = 6;

  return useInfiniteQuery({
    queryKey: ['recommendation', size],
    queryFn: ({ pageParam }) => getRecommendationResults({ cursor: pageParam, size }),
    initialPageParam: null, // 첫 요청은 cursor 없이
    getNextPageParam: (lastPage) => {
      return lastPage.result.cursorPagination.hasNext
        ? lastPage.result.cursorPagination.cursor
        : undefined;
    },
    select: (data) => ({
      pages: data.pages.flatMap((page) => page.result.recommendResponseList),
      hasNextPage: data.pages.at(-1)?.result.cursorPagination?.hasNext,
    }),
  });
};

export default useGetInfiniteRecommendations;
