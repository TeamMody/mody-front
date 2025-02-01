import { BaseResponse, StyleAnalysisRequest, StyleAnalysisResponse } from '@shared/types';
import { apiInstance } from '@shared/apis/instance';

export const fetchPostStyleAnalysis = async (data: StyleAnalysisRequest): Promise<BaseResponse<StyleAnalysisResponse> | undefined> => {
  try {
    const response = await apiInstance.post<BaseResponse<StyleAnalysisResponse>>('/style-analysis/result', data, {
        timeout: 10000,
      });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export const fetchStyleLike = async (styleId: number): Promise<Omit<BaseResponse<number>, 'result'> | undefined> => {
  try {
    const response = await apiInstance.post<Omit<BaseResponse<number>, 'result'>>(`/style-analysis/${styleId}/like`);
    console.log(response.data);
    return response.data;
  } catch ( error ) {
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
