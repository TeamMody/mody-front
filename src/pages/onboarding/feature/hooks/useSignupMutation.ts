import { apiInstance } from '@shared/apis/instance';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import useSignupStore from '@onboarding/feature/store/signup.ts';

interface ErrorResponse {
  message: string;
  status: number;
}

const useSignupMutation = () => {
  const { email, password } = useSignupStore();

  const signupMutation = useMutation({
    mutationFn: async () => {
      const response = await apiInstance.post('/auth/signup', {
        email,
        password,
      });
      return response;
    },

    onError: (error: AxiosError) => {
      const axiosError = error as AxiosError<ErrorResponse>;
      if (error.status === 409 && axiosError.response?.data) {
        alert(axiosError.response.data.message);
      }
      if (error.status === 400) {
        alert('비밀번호에는 특수문자가 포함되어야 합니다.');
      } else {
        alert('서버 오류가 발생했습니다.');
      }
      return false;
    },
  });
  return signupMutation;
};
export default useSignupMutation;
