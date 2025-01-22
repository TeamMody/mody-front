import styled from 'styled-components';
import AppBar from '@shared/ui/AppBar.tsx';
import logo from '@shared/assets/icon/ic-logo.svg';
import plus from '@shared/assets/icon/ic-plus.svg';
import Post from '@shared/ui/Post.tsx';
import TempImg1 from '@post/images/tempImg1.jpg';
import TempImg2 from '@post/images/tempImg2.jpg';
import TempImg3 from '@post/images/tempImg3.png';
import { useMemo } from 'react';
import { useNavigate } from 'react-router';

interface PostPropsType {
  images: string[];
  name: string;
  type: string;
  description: string;
  likeCount: number;
  isLiked: boolean;
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
      '안녕하세요 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋzzzzzzzzzzzz',
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
    images: [TempImg1, TempImg2],
    name: '사람2',
    type: '네모형 체형',
    description: '테스트 데이터입니다. ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ',
    likeCount: 98,
    isLiked: false,
  },
];

export const PostPage = () => {
  const navigate = useNavigate();

  const leftHeaderAction = { icon: logo, onClick: () => navigate('home') };
  const rightHeaderActionArr = [{ icon: plus, onClick: () => navigate('createPost') }];

  // Post내부 Container 리렌더링 발생은 나중에 해결
  const memoizedData = useMemo(() => mockData, []);

  return (
    <>
      <AppBar leftHeaderAction={leftHeaderAction} rightHeaderActionArr={rightHeaderActionArr} />

      <Container>
        {memoizedData.map((data, index) => (
          <Post key={index} data={data} />
        ))}
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

export default PostPage;
