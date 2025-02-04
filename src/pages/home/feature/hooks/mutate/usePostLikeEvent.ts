import { useMutation } from '@tanstack/react-query';
import { RecommendationType } from '@shared/types';
import { fetchRecommendationLike } from '@shared/apis/common/common.ts';

export const usePostLikeEvent = (type: RecommendationType) => {
  // 낙관적 업데이트 적용
  // 스타일, 패션 추천 결과 모두 대응하도록 로직 수정
  const result = useMutation({
    mutationFn: (id: number) => fetchRecommendationLike(id, type),
  });
  return result;
};
