import { useMutation } from '@tanstack/react-query';
import { RecommendationRequest, RecommendationType } from '@shared/types';
import { fetchPostRecommendations } from '@shared/apis/recommendations/recommendations.ts';
import { useStyleSurveyStore } from '@home/feature/store/useStyleSurveyStore.ts';
import { useEffect } from 'react';

export const usePostRecommendations = () => {
  const selectedKeywords = useStyleSurveyStore().selectedKeywords;
  let request: RecommendationRequest = {
    preferredStyles: [],
    dislikedStyles: [],
    appealedImage: [],
  };

  useEffect(() => {
    request = {
      preferredStyles: selectedKeywords.liked,
      dislikedStyles: selectedKeywords.disliked,
      appealedImage: selectedKeywords.image,
    };
    console.log(request);
  }, [selectedKeywords]);

  const result = useMutation({
      mutationFn: (type: RecommendationType) => fetchPostRecommendations(request, type),
    },
  );
  return result;
};
