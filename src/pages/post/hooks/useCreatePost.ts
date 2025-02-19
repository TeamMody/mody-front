import { useMutation } from '@tanstack/react-query';
import { createPost } from '@pages/post/feature/apis/createPost';
import { queryClient } from '@app/providers/QueryProvider';
import { ActiveIndex } from '@my/features/store/useTabBarStore.ts';
export const useCreatePost = () => {
  return useMutation({
    mutationFn: createPost,
    onError: (error) => {
      console.error('게시물 생성 실패:', error);
    },
    onSuccess: async () => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ['posts', ActiveIndex.MY] }),
        queryClient.invalidateQueries({ queryKey: ['posts'] }),
      ]);
    },
  });
};
