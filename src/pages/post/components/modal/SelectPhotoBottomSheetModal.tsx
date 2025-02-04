import { ChangeEvent, useRef } from 'react';
import { Sheet, SheetRef } from 'react-modal-sheet';
import styled from 'styled-components';
import IcCamera from '@shared/assets/icon/ic-camera.svg?react';
import IcGallery from '@shared/assets/icon/ic-gallery.svg?react';
// import { ImgLayout } from '@pages/post/components/ImgLayout';
import { useNavigate } from 'react-router';
interface SelectPhotoBottomModalProps {
  isOpened: boolean;
  onClose: () => void | undefined;
  setSelectedImages: React.Dispatch<React.SetStateAction<(string | undefined)[]>>;
  selectedId: number[];
  setSelectedIds: React.Dispatch<React.SetStateAction<number[]>>;
}

export const SelectPhotoBottomSheetModal = ({
  isOpened,
  onClose,
  setSelectedImages,
  selectedId,
  setSelectedIds,
}: SelectPhotoBottomModalProps) => {
  const ref = useRef<SheetRef>(null);

  const navigate = useNavigate();

  // 아래 코드는 하단에 모달이 확정되면 지우겠습니다.
  // const handleImageClick = (id: number, imgUrl: string) => {
  //   setSelectedIds((prev) => {
  //     if (prev.includes(id)) {
  //       return prev.filter((selectedId) => selectedId !== id);
  //     }
  //     return [...prev, id];
  //   });

  //   setSelectedImages((prev) => {
  //     if (selectedId.includes(id)) {
  //       return prev.filter((_, index) => selectedId[index] !== id);
  //     }
  //     return [...prev, imgUrl];
  //   });
  // };

  const setImges = (e: ChangeEvent<HTMLInputElement>) => {
    const img = e.target.files?.[0];
    if (img) {
      const imgUrl = URL.createObjectURL(img);
      setSelectedImages((prev) => {
        console.log(prev);
        return [...prev, imgUrl];
      });
    }
  };
  return (
    <Sheet isOpen={isOpened} onClose={onClose} ref={ref}>
      <SheetContainer>
        <SheetContent>
          <div>
            <div>갤러리에서 선택하기</div>
            <input type="file" id="Gallary" onChange={setImges} />

            <label htmlFor="Gallary">
              <GalleryIcon />
            </label>

            <div onClick={() => navigate('/post/cameraPage')}>
              <CameraIcon />
            </div>
          </div>
          <div>
            {/* 이 코드도 바텀 모달 시트가 확정 되면 지우겠습니다
            {mockImages?.map((Img, Idx) => (
              <ImgLayout
                ImgUrl={Img}
                key={Idx}
                order={selectedId.indexOf(Idx) + 1}
                onClick={() => handleImageClick(Idx, Img)}
              />
            ))} */}
          </div>
        </SheetContent>
      </SheetContainer>
    </Sheet>
  );
};

const SheetContainer = styled(Sheet.Container)`
  width: 100%;
  height: 43.572vh !important;
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
  & > div:nth-child(1) > input:nth-child(2) {
    display: none;
  }
  & > div:nth-child(1) > label:nth-child(3) {
    aspect-ratio: 1/1;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.gray800};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-content: center;
  }
  & > div:nth-child(1) > div:nth-child(4) {
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
    padding: 0px 2px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, auto);
  }
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
