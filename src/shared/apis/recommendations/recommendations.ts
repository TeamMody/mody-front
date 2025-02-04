import {
  BaseResponse,
  RecommendationType,
  RecommendationRequest,
  RecommendationResponse,
  LikeResponse,
} from '@shared/types';
import { apiInstance } from '@shared/apis/instance';

export const fetchPostRecommendations = async (data: RecommendationRequest, type: RecommendationType): Promise<BaseResponse<RecommendationResponse> | undefined> => {
  try {
    const url = type === RecommendationType.STYLE ? 'style-analysis' : 'fashion-item-analysis'
    const response = await apiInstance.post<BaseResponse<RecommendationResponse>>(`/recommendations/${url}`, data, {
        timeout: 10000,
      });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export const fetchStyleCategories = async () => {
  try {
    const response = await apiInstance.get('/style-analysis')
    console.log(response.data)
    return response.data;
  } catch ( error ) {
    console.error( error );
  }
}

export const fetchRecommendationLike = async (id: number): Promise<BaseResponse<LikeResponse> | undefined> => {
  try {
    const response = await apiInstance.post<BaseResponse<LikeResponse>>(`/recommendations/${id}/like`);
    console.log(response.data);
    return response.data;
  } catch ( error ) {
    console.error(error);
  }
};


