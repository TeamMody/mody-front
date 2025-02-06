import { apiInstance } from '@shared/apis/instance';

export const useLogOut = async () => {
  try {
    const res = await apiInstance.post('/auth/logout', {}, { withCredentials: true });
  } catch (error) {
    console.log(error);
  }
};
