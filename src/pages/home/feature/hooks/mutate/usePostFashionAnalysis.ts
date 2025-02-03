import { useMutation } from '@tanstack/react-query';
import { useStyleSurveyStore } from '@home/feature/store/useStyleSurveyStore.ts';
import { StyleAnalysisRequest } from '@shared/types';
import { useEffect } from 'react';
import { fetchFashionItemResult } from '@shared/apis/fashion/fashion.ts';


// 스타일 추천 hook과 합치기
export const usePostFashionAnalysis = () => {
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
    mutationFn: () => fetchFashionItemResult(request),
  });
  return result;
};
