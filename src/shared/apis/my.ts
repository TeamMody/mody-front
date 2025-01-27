import { apiInstance } from './instance';

const getMyPosts = async () => {
  try {
    const response = await apiInstance.get('/posts/me');
    return response.data.result.postResponses;
  } catch (err) {
    console.error('Failed to get my posts:', err);
    throw err;
  }
};

const getLikedPosts = async () => {
  try {
    const response = await apiInstance.get('/posts/liked');
    return response.data.result.postResponses;
  } catch (err) {
    console.error('Failed to get liked posts:', err);
    throw err;
  }
};

export { getMyPosts, getLikedPosts };
