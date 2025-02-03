import { BaseResponse, BodyAnalysisRequest, BodyAnalysisResponse } from '@shared/types';
import { apiInstance } from '@shared/apis/instance';

export const fetchBodyAnalysis = async (body: BodyAnalysisRequest): Promise<BaseResponse<BodyAnalysisResponse> | undefined> => {
  try {
    const response = await apiInstance.post<BaseResponse<BodyAnalysisResponse>>('/body-analysis/result', body, {
      timeout: 10000,
    });
    return response.data;
  } catch ( err ) {
    console.error('Failed to fetch body analysis:', err);
  }
};

export const fetchBodyAnalysisResult = async (): Promise<BaseResponse<BodyAnalysisResponse> | undefined> => {
  try {
    const response = await apiInstance.get<BaseResponse<BodyAnalysisResponse>>('/body-analysis/result');
    return response.data;
  } catch ( err ) {
    console.error('Failed to fetch body analysis result');
  }
};
