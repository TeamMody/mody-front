import { PaginationProps } from '@shared/types';
import { apiInstance } from './instance';

const getMyPosts = async ({ cursor, size }: PaginationProps) => {
  try {
    const queryParams = new URLSearchParams({ size: size.toString() });
    if (cursor) queryParams.append('cursor', cursor.toString());

    const response = await apiInstance.get(`/posts/me?${queryParams.toString()}`);

    return {
      posts: response.data.result.postResponses, // 게시글 리스트
      cursorPagination: response.data.result.cursorPagination, // 페이지네이션 정보
    };
  } catch (err) {
    console.error('Failed to get my posts:', err);
    throw err;
  }
};

const getLikedPosts = async ({ cursor, size }: PaginationProps) => {
  try {
    const queryParams = new URLSearchParams({ size: size.toString() });
    if (cursor) queryParams.append('cursor', cursor.toString());

    const response = await apiInstance.get(`/posts/liked?${queryParams.toString()}`);

    return {
      posts: response.data.result.postResponses, // 게시글 리스트
      cursorPagination: response.data.result.cursorPagination, // 페이지네이션 정보
    };
  } catch (err) {
    console.error('Failed to get liked posts:', err);
    throw err;
  }
};

export { getMyPosts, getLikedPosts };
