import { useState } from 'react';
import styled from 'styled-components';
import AppBar from '@shared/ui/AppBar.tsx';
import { HeaderAction } from '@shared/types';
import logo from '@shared/assets/icon/ic-logo.svg';
import plus from '@shared/assets/icon/ic-plus.svg';
import hamburger from '@shared/assets/icon/ic-hamburger.svg';
import IcHexagon from '@shared/assets/icon/ic-hexagon.tsx';
import IcGrid from '@shared/assets/icon/ic-grid.tsx';
import IcHeart from '@shared/assets/icon/ic-heart.tsx';
import RenderTabContent from '@pages/my/components/RenderTabContent.tsx';
import { MyBodyTypeCard } from '@pages/my/components/MyBodyTypeCard';
import { MiddleTabBar } from '@pages/my/components/MiddleTabBar.tsx';
import { ProfileHeader } from '@pages/my/components/ProfileHeader';
import { SettingModal } from '@pages/my/components/modal/SettingModal';
import EditBottomSheet from '../components/modal/EditBottomSheetModal';
export const MyPage = () => {
  const [modalState, setModalState] = useState<boolean>(false);
  const openModal = () => {
    setModalState(true);
  };
  const closeModal = () => {
    setModalState(false);
  };

  const leftHeaderAction: HeaderAction = { icon: logo, onClick: () => console.log('') };
  const rightHeaderActionArr: HeaderAction[] = [
    { icon: plus, onClick: () => console.log('') },
    {
      icon: hamburger,
      onClick: openModal,
    },
  ];
  const [activeTab, setActiveTab] = useState<string>('recommend');
  const tabs = [
    { id: 'recommend', icon: IcHexagon, label: '추천 결과' },
    { id: 'post', icon: IcGrid, label: '게시글' },
    { id: 'like', icon: IcHeart, label: '좋아요' },
  ];

  // isOpen 상태 관리
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // 바텀시트 열기
  const openSheet = () => setIsOpen(true);
  // 바텀시트 닫기
  const closeSheet = () => setIsOpen(false);

  return (
    <Wrapper>
      <AppBar leftHeaderAction={leftHeaderAction} rightHeaderActionArr={rightHeaderActionArr} />
      <ProfileHeader />
      <SettingModal isOpened={modalState} onClose={closeModal} />
      <MyBodyTypeCard />
      {/* 바텀시트 */}
      <button style={{ backgroundColor: 'white' }} onClick={openSheet}>
        바텀시트 열기
      </button>
      <EditBottomSheet isOpen={isOpen} onClose={closeSheet} />
      {/* 중앙 탭바 */}
      <MiddleTabBar tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      {/* 하단 내용 */}
      <RenderTabContent activeTab={activeTab} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 440px;
  height: 91vh; //내비게이션바 높이만큼 빼줌
  background-color: ${({ theme }) => theme.colors.gray900};
`;
