import { apiInstance } from '@shared/apis/instance';
interface PostData {
  content: string | undefined;
  isPublic: boolean;
  s3Urls: (string | undefined)[] | undefined;
}
export const createPost = async ({ content, isPublic, s3Urls }: PostData) => {
  console.log(content, isPublic, s3Urls);
  const res = await apiInstance.post('/posts', {
    content: content,
    isPublic: isPublic,
    s3Urls: s3Urls,
  });
  console.log(res);
  return res.data;
};
