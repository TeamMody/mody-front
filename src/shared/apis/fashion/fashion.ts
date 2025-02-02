import { apiInstance } from '@shared/apis/instance';
import { BaseResponse, StyleAnalysisRequest } from '@shared/types';
import { FashionItemResponse } from '@shared/types/fashion/fashion.ts';

export const fetchFashionItemResult = async (data: StyleAnalysisRequest): Promise<BaseResponse<FashionItemResponse> | undefined> => {
  try {
    const response = await apiInstance.post<BaseResponse<FashionItemResponse>>('/fashion-item-analysis/result', data, {
      timeout: 10000,
    });
    console.log(response.data);
    return response.data;
  } catch ( error ) {
    console.error(error);
  }
};
