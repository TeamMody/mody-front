import styled from 'styled-components';
import AppBar from '@shared/ui/AppBar.tsx';
import logo from '@shared/assets/icon/ic-logo.svg';
import plus from '@shared/assets/icon/ic-plus.svg';
import Post from '@shared/ui/Post.tsx';
import TempImg1 from '@post/images/tempImg1.jpg';
import TempImg2 from '@post/images/tempImg2.jpg';
import TempImg3 from '@post/images/tempImg3.png';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

interface PostPropsType {
  images: string[];
  name: string;
  type: string;
  description: string;
  likeCount: number;
  isLiked: boolean;
}

const mockData: PostPropsType[] = [
  {
    images: [TempImg1, TempImg2, TempImg3],
    name: '사람1',
    type: '네모형 체형',
    description: '안녕하세요 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ',
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
];

export const PostPage = () => {
  const leftHeaderAction = { icon: logo, onClick: () => console.log('') };
  const rightHeaderActionArr = [{ icon: plus, onClick: () => console.log('') }];

  return (
    <>
      <AppBar leftHeaderAction={leftHeaderAction} rightHeaderActionArr={rightHeaderActionArr} />
      <Container
        axis={'vertical'}
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        centerMode={true}
      >
        {mockData.map((data, index) => (
          <Post key={index} data={data} />
        ))}
      </Container>
    </>
  );
};

const Container = styled(Carousel)`
  width: 100%;
  height: 100vh; /* 화면 전체 높이 */
  overflow-y: auto; /* 세로 스크롤 활성화 */
  scroll-snap-type: y mandatory; /* 데스크톱에서만 스크롤 스냅 활성화 */
`;

export default PostPage;
