import { BaseResponse, PaginationProps, RecommendationsResponse } from '@shared/types';
import { apiInstance } from '@shared/apis/instance';
import { PostData, PostResponse } from '@shared/types/my/my';

const getMyPosts = async ({
  cursor,
  size,
}: PaginationProps): Promise<BaseResponse<PostResponse>> => {
  try {
    const queryParams = new URLSearchParams({ size: size.toString() });
    if (cursor) queryParams.append('cursor', cursor.toString());

    const response = await apiInstance.get<BaseResponse<PostResponse>>(
      `/posts/me?${queryParams.toString()}`,
    );

    return response.data;
  } catch (err) {
    console.error('Failed to get my posts:', err);
    throw err;
  }
};

const getLikedPosts = async ({
  cursor,
  size,
}: PaginationProps): Promise<BaseResponse<PostResponse>> => {
  try {
    const queryParams = new URLSearchParams({ size: size.toString() });
    if (cursor) queryParams.append('cursor', cursor.toString());

    const response = await apiInstance.get<BaseResponse<PostResponse>>(
      `/posts/liked?${queryParams.toString()}`,
    );

    return response.data;
  } catch (err) {
    console.error('Failed to get liked posts:', err);
    throw err;
  }
};

const getDetailPost = async (postId: number): Promise<BaseResponse<PostData>> => {
  try {
    const response = await apiInstance.get<BaseResponse<PostData>>(`/posts/${postId}`);
    return response.data;
  } catch (err) {
    console.error('Failed to get detail post:', err);
    throw err;
  }
};

const deletePost = async (postId: number): Promise<Omit<BaseResponse<String>, 'result'>> => {
  try {
    const response = await apiInstance.delete<Omit<BaseResponse<String>, 'result'>>(
      `/posts/${postId}`,
    );
    console.log('response', response);
    return response.data;
  } catch (err) {
    console.error('Failed to delete post:', err);
    throw err;
  }
};

const getRecommendationResults = async ({
  cursor,
  size,
}: PaginationProps): Promise<BaseResponse<RecommendationsResponse>> => {
  try {
    const queryParams = new URLSearchParams({ size: size.toString() });
    if (cursor) queryParams.append('cursor', cursor.toString());
    const response = await apiInstance.get<BaseResponse<RecommendationsResponse>>(
      `/recommendations?${queryParams.toString()}`,
    );
    return response.data;
  } catch (err) {
    console.error('Failed to get recommendation results:', err);
    throw err;
  }
};

export { getMyPosts, getLikedPosts, getDetailPost, deletePost, getRecommendationResults };
