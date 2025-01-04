<<<<<<< HEAD
=======
import styled from 'styled-components';
>>>>>>> e6a15bdbef0699ed384a0cf993a5beb79a6e0a2e
import AppBar from '@shared/ui/AppBar.tsx';
import { HeaderAction } from '@shared/types';
import logo from '@shared/assets/icon/ic-logo.svg';
import plus from '@shared/assets/icon/ic-plus.svg';
import hamburger from '@shared/assets/icon/ic-hamburger.svg';
<<<<<<< HEAD
import { useState } from 'react';
import IcHexagon from '@shared/assets/icon/ic-hexagon.tsx';
import IcGrid from '@shared/assets/icon/ic-grid.tsx';
import IcHeart from '@shared/assets/icon/ic-heart.tsx';
import RenderTabContent from '../components/RenderTabContent.tsx';
import BottomNavigation from '@shared/ui/BottomNavigation.tsx';
import { MiddleTabBar } from '../components/MiddleTabBar.tsx';

=======
import { MyBodyTypeCard } from '../components/MyBodyTypeCard';
import BottomNavigation from '@shared/ui/BottomNavigation.tsx';
>>>>>>> e6a15bdbef0699ed384a0cf993a5beb79a6e0a2e
export const MyPage = () => {
  const leftHeaderAction: HeaderAction = { icon: logo, onClick: () => console.log('') };
  const rightHeaderActionArr: HeaderAction[] = [
    { icon: plus, onClick: () => console.log('') },
    { icon: hamburger, onClick: () => console.log('') },
  ];
  const [activeTab, setActiveTab] = useState<string>('recommend');

  const tabs = [
    { id: 'recommend', icon: IcHexagon, label: '추천 결과' },
    { id: 'post', icon: IcGrid, label: '게시글' },
    { id: 'like', icon: IcHeart, label: '좋아요' },
  ];

  return (
    <Wrapper>
      <AppBar leftHeaderAction={leftHeaderAction} rightHeaderActionArr={rightHeaderActionArr} />
<<<<<<< HEAD
      {/* 상단 내용 임의 설정 */}
      <div style={{ height: '200px' }}>프로필</div>
      {/* 중앙 탭바 */}
      <MiddleTabBar tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      {/* 하단 내용 */}
      <RenderTabContent activeTab={activeTab} />
      <BottomNavigation />
    </>
=======
      <MyBodyTypeCard />
      <BottomNavigation />
    </Wrapper>
>>>>>>> e6a15bdbef0699ed384a0cf993a5beb79a6e0a2e
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 440px;
  height: 100vh;

  background-color: ${({ theme }) => theme.colors.gray900};
`;
