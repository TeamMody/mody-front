import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiInstance } from '@shared/apis/instance';
import { QueryKey } from '@shared/types/post/post';
import { PostData } from '@shared/types/my/my';

interface PostsData {
  pages: { postResponses: PostData[] }[];
}

interface SinglePostData {
  result: PostData;
}

const usePostLike = (queryKey: QueryKey) => {
  const queryClient = useQueryClient();

  const postLikeMutation = useMutation<number, Error, number>({
    mutationFn: async (postId: number): Promise<number> => {
      await apiInstance.post(`/posts/${postId}/like`);
      return postId;
    },
    onMutate: (postId: number) => {
      // 기존 데이터 가져오기
      const previousData = queryClient.getQueryData<PostsData | SinglePostData>(queryKey);

      if (!previousData) return { previousData, postId };

      if ('pages' in previousData) {
        // posts인 경우 (pages가 존재하는 경우)
        const updatedPosts = {
          ...previousData,
          pages: (previousData as PostsData).pages.map((page) => ({
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

        queryClient.setQueryData(queryKey, updatedPosts);
        return { previousData, postId };
      } else {
        // posts가 아닌 경우 (단일 데이터)
        const updatedData = {
          ...previousData,
          result: {
            ...previousData.result,
            isLiked: !previousData.result.isLiked,
            likeCount: previousData.result.isLiked
              ? previousData.result.likeCount - 1
              : previousData.result.likeCount + 1,
          },
        };

        queryClient.setQueryData(queryKey, updatedData);
        return { previousData, postId };
      }
    },

    onSuccess: () => {
      queryClient.refetchQueries({ queryKey });
    },
  });

  return postLikeMutation;
};

export default usePostLike;
