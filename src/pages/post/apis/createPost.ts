import { apiInstance } from '@shared/apis/instance';
interface PostData {
  content: string | undefined;
  isPublic: boolean;
  s3Urls: (string | undefined)[] | undefined;
}
export const createPost = async ({ content, isPublic, s3Urls }: PostData) => {
  const res = await apiInstance.post('/posts', {
    content: content,
    isPublic: isPublic,
    s3Urls: s3Urls,
  });

  return res.data;
};
