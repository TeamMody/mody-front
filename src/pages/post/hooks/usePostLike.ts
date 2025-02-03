import { useMutation, useQueryClient, QueryKey } from '@tanstack/react-query';
import { apiInstance } from '@shared/apis/instance';

interface PostData {
  isLiked: boolean;
  likeCount: number;
}

const usePostLike = () => {
  const queryClient = useQueryClient();

  const postLikeMutation = useMutation<
    number,
    Error,
    number,
    { previousPost?: PostData; postId: number }
  >({
    mutationFn: async (postId: number): Promise<number> => {
      await apiInstance.post(`/posts/${postId}/like`);
      return postId;
    },
    onMutate: async (postId: number) => {
      const queryKey: QueryKey = ['post', postId]; // ✅ QueryKey 타입을 명확하게 지정
      await queryClient.cancelQueries(queryKey);

      const previousPost = queryClient.getQueryData<PostData>(queryKey);

      if (previousPost) {
        // 낙관적 업데이트 적용
        queryClient.setQueryData(queryKey, {
          ...previousPost,
          isLiked: !previousPost.isLiked,
          likeCount: previousPost.isLiked ? previousPost.likeCount - 1 : previousPost.likeCount + 1,
        });
      }

      return { previousPost, postId };
    },
    onError: (_error, _variables, context) => {
      if (context?.previousPost) {
        const queryKey: QueryKey = ['post', context.postId];
        queryClient.setQueryData(queryKey, context.previousPost);
      }
    },

    onSettled: (_data, _error, postId) => {
      const queryKey: QueryKey = ['post', postId];
      queryClient.invalidateQueries(queryKey);
    },
  });

  return postLikeMutation;
};

export default usePostLike;
