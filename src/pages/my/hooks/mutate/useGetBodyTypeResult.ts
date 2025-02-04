import { useQuery } from '@tanstack/react-query';
import { fetchBodyAnalysisResult } from '@shared/apis/body/body.ts';

export const useGetBodyTypeResult = () => {
  const result = useQuery({
    queryKey: ['bodyTypeResult'],
    queryFn: () => fetchBodyAnalysisResult(),
  })

  return result;
}
