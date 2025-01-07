import { Link } from 'react-router';
import styled from 'styled-components';
import IcHome from '@shared/assets/icon/ic-home.tsx';
import IcInbox from '@shared/assets/icon/ic-inbox.tsx';
import IcUser from '@shared/assets/icon/ic-user';
import { ActiveProps } from '@shared/types';
import { useState } from 'react';

enum Tab {
  HOME = 1,
  POST = 2,
  MY = 3,
}

const BottomNavigation = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <Wrapper>
      <Container>
        <BottomLink onClick={() => setActiveTab(1)} to="/" $active={activeTab === Tab.HOME}>
          <IcHome $active={activeTab === Tab.HOME} />
          홈
        </BottomLink>
        <BottomLink onClick={() => setActiveTab(2)} to="/post" $active={activeTab === Tab.POST}>
          <IcInbox $active={activeTab === Tab.POST} />
          비슷
        </BottomLink>
        <BottomLink onClick={() => setActiveTab(3)} to="/my" $active={activeTab === Tab.MY}>
          <IcUser $active={activeTab === Tab.MY} />내 정보
        </BottomLink>
      </Container>
    </Wrapper>
  );
};

export default BottomNavigation;

const Wrapper = styled.nav`
  position: fixed;
  bottom: 0;
  height: 9vh;
  width: 100vw;
  max-width: 440px;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 88px;
  background-color: ${({ theme }) => theme.colors.gray850};
  justify-content: space-between;
  padding: 8px 41px 0 41px;
`;

const BottomLink = styled(Link)<ActiveProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: ${({ theme, $active }) => ($active ? theme.colors.green500 : 'white')};
  text-decoration: none;
  font: ${({ theme }) => theme.fonts.caption_medium_14px};

  &:hover {
    color: ${({ theme, $active }) => ($active ? theme.colors.green500 : 'white')};
  }
`;
