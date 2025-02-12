import { apiInstance } from '@shared/apis/instance';
import { BaseResponse, MemberInfo } from '@shared/types';

export const fetchMyInfo = async (): Promise<BaseResponse<MemberInfo> | undefined> => {
  try {
    const response = await apiInstance.get<BaseResponse<MemberInfo>>('/members/me')
    return response.data;
  } catch ( error ) {
    console.error(error);
  }
};
