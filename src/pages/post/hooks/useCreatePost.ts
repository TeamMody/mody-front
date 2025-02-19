import { useMutation } from '@tanstack/react-query';
import { createPost } from '@pages/post/apis/createPost';
import { queryClient } from '@app/providers/QueryProvider';

export const useCreatePost = () => {
  return useMutation({
    mutationFn: createPost,
    onError: (error) => {
      console.error('게시물 생성 실패:', error);
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['items'] }),
  });
};
