import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import { createPost } from '@pages/post/apis/createPost';

export const useCreatePost = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      navigate('/post');
    },
    onError: (error) => {
      console.error('게시물 생성 실패:', error);
    },
  });
};
