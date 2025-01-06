import AppBar from '@shared/ui/AppBar.tsx';
import logo from '@shared/assets/icon/ic-logo.svg';
import { HeaderAction } from '@shared/types';
import styled from 'styled-components';
import Banner from '@home/components/Banner.tsx';
import { useEffect, useRef, useState } from 'react';
import SubBanner from '@home/components/SubBanner.tsx';
import ImgSubBannerWeather from '@shared/assets/img/img-sub-banner-weather.png';
import ImgSubBannerSituation from '@shared/assets/img/img-sub-banner-situation.png';
import ImgBannerBodyType from '@shared/assets/img/img-banner-body-type.png';
import ImgBannerStyle from '@shared/assets/img/img-banner-style.png';
import ImgBannerItem from '@shared/assets/img/img-banner-item.png';

const topBanner = [
  {
    id: 0,
    type: '체형 타입',
    title: '나의 체형 타입 분석하기',
    imageUrl: ImgBannerBodyType,
  },
  {
    id: 1,
    type: '스타일 추천',
    title: '취향과 개성에 맞춘 스타일',
    imageUrl: ImgBannerStyle,
  },
  {
    id: 2,
    type: '패션 추천',
    title: '체형과 취향을 반영한 패션',
    imageUrl: ImgBannerItem,
  },
]

const subBanner = [
  {
    id: 0,
    title: '오늘 날씨에 맞는 패션 추천',
    imageUrl: ImgSubBannerWeather,
  },
  {
    id: 1,
    title: '특정 상황에 어울리는 패션 추천',
    imageUrl: ImgSubBannerSituation,
  },
  {
    id: 2,
    title: '일상에 꼭 맞는 패션 추천',
  },
]

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
