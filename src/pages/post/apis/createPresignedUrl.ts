import { apiInstance } from '@shared/apis/instance';
export interface presignedUrlProps {
  presignedUrl: string;
}
// presigned url 반환하는 api
export const createPresignedUrl = async (data: string[]): Promise<presignedUrlProps[]> => {
  const res = await apiInstance.post('/image/upload/posts', { filenames: data });

  return res.data.result;
};
