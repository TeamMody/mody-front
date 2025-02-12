import React from 'react';
import styled from 'styled-components';
import SlideIndicator from '@pages/my/components/SlideIndicator';
import { ActiveIndex, useTabBarStore } from '../features/store/useTabBarStore';
import IcHexagon from '@shared/assets/icon/ic-hexagon';
import IcGrid from '@shared/assets/icon/ic-grid';
import IcHeart from '@shared/assets/icon/ic-heart';

const tabs = [
  { id: ActiveIndex.RECOMMEND, icon: IcHexagon, label: '추천 결과' },
  { id: ActiveIndex.MY, icon: IcGrid, label: '게시글' },
  { id: ActiveIndex.LIKE, icon: IcHeart, label: '좋아요' },
];

const MiddleTabBar = () => {
  const { activeIndex, setActiveIndex } = useTabBarStore();
  return (
    <Wrapper>
      <TabBarWrapper>
        {tabs.map((tab) => (
          <Tab key={tab.id} onClick={() => setActiveIndex(tab.id)}>
            {React.createElement(tab.icon, { $active: activeIndex === tab.id })}
          </Tab>
        ))}
      </TabBarWrapper>
      <SlideIndicator />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 440px;
  position: relative;
`;

const TabBarWrapper = styled.div`
  display: flex;
  padding: 0.3%;
  height: 44px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray700};
`;

const Tab = styled.div`
  flex: 1;
  text-align: center;
  cursor: pointer;
`;

export default MiddleTabBar;
