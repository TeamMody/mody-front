import { useInfiniteQuery } from '@tanstack/react-query';
import { getLikedPosts, getMyPosts } from '@shared/apis/my';
import { BaseResponse } from '@shared/types';
import { PostResponse } from '@shared/types/my/my';
const useGetInfinitePosts = ({ activeTab }: { activeTab: string }) => {
  const size = 6;
  const fetchPosts: (params: {
    cursor: number | null;
    size: number;
  }) => Promise<BaseResponse<PostResponse>> = activeTab === 'like' ? getLikedPosts : getMyPosts;

  return useInfiniteQuery({
    queryKey: ['posts', activeTab, size],
    queryFn: ({ pageParam }) => fetchPosts({ cursor: pageParam, size }),
    initialPageParam: null, // 첫 요청은 cursor 없이
    getNextPageParam: (lastPage) => {
      return lastPage.result.cursorPagination.hasNext
        ? lastPage.result.cursorPagination.cursor
        : undefined;
    },
    select: (data) => ({
      pages: data.pages.flatMap((page) => page.result.postResponses),
      hasNextPage: data.pages.at(-1)?.result.cursorPagination?.hasNext,
    }),
  });
};

export default useGetInfinitePosts;
