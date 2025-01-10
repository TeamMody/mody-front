import { useState } from 'react';
import RenderTabContent from '@pages/my/components/RenderTabContent.tsx';
import { MiddleTabBar } from '@pages/my/components/MiddleTabBar.tsx';
import IcHexagon from '@shared/assets/icon/ic-hexagon.tsx';
import IcGrid from '@shared/assets/icon/ic-grid.tsx';
import IcHeart from '@shared/assets/icon/ic-heart.tsx';
export const MyPageContentLayout = () => {
  const [activeTab, setActiveTab] = useState<string>('recommend');

  const tabs = [
    { id: 'recommend', icon: IcHexagon, label: '추천 결과' },
    { id: 'post', icon: IcGrid, label: '게시글' },
    { id: 'like', icon: IcHeart, label: '좋아요' },
  ];

  return (
    <>
      <MiddleTabBar tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      <RenderTabContent activeTab={activeTab} />
    </>
  );
};
