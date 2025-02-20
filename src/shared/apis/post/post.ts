import { BaseResponse, PatchPostProps } from '@shared/types';
import { apiInstance } from '@shared/apis/instance';

const patchPost = async ({
  postId,
  content,
  isPublic,
}: PatchPostProps): Promise<Omit<BaseResponse<String>, 'result'>> => {
  try {
    const response = await apiInstance.patch<Omit<BaseResponse<String>, 'result'>>(
      `/posts/${postId}`,
      {
        content,
        isPublic,
      },
    );
    return response.data;
  } catch (err) {
    console.error('Failed to get detail post:', err);
    throw err;
  }
};

const patchIsPublic = async (postId: number): Promise<Omit<BaseResponse<String>, 'result'>> => {
  try {
    const response = await apiInstance.patch<Omit<BaseResponse<String>, 'result'>>(
      `/posts/${postId}/public`,
    );
    return response.data;
  } catch (err) {
    console.error('Failed to patch isPublic:', err);
    throw err;
  }
};

export { patchPost, patchIsPublic };
