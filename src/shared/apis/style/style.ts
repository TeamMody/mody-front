import { BaseResponse, StyleAnalysisRequest, StyleAnalysisResponse } from '@shared/types';
import { apiInstance } from '@shared/apis/instance';

export const fetchPostStyleAnalysis = async (data: StyleAnalysisRequest): Promise<BaseResponse<StyleAnalysisResponse> | undefined> => {
  try {
    const response = await apiInstance.post<BaseResponse<StyleAnalysisResponse>>('/style-analysis/result', data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
