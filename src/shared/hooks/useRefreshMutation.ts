import { apiInstance } from '@shared/apis/instance';
import { useMutation } from '@tanstack/react-query';

// refresh 오류 처리를 굳이 interceptor로 할 필요가 있을까

const useRefreshMutation = () => {
  const refreshMutation = useMutation({
    mutationFn: async () => {
      const response = await apiInstance.post('/auth/reissue');
      return response.data;
    },
    onSuccess: (data) => {
      return data.result.accessToken;
    },
  });
  return refreshMutation;
};
export default useRefreshMutation;
