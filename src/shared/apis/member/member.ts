import { apiInstance } from '@shared/apis/instance';
import { BaseResponse, MemberInfo } from '@shared/types';

export const fetchMyInfo = async (): Promise<BaseResponse<MemberInfo> | undefined> => {
  try {
    const response = await apiInstance.get<BaseResponse<MemberInfo>>('/members/me',
      { headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI5IiwiaWF0IjoxNzM4MTQyMzI1LCJleHAiOjE3MzgxNzgzMjV9.gPB87dpoLwPou6TAnL3_Ry3zU_VklLlKyB4eHV8VBcg` } });
    console.log(response.data);
    return response.data;
  } catch ( error ) {
    console.error(error);
  }
};
