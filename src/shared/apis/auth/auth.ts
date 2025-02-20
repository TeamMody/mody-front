import { apiInstance } from '@shared/apis/instance';

export const sendVerify = async (email: string) => {
  try {
    const response = await apiInstance.post('/auth/email/verify/send', { email });
    return response.data;
  } catch (error) {}
};

export const verifyEmail = async (email: string, verificationCode: string) => {
  try {
    const response = await apiInstance.post('/auth/email/verify', { email, verificationCode });
    return response.data;
  } catch (error) {}
};
