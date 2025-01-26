import { apiInstance } from '@shared/apis/instance';
import { useMutation } from '@tanstack/react-query';
import useAuthStore from '@shared/store/token';

const useRefreshMutation = () => {
  const refreshMutation = useMutation({
    mutationFn: async () => {
      const response = await apiInstance.post('/auth/reissue');
      return response;
    },
    onSuccess: (data) => {
      const accessToken = data.headers.authorization.split(' ')[1];
      const { setAccessToken } = useAuthStore.getState();
      setAccessToken(accessToken);
    },
    onError: (err) => {
      console.log(err);
    },
  });
  return refreshMutation;
};
export default useRefreshMutation;
