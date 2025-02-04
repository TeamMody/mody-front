import styled from 'styled-components';
import AppBar from '@shared/ui/AppBar.tsx';
import IcLeftArrow from '@shared/assets/icon/ic-left-arrow.svg';
import Post from '@shared/ui/Post.tsx';
import { useLocation, useNavigate } from 'react-router';
import { HeaderAction } from '@shared/types';

export const PostDetailPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { data, title } = location.state || {};
  const leftHeaderAction: HeaderAction = { icon: IcLeftArrow, onClick: () => navigate(-1) };

  return (
    <>
      <AppBar leftHeaderAction={leftHeaderAction} title={title} />
      <Container>
        <Post data={data} type={'my'} />
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
