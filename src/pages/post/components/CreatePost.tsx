import styled from 'styled-components';
import { useState, ChangeEvent } from 'react';
import ReactDOM from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useNavigate } from 'react-router';
import { IcLeftArrow } from '@shared/assets/icon/ic-left-arrow';
import { CreateNewPostModal } from '@pages/post/components/modal/CreateNewPostModal';
import { createPresignedUrl } from '@pages/post/apis/createPresignedUrl';
import { presignedUrlProps } from '@pages/post/apis/createPresignedUrl';
import IcCamera from '@shared/assets/icon/ic-camera.svg?react';
import IcGallery from '@shared/assets/icon/ic-gallery.svg?react';
import heic2any from 'heic2any';
import { ConvertWebP } from '@pages/post/components/ConvertWebP';
export const CreatePost = ({ isOpened }: { isOpened: boolean }) => {
  const [modalState, setModalState] = useState<boolean>(false);
  const [opened, setIsOpened] = useState<boolean>(isOpened);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [imgZoom, setImgZoom] = useState<boolean>(false);
  const navigate = useNavigate();
  const [presignedUrls, setPresignedUrls] = useState<presignedUrlProps[]>();

  const openModal = async (data: (string | undefined)[]) => {
    const urls = await createPresignedUrl(data);
    setPresignedUrls(urls);
    setModalState(true);
  };

  const closeModal = () => {
    setModalState(false);
    setImgZoom(false);
  };

  const closePage = () => {
    setIsOpened(false);
    navigate(-1);
  };

  const setImges = async (e: ChangeEvent<HTMLInputElement>) => {
    const img = e.target.files?.[0];

    if (img) {
      if (img.type === 'image/heic' || img.name.endsWith('.heic')) {
        const heicBlobArray = await heic2any({
          blob: img,
          toType: 'image/jpeg',
          quality: 0.8,
        });
        const heicBlob = Array.isArray(heicBlobArray) ? heicBlobArray[0] : heicBlobArray;
        const file = new File([heicBlob], `${img?.name.split('.')[0]}.jpeg`, {
          type: heicBlob.type,
        });
        ConvertWebP({ img: file, setSelectedImages });
      } else {
        ConvertWebP({ img: img, setSelectedImages });
      }
    }
  };
  return ReactDOM.createPortal(
    <AnimatePresence>
      {opened && (
        <Container
          initial={{ x: '100%' }}
          animate={{ x: '0%' }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <TopBox>
            <button onClick={closePage}>
              <IcLeftArrow />
            </button>
            {selectedImages && (
              <NextButton
                onClick={() => openModal(selectedImages)}
                selectedImages={selectedImages}
                disabled={selectedImages.length === 0}
              >
                다음
              </NextButton>
            )}
          </TopBox>
          <BottomBox>
            {selectedImages && <ChooseImg src={selectedImages.slice(-1)[0]} />}

            <div>
              <div>갤러리에서 선택하기</div>
              <input type="file" id="Gallary" onChange={setImges} />
              <label htmlFor="Gallary">
                <GalleryIcon />
              </label>

              <input type="file" id="Camera" onChange={setImges} />
              <label htmlFor="Camera">
                <CameraIcon />
              </label>
            </div>
          </BottomBox>

          <CreateNewPostModal
            isOpened={modalState}
            onClose={closeModal}
            selectedImages={selectedImages}
            imgZoom={imgZoom}
            setImgZoom={setImgZoom}
            presignedUrls={presignedUrls}
          />
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
  z-index: 1000;
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
`;
const NextButton = styled.button<{ selectedImages: (string | undefined)[] }>`
  height: 100%;
  font-size: ${({ theme }) => theme.fonts.heading_medium_18px};
  color: ${({ selectedImages }) => (selectedImages.length > 0 ? 'white' : 'black')};
  &:hover {
    color: ${({ theme, selectedImages }) =>
      selectedImages.length > 0 ? `${theme.colors.green500}` : 'none'};
  }
`;

const BottomBox = styled.div`
  max-width: 440px;
  width: 100%;
  height: 92.417vh;
  background: ${({ theme }) => theme.colors.gray900};
  display: flex;
  padding: 1.1vh 0.9vw 0 0.9vw;
  flex-direction: column;
  gap: 5px;
  & > div:nth-child(2) {
    width: 100%;
    height: 8.333vh;
    padding: 1.333vh 5.128vw 1.444vh 5.128vw;
    background-color: ${({ theme }) => theme.colors.gray700};
    color: white;
    display: flex;
  }

  & > div:nth-child(2) > div:nth-child(1) {
    font-size: ${({ theme }) => theme.fonts.body_bold_16px};
    flex-grow: 1;
    align-content: center;
  }
  & > div:nth-child(2) > input:nth-child(2) {
    display: none;
  }
  & > div:nth-child(2) > label:nth-child(3) {
    aspect-ratio: 1/1;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.gray800};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-content: center;
  }
  & > div:nth-child(2) > input:nth-child(4) {
    display: none;
  }
  & > div:nth-child(2) > label:nth-child(5) {
    aspect-ratio: 1/1;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.gray800};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-content: center;
    margin-left: 4.103vw;
  }
`;

const ChooseImg = styled.img`
  width: 100%;
  height: 46vh;
  background-color: ${({ theme }) => theme.colors.gray800};
`;

const GalleryIcon = styled(IcGallery)`
  height: 100%;
  align-content: center;
  &:hover {
    path {
      stroke: ${({ theme }) => theme.colors.green500}; /* 원하는 색상 */
    }
  }
`;

const CameraIcon = styled(IcCamera)`
  height: 100%;
  align-content: center;
  &:hover {
    path {
      stroke: ${({ theme }) => theme.colors.green500}; /* 원하는 색상 */
    }
  }
`;
