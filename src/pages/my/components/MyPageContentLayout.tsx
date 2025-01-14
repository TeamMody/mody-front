import { useEffect, useRef, useState } from 'react';
import RenderTabContent from '@pages/my/components/RenderTabContent.tsx';
import { MiddleTabBar } from '@pages/my/components/MiddleTabBar.tsx';
import IcHexagon from '@shared/assets/icon/ic-hexagon.tsx';
import IcGrid from '@shared/assets/icon/ic-grid.tsx';
import IcHeart from '@shared/assets/icon/ic-heart.tsx';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // carousel 스타일 추가
import styled from 'styled-components';
export const MyPageContentLayout = () => {
  const [activeTab, setActiveTab] = useState<string>('recommend');
  const tabWrapperRef = useRef<HTMLDivElement | null>(null);

  const tabs = [
    { id: 'recommend', icon: IcHexagon, label: '추천 결과' },
    { id: 'post', icon: IcGrid, label: '게시글' },
    { id: 'like', icon: IcHeart, label: '좋아요' },
  ];

  const tabIndex = tabs.findIndex((tab) => tab.id === activeTab);

  // 스크롤 위치 확인 및 출력
  const handleScroll = () => {
    if (tabWrapperRef.current) {
      console.log('현재 스크롤 위치:', tabWrapperRef.current.scrollTop);
    }
  };

  // 슬라이드 변경 시 스크롤 초기화
  const handleSlideChange = () => {
    if (tabWrapperRef.current) {
      tabWrapperRef.current.scrollTop = 0;
    }
  };

  // useEffect로 강제 초기화 및 스크롤 이벤트 리스너 추가
  useEffect(() => {
    const tabWrapper = tabWrapperRef.current;
    console.log('activeTab:', activeTab);
    console.log('tabWrapper:', tabWrapper);
    if (tabWrapper) {
      tabWrapper.scrollTop = 0;
      tabWrapper.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (tabWrapper) {
        tabWrapper.removeEventListener('scroll', handleScroll);
      }
    };
  }, [activeTab]);

  return (
    <>
      <MiddleTabBar tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      <StyledCarousel
        selectedItem={tabIndex} // 현재 슬라이드 인덱스
        onChange={(index) => {
          setActiveTab(tabs[index].id);
          handleSlideChange(); // 슬라이드 변경 시 스크롤 초기화
        }} // 슬라이드 변경 시 탭 동기화
        showArrows={false} // 화살표 숨김
        showStatus={false} // 상태 표시 숨김
        showThumbs={false} // 썸네일 표시 숨김
        showIndicators={false} // 인디케이터 숨김
        emulateTouch={true} // 터치 제스처 사용
      >
        {/* <RenderTabContent activeTab={'recommend'} />
        <RenderTabContent activeTab={'post'} />
        <RenderTabContent activeTab={'like'} /> */}
        <RenderTabContent ref={tabWrapperRef} activeTab="recommend" />
        <RenderTabContent ref={tabWrapperRef} activeTab="post" />
        <RenderTabContent ref={tabWrapperRef} activeTab="like" />
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
