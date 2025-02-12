import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiInstance } from '@shared/apis/instance';

interface PostData {
  postId: number;
  isLiked: boolean;
  likeCount: number;
  files: string[]; // ✅ images 배열 유지
}

const usePostLike = () => {
  const queryClient = useQueryClient();

  const postLikeMutation = useMutation<number, Error, number>({
    mutationFn: async (postId: number): Promise<number> => {
      await apiInstance.post(`/posts/${postId}/like`);
      return postId;
    },
    onMutate: (postId: number) => {
      const previousPosts = queryClient.getQueryData<{ pages: { postResponses: PostData[] }[] }>([
        'posts',
      ]);

      if (!previousPosts) return { previousPosts, postId };

      // ✅ 무한 스크롤 데이터 구조 유지하며 업데이트
      const updatedPosts = {
        ...previousPosts,
        pages: previousPosts.pages.map((page) => ({
          ...page,
          postResponses: page.postResponses.map((post) =>
            post.postId === postId
              ? {
                  ...post,
                  isLiked: !post.isLiked,
                  likeCount: post.isLiked ? post.likeCount - 1 : post.likeCount + 1,
                  files: [...post.files],
                }
              : post,
          ),
        })),
      };

      // ✅ UI를 즉시 업데이트
      queryClient.setQueryData(['posts'], updatedPosts);

      return { previousPosts, postId };
    },
    onError: (_error, _variables, context) => {
      if (context?.previousPosts) {
        queryClient.setQueryData(['posts'], context.previousPosts);
      }
    },
    onSuccess: (_data, _error) => {
      queryClient.refetchQueries(['posts']); // ✅ 최신 데이터를 다시 패칭
    },
  });

  return postLikeMutation;
};

export default usePostLike;
