import styled from 'styled-components';
import AppBar from '@shared/ui/AppBar.tsx';
import logo from '@shared/assets/icon/ic-logo.svg';
import plus from '@shared/assets/icon/ic-plus.svg';
import Post from '@shared/ui/Post.tsx';
import TempImg1 from '@post/images/tempImg1.jpg';
import TempImg2 from '@post/images/tempImg2.jpg';
import { SelectPhotoModal } from '@pages/post/components/modal/SelectPhotoModal';
import { useState } from 'react';
import { SelectPhotoBottomSheetModal } from '@pages/post/components/modal/SelectPhotoBottomSheetModal';
import { useImagesStore } from '@pages/post/components/store/selectedImg';
interface PostPropsType {
  images: string[];
  name: string;
  type: string;
  description: string;
  likeCount: number;
  isLiked: boolean;
}
export const mockData: PostPropsType = {
  images: [TempImg1, TempImg2],
  name: '사람1',
  type: '네모형 체형',
  description:
    '인녕하세요 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ',
  likeCount: 112,
  isLiked: true,
};

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

  return (
    <>
      <AppBar leftHeaderAction={leftHeaderAction} rightHeaderActionArr={rightHeaderActionArr} />
      <Main>
        <SelectPhotoModal isOpened={modalState} onClose={modalClose} />
        <SelectPhotoBottomSheetModal isOpened={modalState} onClose={modalClose} />
        <Post data={mockData} />
      </Main>
    </>
  );
};

const Main = styled.main`
  width: 100%;
  height: calc(100vh - 9vh - 64px);
  padding: 16px 20px;
  postion: relative;
`;
