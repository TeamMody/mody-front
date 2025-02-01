import { useMutation } from '@tanstack/react-query';
import { StyleAnalysisRequest } from '@shared/types';
import { fetchPostStyleAnalysis } from '@shared/apis/style/style.ts';
import { useStyleSurveyStore } from '@home/feature/store/useStyleSurveyStore.ts';
import { useEffect } from 'react';

export const usePostStyleAnalysis = () => {
  const selectedKeywords = useStyleSurveyStore().selectedKeywords;
  let request: StyleAnalysisRequest = {
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
      mutationFn: () => fetchPostStyleAnalysis(request),
    },
  );
  return result;
};
