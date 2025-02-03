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
  marginTop,
  imgZoomed,
}: {
  images: string[];
  height?: string;
  isExpanded?: boolean;
  imgIdx: number;
  setImgIdx: React.Dispatch<React.SetStateAction<number>>;
  marginTop?: string | undefined;
  imgZoomed?: boolean;
}) => {
  console.log(images);
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
        imgZoomed={imgZoomed}
      >
        {images.map((img, idx) => {
          return (
            <div key={idx}>
              <img src={img.s3Url} />;
            </div>
          );
        })}
      </StyledCarousel>
      <ProgressBar
        length={images.length}
        curIdx={imgIdx}
        size={7}
        marginTop={marginTop}
        imgZoom={imgZoomed}
      ></ProgressBar>
    </>
  );
};

const StyledCarousel = styled(Carousel)<{
  isExpanded: boolean;
  height: string;
  imgZoomed?: boolean;
}>`
  width: 100%;
  height: ${({ imgZoomed, height }) => (imgZoomed ? '53.791vh' : height)};
  background-color: ${({ theme }) => theme.colors.gray500};
  filter: ${({ isExpanded }) => (isExpanded ? 'brightness(0.5)' : '')};
  div {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;

    img {
      max-width: 100%;
    }
  }
`;

export default ImageCarousel;
