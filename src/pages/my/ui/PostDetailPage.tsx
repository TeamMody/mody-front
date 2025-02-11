import styled from 'styled-components';
import AppBar from '@shared/ui/AppBar.tsx';
import IcLeftArrow from '@shared/assets/icon/ic-left-arrow.svg';
import Post from '@shared/ui/Post.tsx';
import { useLocation, useNavigate } from 'react-router';
import { HeaderAction } from '@shared/types';
import useGetDetailPost from '../hooks/query/useGetDetailPost';
import { Loading } from '@shared/ui/Loading';
import { usePostIdStore } from '../features/store/usePostIdStore';
import { useEffect } from 'react';

export const PostDetailPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id, title } = location.state;
  const { data, isPending, isError } = useGetDetailPost(id);
  const leftHeaderAction: HeaderAction = { icon: IcLeftArrow, onClick: () => navigate(-1) };

  // postId 상태 관리
  const { setPostId } = usePostIdStore();

  useEffect(() => {
    if (id) setPostId(id);
  }, [id, setPostId]);

  if (isPending) return <Loading />;
  if (isError) return <div>에러</div>;

  return (
    <>
      <AppBar leftHeaderAction={leftHeaderAction} title={title} />
      <Container>
        <Post data={data.result} type={'my'} />
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 9vh - 64px);
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
`;

export default PostDetailPage;
