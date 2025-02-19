import { apiInstance } from '@shared/apis/instance';
interface PostData {
  content?: string;
  isPublic: boolean;
  s3Urls?: string[];
}
export const createPost = async ({ content, isPublic, s3Urls }: PostData) => {
  const res = await apiInstance.post('/posts', {
    content: content,
    isPublic: isPublic,
    s3Urls: s3Urls,
  });

  return res.data;
};
