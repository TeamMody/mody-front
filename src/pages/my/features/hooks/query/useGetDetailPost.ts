import { getDetailPost } from '@shared/apis/my.ts';
import { useQuery } from '@tanstack/react-query';

const useGetDetailPost = (postId: number) => {
  return useQuery({
    queryKey: ['detailPost', postId],
    queryFn: () => getDetailPost(postId),
  });
};

export default useGetDetailPost;
