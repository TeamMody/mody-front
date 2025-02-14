import { patchIsPublic } from '@shared/apis/post/post';
import { useMutation } from '@tanstack/react-query';

const usePatchIsPublic = () => {
  return useMutation({
    mutationFn: (data: number) => patchIsPublic(data),
    onError: (error) => {
      console.error('게시글 수정 실패', error);
    },
  });
};

export default usePatchIsPublic;
