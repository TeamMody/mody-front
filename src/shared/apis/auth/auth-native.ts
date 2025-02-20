import { apiInstance } from '@shared/apis/instance';
import { BaseResponse } from '@shared/types';

interface LoginNativeResponse {
  accessToken: string;
  refreshToken: string;
}

export const loginNative = async (email: string, password: string): Promise<BaseResponse<LoginNativeResponse> | undefined> => {
  try {
    const response = await apiInstance.post<BaseResponse<LoginNativeResponse>>('/auth/native/login', {
      email,
      password,
    });
    return response.data;
  } catch ( error ) {
  }
};

export const logoutNative = async (): Promise<BaseResponse<null> | undefined> => {
  try {
    const response = await apiInstance.post<BaseResponse<null>>('/auth/native/logout');
    return response.data;
  } catch ( error ) {
  }
}

export const reissueNative = async (): Promise<BaseResponse<LoginNativeResponse> | undefined> => {
  try {
    const response = await apiInstance.post<BaseResponse<LoginNativeResponse>>('/auth/native/reissue');
    return response.data;
  } catch ( error ) {
  }
}
