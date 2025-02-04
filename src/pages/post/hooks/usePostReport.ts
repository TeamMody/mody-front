import { apiInstance } from '@shared/apis/instance';

export const usePostReport = async ({ postId }: { postId: number }) => {
  try {
    const res = await apiInstance.post(`/posts/${postId}/reports`);
    return res;
  } catch (error) {
    console.log(error);
  }
};
