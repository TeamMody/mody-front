import { BaseResponse, PatchPostProps } from '@shared/types';
import { apiInstance } from '../instance';

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
    console.log('Success to patch post:', response);
    return response.data;
  } catch (err) {
    console.error('Failed to get detail post:', err);
    throw err;
  }
};

export default patchPost;
