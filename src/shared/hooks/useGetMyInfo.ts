import { useQuery } from '@tanstack/react-query';
import { fetchMyInfo } from '@shared/apis/member/member.ts';

export const useGetMyInfo = () => {
  return useQuery({
    queryKey: ['myInfo'],
    queryFn: () => fetchMyInfo(),
  });
}
