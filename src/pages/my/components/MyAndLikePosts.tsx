import styled from 'styled-components';
import Post from '@pages/my/components/Post';
import NoPosts from '@pages/my/components/NoPosts';
import { useQuery } from '@tanstack/react-query';
import { getLikedPosts, getMyPosts } from '@shared/apis/my';

interface PostData {
  postId: number;
  files: string[];
}

const MyAndLikePosts = ({ activeTab }: { activeTab: string }) => {
  // activeTab에 따라 queryFn을 동적으로 선택
  const fetchPosts = activeTab === 'like' ? getLikedPosts : getMyPosts;

  const {
    data: posts,
    error,
    isLoading,
  } = useQuery({
    queryKey: [activeTab],
    queryFn: fetchPosts,
  });

  if (isLoading) {
    return <p>로딩중</p>;
  }
  if (error) {
    return <p>에러</p>;
  }

  console.log(posts);

  return posts.length > 0 ? (
    //게시글이 있을 때
    <MyAndLikePostsWrapper>
      {posts.map((post: PostData) => (
        <Post key={post.postId} data={post} activeTab={activeTab} />
      ))}
    </MyAndLikePostsWrapper>
  ) : (
    //게시글이 없을 때
    <NoPosts activeTab={activeTab} />
  );
};

const MyAndLikePostsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 50%;
  width: 100%;
  height: 100%;
  gap: 0.7vw;
  overflow-y: auto;
`;

export default MyAndLikePosts;
