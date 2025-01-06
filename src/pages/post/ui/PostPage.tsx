import styled from 'styled-components';
import AppBar from '@shared/ui/AppBar.tsx';
import logo from '@shared/assets/icon/ic-logo.svg';
import plus from '@shared/assets/icon/ic-plus.svg';
import Post from '@shared/ui/Post.tsx';
import TempImg1 from '@shared/assets/images/tempImg1.jpg';
import TempImg2 from '@shared/assets/images/tempImg2.jpg';

interface PostPropsType {
  images: string[];
  name: string;
  type: string;
  description: string;
  likeCount: number;
  isLiked: boolean;
}
const mockData: PostPropsType = {
  images: [TempImg1, TempImg2],
  name: '사람1',
  type: '네모형 체형',
  description:
    '인녕하세요 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ',
  likeCount: 112,
  isLiked: true,
};

export const PostPage = () => {
  const leftHeaderAction = { icon: logo, onClick: () => console.log('') };
  const rightHeaderActionArr = [{ icon: plus, onClick: () => console.log('') }];

  return (
    <>
      <AppBar leftHeaderAction={leftHeaderAction} rightHeaderActionArr={rightHeaderActionArr} />

      <Main>
        <Post data={mockData} />
      </Main>
    </>
  );
};

const Main = styled.main`
  width: 100%;
  height: 79%;
  border: 1px solid green;
  padding: 16px 20px;
`;
