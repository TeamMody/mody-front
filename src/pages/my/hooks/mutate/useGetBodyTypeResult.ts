import { useQuery } from '@tanstack/react-query';
import { fetchBodyAnalysisResult } from '@shared/apis/body/body.ts';

export const useGetBodyTypeResult = (id: number) => {
  const result = useQuery({
    queryKey: ['bodyTypeResult', id],
    queryFn: () => fetchBodyAnalysisResult(),
  })

  return result;
}
