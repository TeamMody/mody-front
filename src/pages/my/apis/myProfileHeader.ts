import { apiInstance } from '@shared/apis/instance';
export const myProfileHeader = async () => {
  console.log('하이');
  const { data } = await apiInstance.get('/members/me');
  console.log(data.result);
  return data.result;
};
