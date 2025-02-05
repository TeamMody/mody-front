import styled from 'styled-components';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ModalProps } from '@shared/types/my/modalProps';
import { IcLeftArrow } from '@shared/assets/icon/ic-left-arrow';
import CustomDivider from '@shared/ui/CustomDivider';
import { ToggleButton } from '@pages/post/components/toggleButton';
import ImageCarousel2 from '@shared/ui/ImageCarousel2';
import IcZoomIn from '@shared/assets/icon/ic-zoom-in.svg?react';
import IcZoomOut from '@shared/assets/icon/ic-zoom-out.svg?react';
import { createS3url } from '@pages/post/apis/createS3Url';
import { presignedUrlProps } from '@pages/post/apis/createPresignedUrl';
import { useCreatePost } from '@pages/post/hooks/useCreatePost';
import { useNavigate } from 'react-router';

interface ImgModalProps extends ModalProps {
  selectedImages: (string | undefined)[];
  imgZoom: boolean;
  setImgZoom: React.Dispatch<React.SetStateAction<boolean>>;
  presignedUrls: presignedUrlProps[] | undefined;
}

export const CreateNewPostModal = ({
  isOpened,
  onClose,
  selectedImages,
  imgZoom,
  setImgZoom,
  presignedUrls,
}: ImgModalProps) => {
  const [imgIdx, setImgIdx] = useState<number>(0);
  const [textState, setTextState] = useState<string | undefined>(undefined);
  const [buttonState, setButtonState] = useState<boolean>(false);
  const { mutate } = useCreatePost();
  const navigate = useNavigate();
  const handleClose = async () => {
    try {
      if (presignedUrls) {
        const S3Urls = await createS3url({ selectedImages, presignedUrls });

        mutate({
          content: textState,
          isPublic: buttonState,
          s3Urls: S3Urls,
        });
      }
      setTextState(undefined);
      navigate(-1);
    } catch (error) {
      console.error('게시물 생성 실패:', error);
    }
  };

  const moveBeforePage = () => {
    setTextState(undefined);
    onClose();
  };

  const handleImgZoom = () => {
    if (imgZoom) {
      setImgZoom(false);
    } else {
      setImgZoom(true);
    }
  };

  const changeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement | null>) => {
    setTimeout(() => {
      setTextState(e.target.value);
    }, 500);
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
            <BottomImgContainer imgZoom={imgZoom}>
              <ImageCarousel2
                images={selectedImages}
                isExpanded={undefined}
                imgIdx={imgIdx}
                setImgIdx={setImgIdx}
                height="45.735vh"
                imgZoomed={imgZoom}
              />
            </BottomImgContainer>

            <ZoomButton onClick={handleImgZoom} imgZoom={imgZoom}>
              {imgZoom ? <IcZoomOutStyle /> : <IcZoomInStyle />}
            </ZoomButton>

            <TextArea
              placeholder="게시글을 작성해주세요."
              onChange={(e) => changeTextArea(e)}
            ></TextArea>
            <CustomDivider width="100%" border="1px" />
            <BottomDiv>
              <ToggleButton setButtonState={setButtonState} />
              <SaveStyleButton
                onClick={handleClose}
                disabled={textState === undefined}
                textState={!!textState}
              >
                스타일 저장하기
              </SaveStyleButton>
            </BottomDiv>
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

const BottomImgContainer = styled.div<{ imgZoom: boolean }>`
  width: 100%;
  height: 56.398vh;
  padding-top: ${({ imgZoom }) => (imgZoom ? '0px' : '3.791vh')};
  margin-bottom: 3vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${({ imgZoom }) => (imgZoom ? '0px' : '5.79vh')};
`;

const ZoomButton = styled.button<{ imgZoom: boolean }>`
  width: 5.924vh;
  height: 5.924vh;
  margin-left: 1.5vw;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10001;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.gray800};
  top: ${({ imgZoom }) => (imgZoom === false ? '46vh' : '50.5vh')};
`;

const TextArea = styled.textarea`
  width: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: ${({ theme }) => theme.fonts.body_medium_16px};
  color: white;
  margin: 5.806vh 0px 1.844vh 0px;
  padding: 0px 5.128vw 0px 5.128vw;
`;

const BottomDiv = styled.div`
  padding: 0px 5.128vw 0px 5.128vw;
  margin-top: 1.896vh;
`;
const SaveStyleButton = styled.button<{ textState: boolean | undefined }>`
  width: 100%;
  height: 6.635vh;
  font-size: ${({ theme }) => theme.fonts.body_medium_16px};
  background-color: ${({ theme, textState }) =>
    textState === false ? theme.colors.gray500 : theme.colors.green500};
  border-radius: 10px;
  color: black;
`;

const IcZoomInStyle = styled(IcZoomIn)`
  &:hover {
    path {
      stroke: ${({ theme }) => theme.colors.green500};
    }
  }
`;
const IcZoomOutStyle = styled(IcZoomOut)`
  &:hover {
    path {
      stroke: ${({ theme }) => theme.colors.green500};
    }
  }
`;
