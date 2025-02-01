import { useMutation } from '@tanstack/react-query';
import { fetchBodyAnalysis } from '@shared/apis/body/body.ts';
import { BodyAnalysisRequest } from '@shared/types';

export const usePostBodyAnalysis = () => {
  const result = useMutation({
    mutationFn: (request: BodyAnalysisRequest) => fetchBodyAnalysis(request),
  });

  return result;
};
