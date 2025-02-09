import patchPost from '@shared/apis/post/post';
import { PatchPostProps } from '@shared/types';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router';

const usePatchPost = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: PatchPostProps) => patchPost(data),
    onSuccess: () => {
      navigate('/my');
    },
    onError: (error) => {
      console.error('게시물 수정 실패:', error);
    },
  });
};

export default usePatchPost;
