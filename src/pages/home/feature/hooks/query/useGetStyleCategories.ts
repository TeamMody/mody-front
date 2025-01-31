import { useQuery } from '@tanstack/react-query';
import { getStyleCategories } from '@shared/apis/style.ts';

export const useGetStyleCategories = () => {
  const result = useQuery({
    queryKey: ['styleCategories'],
    queryFn: () => getStyleCategories(),
    retry: 3,
  })
  return result;
}
