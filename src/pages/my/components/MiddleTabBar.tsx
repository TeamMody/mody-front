import React from 'react';
import styled from 'styled-components';
import SlideIndicator from './SlideIndicator';

interface TabBarProps {
  tabs: { id: string; icon: React.ElementType; label: string }[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export function MiddleTabBar({ tabs, activeTab, onTabChange }: TabBarProps) {
  return (
    <Wrapper>
      <TabBarWrapper>
        {tabs.map((tab) => (
          <Tab key={tab.id} onClick={() => onTabChange(tab.id)}>
            {React.createElement(tab.icon, { $active: activeTab === tab.id })}
          </Tab>
        ))}
      </TabBarWrapper>
      <SlideIndicator activeTab={activeTab} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 440px;
  position: relative;
`;

const TabBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 70px;
  height: 55px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray700};
`;

const Tab = styled.div`
  cursor: pointer;
`;
