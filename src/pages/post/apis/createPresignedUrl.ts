import { apiInstance } from '@shared/apis/instance';
export interface presignedUrlProps {
  presignedUrl: string;
}

export const createPresignedUrl = async (
  data: (string | undefined)[],
): Promise<presignedUrlProps[]> => {
  const res = await apiInstance.post('/image/upload/posts', { filenames: data });
  return res.data.result;
};
