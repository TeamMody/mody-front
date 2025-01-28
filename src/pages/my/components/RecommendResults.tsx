import styled from 'styled-components';
import Post from '@pages/my/components/Post';
import NoPosts from '@pages/my/components/NoPosts';
import { useQuery } from '@tanstack/react-query';
import { getMyPosts } from '@shared/apis/my';
import { PostData } from '@shared/types';

const RecommendResults = ({ activeTab }: { activeTab: string }) => {
  const {
    data: posts,
    error,
    isLoading,
  } = useQuery({
    queryKey: [activeTab],
    queryFn: getMyPosts,
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
    <RecommendResultsWrapper>
      {posts.map((post: PostData) => (
        <Post key={post.postId} data={post} activeTab={activeTab} />
      ))}
    </RecommendResultsWrapper>
  ) : (
    //게시글이 없을 때
    <NoPosts activeTab={activeTab} />
  );
};

const RecommendResultsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 33.33%;
  width: 100%;
  height: 100%;
  gap: 0.7vw;
  overflow-y: auto;
`;

export default RecommendResults;
