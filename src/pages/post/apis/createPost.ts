import { apiInstance } from '@shared/apis/instance';
import { useMutation } from '@tanstack/react-query';

interface PostData {
  content: string | undefined;
  isPublic: boolean;
  s3Urls: string[] | undefined;
}
export const postData = async ({ content, isPublic, s3Urls }: PostData) => {
  const res = await apiInstance.post('/posts', {
    content: content,
    isPublic: isPublic,
    s3Urls: s3Urls,
  });
  return res;
};
export const createPost = () => {
  const { data, isError, isPending } = useMutation({ mutationFn: postData });

  if (isPending) console.log('로딩중');
  if (isError) console.log(isError);
  console.log(data);
};
