import AppBar from '@shared/ui/AppBar.tsx';
import logo from '@shared/assets/icon/ic-logo.svg';
import { HeaderAction } from '@shared/types';
import styled from 'styled-components';
import Banner from '@home/components/Banner.tsx';
import { useEffect, useRef, useState } from 'react';
import SubBanner from '@home/components/SubBanner.tsx';
import { subBanner, topBanner } from '@shared/apis/home/mocks.ts';

export const HomePage = () => {
  const leftHeaderAction: HeaderAction = { icon: logo, onClick: () => console.log('') };
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
    <>
      <AppBar leftHeaderAction={leftHeaderAction} />
      <MainBannersContainer ref={containerRef}>
        {topBanner.map((banner) => (
          <Banner
            key={banner.id}
            isFocused={focusedId === banner.id}
            {...banner} />
        ))}
      </MainBannersContainer>
      <SubContainer>
        <SubBannerText>이런 추천은 어때요?</SubBannerText>
        <SubBannerContainer>
          {subBanner.map((banner) => (
            <SubBanner key={banner.id} {...banner} />
          ))}
        </SubBannerContainer>
      </SubContainer>
    </>
  );
};

const MainBannersContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 32px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding: 0 54px;
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 40px;
`;

const SubBannerText = styled.p`
  font: ${({ theme }) => theme.fonts.heading_bold_22px};
  margin-left: 20px;
`;

const SubBannerContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding: 0 20px;
  gap: 16px;
`;
