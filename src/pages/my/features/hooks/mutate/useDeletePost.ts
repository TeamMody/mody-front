import { queryClient } from '@app/providers/QueryProvider.tsx';
import { ActiveIndex } from '@my/features/store/useTabBarStore.ts';
import { deletePost } from '@shared/apis/my.ts';
import { useMutation } from '@tanstack/react-query';

export const deletePostMutation = () => {
  return useMutation({
    mutationFn: (postId: number) => deletePost(postId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts', ActiveIndex.MY] });
    },
  });
};
