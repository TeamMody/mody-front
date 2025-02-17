import { useInfiniteQuery } from '@tanstack/react-query';
import { getLikedPosts, getMyPosts } from '@shared/apis/my.ts';
import { BaseResponse } from '@shared/types';
import { PostResponse } from '@shared/types/my/my.ts';
import { ActiveIndex } from '@my/features/store/useTabBarStore.ts';
const useGetInfinitePosts = (activeIndex: number) => {
  const size = 12;
  const fetchPosts: (params: {
    cursor: number | null;
    size: number;
  }) => Promise<BaseResponse<PostResponse>> =
    activeIndex === ActiveIndex.LIKE ? getLikedPosts : getMyPosts;

  return useInfiniteQuery({
    queryKey: ['posts', activeIndex],
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
