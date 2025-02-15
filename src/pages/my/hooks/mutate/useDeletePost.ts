import { queryClient } from '@app/providers/QueryProvider';
import { ActiveIndex } from '@pages/my/features/store/useTabBarStore';
import { deletePost } from '@shared/apis/my';
import { useMutation } from '@tanstack/react-query';

export const deletePostMutation = () => {
  return useMutation({
    mutationFn: (postId: number) => deletePost(postId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts', ActiveIndex.MY] });
    },
  });
};
