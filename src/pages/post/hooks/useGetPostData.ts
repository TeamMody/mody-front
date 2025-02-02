import { useInfiniteQuery } from '@tanstack/react-query';
import { apiInstance } from '@shared/apis/instance';

const useGetPostData = () => {
  const { data, isLoading, error, fetchNextPage } = useInfiniteQuery({
    queryKey: ['post'],
    queryFn: async ({ pageParam }) => {},
  });
};
