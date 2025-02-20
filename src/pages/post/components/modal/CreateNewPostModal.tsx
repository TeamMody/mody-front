import styled from 'styled-components';
import { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ModalProps } from '@shared/types/my/modalProps';
import { IcLeftArrow } from '@shared/assets/icon/ic-left-arrow';
import CreatePostImageCarousel from '@shared/ui/CreatePostImageCarousel';
import { createS3url } from '@pages/post/feature/utils/createS3Url';
import { presignedUrlProps } from '@pages/post/feature/apis/createPresignedUrl';
import { useCreatePost } from '@pages/post/hooks/useCreatePost';
import { useNavigate } from 'react-router';
import PostBottom from '@pages/post/components/PostBottom';

interface ImgModalProps extends ModalProps {
  selectedImages?: string[];
  presignedUrls?: presignedUrlProps[];
}

export const CreateNewPostModal = ({
  isOpened,
  onClose,
  selectedImages,
  presignedUrls,
}: ImgModalProps) => {
  const [imgIdx, setImgIdx] = useState<number>(0);
  const [buttonState, setButtonState] = useState<boolean>(false);
  const [imgZoom, setImgZoom] = useState<boolean>(false);
  const { mutate } = useCreatePost();
  const navigate = useNavigate();
  const textStateRef = useRef<string | undefined>(); // 리렌더링을 방지하기 위해 useRef 사용

  const handleClose = async () => {
    try {
      if (presignedUrls) {
        const S3Urls = await createS3url({ selectedImages, presignedUrls });
        mutate({
          content: textStateRef.current,
          isPublic: !buttonState,
          s3Urls: S3Urls,
        });
      }
      navigate(-1);
      alert('게시글이 생성되었습니다.');
    } catch (error) {
      alert('게시물 생성에 실패하였습니다');
      navigate('/post');
    }
  };

  const moveBeforePage = () => {
    setImgZoom(false);
    textStateRef.current = undefined; // textStateRef 초기화
    onClose();
  };

  return ReactDOM.createPortal(
    <AnimatePresence>
      {isOpened && (
        <Container
          initial={{ x: '100%' }}
          animate={{ x: '0%' }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <TopBox>
            <button onClick={moveBeforePage}>
              <IcLeftArrow />
            </button>
            <div>새로운 게시물</div>
          </TopBox>
          <BottomBox>
            <BottomImgContainer $imgZoom={imgZoom}>
              <CreatePostImageCarousel
                images={selectedImages}
                isExpanded={undefined}
                imgIdx={imgIdx}
                setImgIdx={setImgIdx}
                height="45.735vh"
                imgZoomed={imgZoom}
              />
            </BottomImgContainer>

            <PostBottom
              imgZoom={imgZoom}
              setImgZoom={setImgZoom}
              handleClose={handleClose}
              textStateRef={textStateRef}
              buttonState={buttonState}
              setButtonState={setButtonState}
            />
          </BottomBox>
        </Container>
      )}
    </AnimatePresence>,
    document.body,
  );
};

const Container = styled(motion.div)`
  position: absolute;
  max-width: 440px;
  width: 100%;
  height: 100vh;
  z-index: 10000;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const TopBox = styled.div`
  max-width: 440px;
  width: 100%;
  height: 8.101vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(to bottom, #121212, #262626);
  padding: 1.556vh 6.154vw 1.556vh 5.641vw;

  & > button:nth-child(1) {
    height: 100%;
  }

  & > div:nth-child(2) {
    height: 100%;
    color: white;
    font-size: ${({ theme }) => theme.fonts.heading_bold_22px};
    text-align: center;
    align-content: center;
    margin-right: 30%;
  }
`;

const BottomBox = styled.div`
  max-width: 440px;
  width: 100%;
  height: 92.417vh;
  background-color: ${({ theme }) => theme.colors.gray900};
  display: flex;
  flex-direction: column;
  padding: 0px 1px 4.028vh 1px;
  position: absolute;
`;

const BottomImgContainer = styled.div<{ $imgZoom: boolean }>`
  width: 100%;
  height: 56.398vh;
  padding-top: ${({ $imgZoom }) => ($imgZoom ? '0px' : '3.791vh')};
  margin-bottom: 3vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${({ $imgZoom }) => ($imgZoom ? '0px' : '5.79vh')};
`;
