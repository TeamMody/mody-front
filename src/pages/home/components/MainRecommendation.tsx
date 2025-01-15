import { topBanner } from '@shared/apis/home/mocks.ts';
import Banner from '@home/components/Banner.tsx';
import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';

const MainRecommendation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [focusedId, setFocusedId] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      if (!container) return;

      const containerCenter = container.scrollLeft + container.offsetWidth / 2; // 컨테이너 중심 위치

      // 배너들의 offsetLeft 값을 비교하여 가장 가까운 배너를 찾음
      let closestId = 0;
      let closestDistance = Infinity;

      Array.from(container.children).forEach((child, index) => {
        const banner = child as HTMLElement;
        const bannerCenter = banner.offsetLeft + banner.offsetWidth / 2; // 배너의 중심 위치
        const distance = Math.abs(containerCenter - bannerCenter);

        if (distance < closestDistance) {
          closestId = topBanner[index].id;
          closestDistance = distance;
        }
      });

      setFocusedId(closestId); // 가장 가까운 배너의 ID를 포커스로 설정
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <MainBannersContainer ref={containerRef}>
      {topBanner.map((banner) => (
        <Banner
          key={banner.id}
          isFocused={focusedId === banner.id}
          {...banner} />
      ))}
    </MainBannersContainer>
  );
}

export default MainRecommendation;

const MainBannersContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 32px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding: 0 54px;
`;
