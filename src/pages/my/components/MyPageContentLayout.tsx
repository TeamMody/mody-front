import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styled from 'styled-components';
import MyAndLikePosts from '@my/components/MyAndLikePosts';
import RecommendResults from './RecommendResults';
import { ActiveIndex, useTabBarStore } from '@my/features/store/useTabBarStore';
import MiddleTabBar from '@my/components/MiddleTabBar';
export const MyPageContentLayout = () => {
  const { activeIndex, setActiveIndex } = useTabBarStore();

  return (
    <>
      <MiddleTabBar />
      <StyledCarousel
        selectedItem={activeIndex - 1} // 현재 슬라이드 인덱스
        onChange={(index) => {
          setActiveIndex(index + 1);
        }} // 슬라이드 변경 시 탭 동기화
        showArrows={false} // 화살표 숨김
        showStatus={false} // 상태 표시 숨김
        showThumbs={false} // 썸네일 표시 숨김
        showIndicators={false} // 인디케이터 숨김
        emulateTouch={true} // 터치 제스처 사용
        swipeScrollTolerance={150}
        preventMovementUntilSwipeScrollTolerance={true} // 설정된 거리까지 스와이프 대기
      >
        <RecommendResults />
        <MyAndLikePosts activeIndex={ActiveIndex.MY} />
        <MyAndLikePosts activeIndex={ActiveIndex.LIKE} />
      </StyledCarousel>
    </>
  );
};

const StyledCarousel = styled(Carousel)`
  flex: 1;
  height: 100%;
  overflow-y: auto;

  .slider-wrapper {
    height: 100%;
  }

  .carousel-slider {
    height: 100%;
  }
  .slider {
    height: 100%;
  }
`;
