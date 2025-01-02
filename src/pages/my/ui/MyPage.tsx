import styled from 'styled-components';
import BottomNavigation from '../../../shared/ui/BottomNavigation.tsx';
import AppBar from '../../../shared/ui/AppBar.tsx';
import { HeaderAction } from '../../../shared/types';
import logo from '../../../shared/assets/icon/ic-logo.svg';
import plus from '../../../shared/assets/icon/ic-plus.svg';
import hamburger from '../../../shared/assets/icon/ic-hamburger.svg';
import { useState } from 'react';
import { MiddleTabBar } from '../components/MiddleTabBar.tsx';
import IcHexagon from '../../../shared/assets/icon/ic-hexagon.tsx';
import IcGrid from '../../../shared/assets/icon/ic-grid.tsx';
import IcHeart from '../../../shared/assets/icon/ic-heart.tsx';

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
      {/* 상단 내용 임의 설정 */}
      <div style={{ height: '200px' }}>프로필</div>
      {/* 중앙 탭바 */}
      <MiddleTabBar tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      {/* 하단 내용 */}
      <div style={{ height: '100px' }}>하단 내용</div>
      <BottomNavigation />
    </Wrapper>
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
