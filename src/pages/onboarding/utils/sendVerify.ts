import { apiInstance } from '@shared/apis/instance';

export const sendVerify = async (email: string) => {
  const res = await apiInstance.post('/auth/email/verify/send', { email });
};
