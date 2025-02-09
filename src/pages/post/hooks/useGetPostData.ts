import { useInfiniteQuery } from '@tanstack/react-query';
import { apiInstance } from '@shared/apis/instance';

const useGetPostData = () => {
  const { data, isLoading, error, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ['post'],
    queryFn: async ({ pageParam }) => {
      const url = pageParam === 0 ? '/posts?size=15' : `/posts?cursor=${pageParam}&size=15`;
      const res = await apiInstance.get(url);
      return res.data.result;
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      return lastPage.cursorPagination.hasNext ? lastPage.cursorPagination.cursor : undefined;
    },
    select: (data) => {
      // 모든 페이지의 postResponses를 하나의 배열로 평탄화(flatten)
      return data?.pages?.flatMap((page) => page.postResponses || []);
    },
  });
  return { data, isLoading, error, fetchNextPage, hasNextPage };
};

export default useGetPostData;
