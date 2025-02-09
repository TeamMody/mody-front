import styled from 'styled-components';
import AppBar from '@shared/ui/AppBar.tsx';
import plus from '@shared/assets/icon/ic-plus.svg';
import Post from '@shared/ui/Post.tsx';
import TempImg1 from '@post/images/tempImg1.jpg';
import TempImg2 from '@post/images/tempImg2.jpg';
import TempImg3 from '@post/images/tempImg3.png';
import { useNavigate } from 'react-router';
import { useRef } from 'react';
import useGetPostData from '../hooks/useGetPostData';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import logo from '@shared/assets/icon/ic-logo.svg';
import BottomArrow from '@shared/assets/icon/ic-bottom-arrow.svg?react';

interface ImgType {
  s3Url: string;
}
interface PostPropsType {
  bodyType: string;
  content: string;
  files: ImgType[];
  isLiked: boolean;
  isPublic: boolean;
  likeCount: number;
  postId: number;
  writerId: number;
  writerNickname: string;
}

export const mockData: PostPropsType[] = [
  {
    images: [
      TempImg3,
      TempImg2,
      TempImg3,
      TempImg1,
      TempImg1,
      TempImg1,
      TempImg1,
      TempImg3,
      TempImg2,
      TempImg3,
    ],
    name: '사람1',
    type: '네모형 체형',
    description:
      '안녕하세요 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋzzzzzzzzzzzzzzzzzzzㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ',
    likeCount: 112,
    isLiked: true,
  },
  {
    images: [TempImg1, TempImg2],
    name: '사람2',
    type: '네모형 체형',
    description: '테스트 데이터입니다. ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ',
    likeCount: 98,
    isLiked: false,
  },
  {
    images: [TempImg1, TempImg2],
    name: '사람2',
    type: '네모형 체형',
    description: '테스트 데이터입니다. ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ',
    likeCount: 98,
    isLiked: false,
  },
  {
    images: [TempImg1],
    name: '사람2',
    type: '네모형 체형',
    description: '테스트 데이터입니다. ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ',
    likeCount: 98,
    isLiked: false,
  },
];

export const PostPage = () => {
  const navigate = useNavigate();

  const rightHeaderActionArr = [{ icon: plus, onClick: () => navigate('createPost') }];
  // Post내부 Container 리렌더링 발생은 나중에 해결

  const bottomRef = useRef<HTMLDivElement | null>(null);
  const { data: postData, isLoading, error, fetchNextPage, hasNextPage } = useGetPostData();
  useIntersectionObserver(bottomRef, fetchNextPage);
  console.log(hasNextPage);

  return (
    <>
      <AppBar
        leftHeaderAction={{ icon: logo, onClick: () => navigate('/home') }}
        title={'김모디'}
        rightHeaderActionArr={rightHeaderActionArr}
      />

      <Container>
        {postData && postData.map((data, index) => <Post key={index} data={data} />)}
        {/* {!hasNextPage && <ScrollTop />} */}
        <BottomRef className="bottomRef" ref={bottomRef}></BottomRef>
      </Container>
    </>
  );
};

const ScrollTop = () => {
  return (
    <ScrollTopContainer>
      <span>처음으로 돌아가기</span>
      <BottomArrow width={'20px'} height={17} />
    </ScrollTopContainer>
  );
};

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
  height: 5vh;
`;
export default PostPage;
