import styled from 'styled-components';
import AppBar from '@shared/ui/AppBar.tsx';
import logo from '@shared/assets/icon/ic-logo.svg';
import plus from '@shared/assets/icon/ic-plus.svg';
import Post from '@shared/ui/Post.tsx';
import TempImg1 from '@post/images/tempImg1.jpg';
import TempImg2 from '@post/images/tempImg2.jpg';
<<<<<<< HEAD
import { SelectPhotoModal } from '@pages/post/components/modal/SelectPhotoModal';
import { useState } from 'react';
import { SelectPhotoBottomSheetModal } from '@pages/post/components/modal/SelectPhotoBottomSheetModal';
import { useImagesStore } from '@pages/post/components/store/selectedImg';
=======
import TempImg3 from '@post/images/tempImg3.png';
import { useMemo } from 'react';

>>>>>>> aad63ee3efeb8afe28207528cb4d67f8638971ee
interface PostPropsType {
  images: string[];
  name: string;
  type: string;
  description: string;
  likeCount: number;
  isLiked: boolean;
}
<<<<<<< HEAD
export const mockData: PostPropsType = {
  images: [TempImg1, TempImg2],
  name: '사람1',
  type: '네모형 체형',
  description:
    '인녕하세요 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ',
  likeCount: 112,
  isLiked: true,
};
=======

const mockData: PostPropsType[] = [
  {
    images: [TempImg3, TempImg2, TempImg3],
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
>>>>>>> aad63ee3efeb8afe28207528cb4d67f8638971ee

export const PostPage = () => {
  const [modalState, setModalState] = useState<boolean>(false);
  const { images, setImages } = useImagesStore();
  console.log(images);
  const modalOpen = () => {
    setModalState(true);
  };
  const modalClose = () => {
    setModalState(false);
  };
  const leftHeaderAction = { icon: logo, onClick: () => console.log('') };
  const rightHeaderActionArr = [{ icon: plus, onClick: modalOpen }];

  // Post내부 Container 리렌더링 발생은 나중에 해결
  const memoizedData = useMemo(() => mockData, []);

  return (
    <>
      <AppBar leftHeaderAction={leftHeaderAction} rightHeaderActionArr={rightHeaderActionArr} />
<<<<<<< HEAD
      <Main>
        <SelectPhotoModal isOpened={modalState} onClose={modalClose} />
        <SelectPhotoBottomSheetModal isOpened={modalState} onClose={modalClose} />
        <Post data={mockData} />
      </Main>
=======
      <Container>
        {memoizedData.map((data, index) => (
          <Post key={index} data={data} />
        ))}
      </Container>
>>>>>>> aad63ee3efeb8afe28207528cb4d67f8638971ee
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 9vh - 64px);
<<<<<<< HEAD
  padding: 16px 20px;
  postion: relative;
=======
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
>>>>>>> aad63ee3efeb8afe28207528cb4d67f8638971ee
`;

export default PostPage;
