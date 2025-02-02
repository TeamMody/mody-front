import { BaseResponse, RecommendationType } from '@shared/types';
import { LikeResponse } from '@shared/types/common/common.ts';
import { apiInstance } from '@shared/apis/instance';

export const fetchRecommendationLike = async (id: number, type: RecommendationType): Promise<BaseResponse<LikeResponse> | undefined> => {
  try {
    const url = type === RecommendationType.STYLE ? `/style-analysis/${id}/like` : `/fashion-item-analysis/${id}/like`;
    const response = await apiInstance.post<BaseResponse<LikeResponse>>(url);
    console.log(response.data);
    return response.data;
  } catch ( error ) {
    console.error(error);
  }
}
