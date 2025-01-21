import { useRef } from 'react';
import { Sheet, SheetRef } from 'react-modal-sheet';
import styled from 'styled-components';
import IcCamera from '@shared/assets/icon/ic-camera.svg?react';
import IcGallery from '@shared/assets/icon/ic-gallery.svg?react';
import { ImgLayout } from '@pages/post/components/ImgLayout';
import { mockData } from '@pages/post/ui/PostPage';
import { useNavigate } from 'react-router';

interface SelectPhotoBottomModalProps {
  isOpened: boolean;
  onClose: () => void | undefined;
  selectedImages: string[];
  setSelectedImages: React.Dispatch<React.SetStateAction<string[]>>;
  selectedId: number[];
  setSelectedIds: React.Dispatch<React.SetStateAction<number[]>>;
}

export const SelectPhotoBottomSheetModal = ({
  isOpened,
  onClose,
  selectedImages,
  setSelectedImages,
  selectedId,
  setSelectedIds,
}: SelectPhotoBottomModalProps) => {
  const ref = useRef<SheetRef>(null);
  const mockImages = mockData.map((data) => data.images)[0];

  const handleImageClick = (id: number, imgUrl: string) => {
    setSelectedIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((selectedId) => selectedId !== id);
      }
      return [...prev, id];
    });

    setSelectedImages((prev) => {
      if (selectedId.includes(id)) {
        return prev.filter((_, index) => selectedId[index] !== id);
      }
      return [...prev, imgUrl];
    });
  };

  return (
    <Sheet isOpen={isOpened} onClose={onClose} ref={ref}>
      <SheetContainer>
        <SheetContent>
          <div>
            <div>갤러리에서 선택하기</div>
            <div>
              <GalleryIcon />
            </div>
            <div>
              <CameraIcon />
            </div>
          </div>
          <div>
            {mockImages?.map((Img, Idx) => (
              <ImgLayout
                ImgUrl={Img}
                key={Idx}
                order={selectedId.indexOf(Idx) + 1}
                onClick={() => handleImageClick(Idx, Img)}
              />
            ))}
          </div>
        </SheetContent>
      </SheetContainer>
    </Sheet>
  );
};

const SheetContainer = styled(Sheet.Container)`
  width: 100%;
  height: 46.551vh !important;
  transition: 0.3s linear !important;
`;

const SheetContent = styled(Sheet.Content)`
  & > div:nth-child(1) {
    width: 100%;
    height: 8.333vh;
    padding: 1.333vh 5.128vw 1.444vh 5.128vw;
    background-color: ${({ theme }) => theme.colors.gray700};
    color: white;
    display: flex;
  }

  & > div:nth-child(1) > div:nth-child(1) {
    font-size: ${({ theme }) => theme.fonts.body_bold_16px};
    flex-grow: 1;
    align-content: center;
  }
  & > div:nth-child(1) > div:nth-child(2) {
    aspect-ratio: 1/1;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.gray800};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-content: center;
  }
  & > div:nth-child(1) > div:nth-child(3) {
    aspect-ratio: 1/1;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.gray800};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-content: center;
    margin-left: 4.103vw;
  }
  & > div:nth-child(2) {
    gap: 2px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, auto);
  }
`;
const GalleryIcon = styled(IcGallery)`
  height: 100%;
  align-content: center;
`;

const CameraIcon = styled(IcCamera)`
  height: 100%;
  align-content: center;
`;
