import { useRef, useState } from 'react';
import PostBottom from '../components/PostBottom';
import styled from 'styled-components';
import ImageCarousel from '@shared/ui/ImageCarousel';
import { useLocation, useNavigate } from 'react-router';
import AppBar from '@shared/ui/AppBar';
import { HeaderAction } from '@shared/types';
import IcLeftArrow from '@shared/assets/icon/ic-left-arrow.svg';
const EditPostPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { data } = location.state;
  const [imgZoom, setImgZoom] = useState(false);
  const textStateRef = useRef<string | undefined>(data.content); // 리렌더링을 방지하기 위해 useRef 사용
  const handleClose = () => {};
  const [imgIdx, setImgIdx] = useState<number>(0);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const leftHeaderAction: HeaderAction = { icon: IcLeftArrow, onClick: () => navigate(-1) };
  const title = '내 게시글';
  const images = data.files;

  return (
    <>
      <AppBar leftHeaderAction={leftHeaderAction} title={title} />
      <Container>
        <ImageWrapper>
          <ImageCarousel
            images={images}
            isExpanded={isExpanded}
            imgIdx={imgIdx}
            setImgIdx={setImgIdx}
          />
        </ImageWrapper>
        <PostBottom
          imgZoom={imgZoom}
          setImgZoom={setImgZoom}
          handleClose={handleClose}
          textStateRef={textStateRef}
        />
      </Container>
    </>
  );
};

const Container = styled.main`
  width: 100%;
  position: relative;
  height: calc(100vh - 64px);
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
`;

const ImageWrapper = styled.div`
  width: 100%;
  padding: 16px 20px;
`;

export default EditPostPage;
