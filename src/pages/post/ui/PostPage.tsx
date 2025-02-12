import styled from 'styled-components';
import AppBar from '@shared/ui/AppBar.tsx';
import plus from '@shared/assets/icon/ic-plus.svg';
import Post from '@shared/ui/Post.tsx';
import { useNavigate } from 'react-router';
import { useRef } from 'react';
import useGetPostData from '@post/hooks/useGetPostData';
import useIntersectionObserver from '@post/hooks/useIntersectionObserver';
import { Loading } from '@shared/ui/Loading';

export const PostPage = () => {
  const navigate = useNavigate();
  const rightHeaderActionArr = [{ icon: plus, onClick: () => navigate('createPost') }];

  const bottomRef = useRef<HTMLDivElement | null>(null);
  const { data: postData, isLoading, error, fetchNextPage, hasNextPage } = useGetPostData();
  useIntersectionObserver(bottomRef, fetchNextPage);

  if (isLoading) return <Loading />;

  return (
    <>
      <AppBar title={'김모디'} rightHeaderActionArr={rightHeaderActionArr} />

      <Container>
        {postData &&
          postData.map((data, index) => (
            <Post
              key={index}
              data={data}
              type="post"
              ref={index === postData.length - 2 ? bottomRef : undefined}
            />
          ))}
      </Container>
    </>
  );
};

// const ScrollTop = () => {
//   return (
//     <ScrollTopContainer>
//       <span>처음으로 돌아가기</span>
//       <BottomArrow width={'20px'} height={17} />
//     </ScrollTopContainer>
//   );
// };

const ScrollTopContainer = styled.div`
  width: 100%;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 6vh;
  gap: 16px;
  position: absolute;

  span {
    font-size: ${({ theme }) => theme.fonts.caption_bold_14px};
  }
`;

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 9vh - 64px);
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  position: relative;
`;

const BottomRef = styled.div`
  width: 100%;
  // height: 5vh;
`;
export default PostPage;
