import { deletePost } from '@shared/apis/my';
import { useMutation } from '@tanstack/react-query';

export const deletePostMutation = () => {
  return useMutation({
    mutationFn: (postId: number) => deletePost(postId),
  });
};
