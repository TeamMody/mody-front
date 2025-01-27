import { apiInstance } from '@shared/apis/instance';
interface PresignedUrls {
  res: string[];
}
// presigned url 반환하는 api
export const createPresignedUrl = async (data: string[]): Promise<PresignedUrls> => {
  const res = await apiInstance.post('/image/upload', { filenames: data });
  console.log(res.data);
  return res.data;
};
