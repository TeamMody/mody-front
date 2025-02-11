import { useMutation } from '@tanstack/react-query';
import { fetchRecommendationLike } from '@shared/apis/recommendations/recommendations.ts';
import { useRecommendationResultStore } from '@home/feature/store/useRecommendationResultStore.ts';

export const usePostLikeEvent = () => {
  const { recommendation, setRecommendation } = useRecommendationResultStore();
  const result = useMutation({
    mutationFn: (id: number) => fetchRecommendationLike(id),
    onMutate: async () => {
      if (!recommendation) return;

      const prevData = { ...recommendation };
      if (recommendation) {
        recommendation.liked = !recommendation?.liked;
        setRecommendation({ ...recommendation, liked: !recommendation.liked });
      }
      return { prevData };
    },
    onError: (err, variables, context) => {
      if (context?.prevData) {
        console.error(err, variables);
        setRecommendation(context.prevData);
      }
    },
  });
  return result;
};
