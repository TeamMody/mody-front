import { useQuery } from '@tanstack/react-query';
import { fetchStyleCategories } from '@shared/apis/recommendations/recommendations.ts';

export const useGetStyleCategories = () => {
  const result = useQuery({
    queryKey: ['styleCategories'],
    queryFn: () => fetchStyleCategories(),
    retry: 3,
  })
  return result;
}
