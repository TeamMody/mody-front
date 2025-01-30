import { useInfiniteQuery } from '@tanstack/react-query';
import { getLikedPosts, getMyPosts } from '@shared/apis/my';

const useGetInfinitePosts = ({ activeTab }: { activeTab: string }) => {
  const size = 6;
  const fetchPosts = activeTab === 'like' ? getLikedPosts : getMyPosts;

  return useInfiniteQuery({
    queryKey: ['posts', activeTab, size],
    queryFn: ({ pageParam }) => fetchPosts({ cursor: pageParam, size }),
    initialPageParam: null, // 첫 요청은 cursor 없이
    getNextPageParam: (lastPage) => {
      return lastPage?.cursorPagination?.hasNext
        ? lastPage.cursorPagination.cursor // 다음 요청에서 cursor 사용
        : undefined;
    },
    select: (data) => ({
      pages: data.pages.flatMap((page) => page.posts),
      hasNextPage: data.pages.at(-1)?.cursorPagination?.hasNext,
    }),
  });
};

export default useGetInfinitePosts;
