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
      return response.data;
    },
    onSuccess: (data) => {
      const accessToken = data.result.accessToken;
      const registrationCompleted = data.result.registrationCompleted;

      const { setAccessToken } = useAuthStore.getState();
      setAccessToken(accessToken);
      if (registrationCompleted) {
        window.location.href = '/';
      } else {
        window.location.href = '/onboarding/inputuser';
      }
    },
    onError: (error: AxiosError) => {
      const axiosError = error as AxiosError<ErrorResponse>;
      if (error.status === 401 && axiosError.response?.data) {
        alert(axiosError.response.data.message);
      } else {
        alert('서버 오류가 발생했습니다.');
      }
    },
  });
  return loginMutation;
};
export default useLoginMutation;
