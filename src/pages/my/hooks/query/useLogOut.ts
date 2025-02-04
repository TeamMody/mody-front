import { apiInstance } from '@shared/apis/instance';

export const useLogOut = async () => {
  const res = await apiInstance.post('/auth/logout', {}, { withCredentials: true });
  console.log(res);
  console.log('로그아웃 성공');
};
