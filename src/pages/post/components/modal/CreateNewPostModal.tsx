import styled from 'styled-components';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ModalProps } from '@shared/types/my/modalProps';
import { IcLeftArrow } from '@shared/assets/icon/ic-left-arrow';
import CustomDivider from '@shared/ui/CustomDivider';
import { useImagesStore } from '@pages/post/components/store/selectedImg';
import BottomSheetItem from '@pages/my/components/BottomSheetItem';
import ImageCarousel from '@shared/ui/ImageCarousel';
import IcZoom from '@shared/assets/icon/ic-zoom.svg?react';
import { Loading } from '@pages/home/components/Loading';
export const CreateNewPostModal = ({ isOpened, onClose }: ModalProps) => {
  const { images, setImages } = useImagesStore();
  const [modalState, setModalState] = useState<string | null>(null);
  const [imgIdx, setImgIdx] = useState<number>(0);
  const [imgZoom, setImgZoom] = useState<boolean>(false);

  const closeModal = () => {
    setModalState(null);
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };
  const handleImgZoom = () => {
    if (imgZoom) {
      setImgZoom(false);
    } else {
      setImgZoom(true);
    }
  };
  console.log(images);
  return ReactDOM.createPortal(
    <AnimatePresence>
      {isOpened && (
        <Container
          initial={{ x: '100%' }}
          animate={{ x: '0%' }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <TopBox>
            <button onClick={handleClose}>
              <IcLeftArrow />
            </button>
            <div>새로운 게시물</div>
          </TopBox>
          <BottomBox>
            {images.length === 0 ? (
              <EmptyImgContainer></EmptyImgContainer>
            ) : (
              <>
                {!imgZoom ? (
                  <TmgContainer>
                    <ImageCarousel
                      images={images}
                      isExpanded={undefined}
                      imgIdx={imgIdx}
                      setImgIdx={setImgIdx}
                      height="45.735vh"
                      marginTop="6.635vh"
                    />
                  </TmgContainer>
                ) : (
                  <ImageCarousel
                    images={images}
                    isExpanded={undefined}
                    imgIdx={imgIdx}
                    setImgIdx={setImgIdx}
                    height="53.791vh"
                    marginTop="2.725vh"
                  />
                )}
              </>
            )}
            {images.length === 0 ? (
              <></>
            ) : (
              <ZoomButton onClick={handleImgZoom}>
                <IcZoom />
              </ZoomButton>
            )}

            <TextArea placeholder="게시글을 작성해주세요."></TextArea>
            <CustomDivider width="100%" border="1px" />
            <BottomDiv>
              <BottomSheetItem content="나만보기" />
              <SaveStyleButton onClick={handleClose}>스타일 저장하기</SaveStyleButton>
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
  padding: 0px 0px 4.028vh 0px;
  position: absolute;
`;

const EmptyImgContainer = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.green500};
  border-radius: 20px;
  padding: 0.5px;
  height: 45.735vh;
  margin: 4.147vh 0px 14.337vh 0px;
`;
const TmgContainer = styled.div`
  padding: 4.147vh 0px 0px 0px;
`;

const ZoomButton = styled.button`
  width: 5.924vh;
  height: 5.924vh;
  margin-left: 2.564vw;
  position: absolute;
  z-index: 10001;
  top: 46.682vh;
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
const SaveStyleButton = styled.button`
  width: 100%;
  height: 6.635vh;
  font-size: ${({ theme }) => theme.fonts.body_medium_16px};
  background-color: ${({ theme }) => theme.colors.green500};
  border-radius: 10px;
`;
