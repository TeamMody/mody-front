import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiInstance } from '@shared/apis/instance';

const usePostLike = ({ postId }: { postId: number }) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      await apiInstance.post(`/posts/${postId}/like`);
    },
    onMutate: async () => {
      // 현재 캐시된 post 데이터 가져오기
      await queryClient.cancelQueries(['post', postId]); // 기존 요청 취소
      const previousPost = queryClient.getQueryData<{ isLiked: boolean; likeCount: number }>([
        'post',
        postId,
      ]);

      if (previousPost) {
        // 낙관적 업데이트 적용
        queryClient.setQueryData(['post', postId], {
          ...previousPost,
          isLiked: !previousPost.isLiked,
          likeCount: previousPost.isLiked ? previousPost.likeCount - 1 : previousPost.likeCount + 1,
        });
      }

      return { previousPost }; // 실패 시 롤백을 위해 이전 데이터 반환
    },
    onError: (_error, _variables, context) => {
      // 에러 발생 시 원래 데이터로 복원
      if (context?.previousPost) {
        queryClient.setQueryData(['post', postId], context.previousPost);
      }
    },
    onSettled: () => {
      // 요청 완료 후 서버 데이터 최신 상태 유지
      queryClient.invalidateQueries(['post', postId]);
    },
  });
};

export default usePostLike;
