import styled from 'styled-components';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import ProgressBar from '@shared/ui/ProgressBar';
import { Carousel } from 'react-responsive-carousel';

const ImageCarousel = ({
  images,
  height = '60vh',
  isExpanded = undefined,
  imgIdx,
  setImgIdx,
}: {
  images: string[];
  height?: string;
  isExpanded?: boolean;
  imgIdx: number;
  setImgIdx: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <>
      <StyledCarousel
        axis="horizontal"
        centerMode={true} // centerMode 비활성화로 슬라이드 간 정확한 위치 맞춤
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        onChange={(index) => setImgIdx(index)}
        centerSlidePercentage={95}
        {...(isExpanded !== undefined && { isExpanded })}
        height={height}
      >
        {images.map((img, idx) => {
          return (
            <div key={idx}>
              <img src={img} />;
            </div>
          );
        })}
      </StyledCarousel>
      <ProgressBar length={images.length} curIdx={imgIdx} size={7}></ProgressBar>
    </>
  );
};

const StyledCarousel = styled(Carousel)<{ isExpanded: boolean; height: string }>`
  width: 100%;
  height: ${({ height }) => height};
  background-color: ${({ theme }) => theme.colors.gray500};
  filter: ${({ isExpanded }) => (isExpanded ? 'brightness(0.5)' : '')};
  div {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;

    img {
      max-width: 100%;
      pointer-events: none; /* 이미지 자체에서 이벤트 차단 */
    }
  }
`;

export default ImageCarousel;
