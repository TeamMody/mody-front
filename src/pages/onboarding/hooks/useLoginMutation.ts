import { LoginSchemaType } from '../schema';
import { apiInstance } from '@shared/apis/instance';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import useAuthStore from '@shared/store/token';

interface ErrorResponse {
  message: string;
  status: number;
}

const useLoginMutation = () => {
  const loginMutation = useMutation({
    mutationFn: async (data: LoginSchemaType) => {
      const response = await apiInstance.post('/auth/login', data);
      return response;
    },
    onSuccess: (data) => {
      const accessToken = data.headers.authorization.split(' ')[1];
      const { setAccessToken } = useAuthStore.getState();
      setAccessToken(accessToken);

      window.location.href = '/';
    },
    onError: (error: AxiosError) => {
      const axiosError = error as AxiosError<ErrorResponse>;
      if (error.status === 401 && axiosError.response?.data) {
        alert(axiosError.response.data.message);
      } else {
        alert('서버에 문제가 있다.');
      }
    },
  });
  return loginMutation;
};
export default useLoginMutation;
