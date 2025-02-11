import { Link, useLocation } from 'react-router';
import styled from 'styled-components';
import IcHome from '@shared/assets/icon/ic-home.tsx';
import IcInbox from '@shared/assets/icon/ic-inbox.tsx';
import IcUser from '@shared/assets/icon/ic-user';
import { ActiveProps } from '@shared/types';
import { ActiveIndex, useBottomNavigationStore } from '@shared/store/useBottomNavigationStore.ts';
import { useEffect } from 'react';

const BottomNavigation = () => {
  const { activeIndex, setActiveIndex } = useBottomNavigationStore();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      setActiveIndex(ActiveIndex.HOME);
    } else if (location.pathname === '/post') {
      setActiveIndex(ActiveIndex.POST);
    } else if (location.pathname === '/my') {
      setActiveIndex(ActiveIndex.PROFILE);
    }
  }, [location.pathname]);

  return (
    <Wrapper>
      <Container>
        <BottomLink
          onClick={() => setActiveIndex(ActiveIndex.HOME)}
          to="/"
          $active={activeIndex === ActiveIndex.HOME}
        >
          <IcHome $active={activeIndex === ActiveIndex.HOME} />홈
        </BottomLink>
        <BottomLink
          onClick={() => setActiveIndex(ActiveIndex.POST)}
          to="/post"
          $active={activeIndex === ActiveIndex.POST}
        >
          <IcInbox $active={activeIndex === ActiveIndex.POST} />
          비슷
        </BottomLink>
        <BottomLink
          onClick={() => setActiveIndex(ActiveIndex.PROFILE)}
          to="/my"
          $active={activeIndex === ActiveIndex.PROFILE}
        >
          <IcUser $active={activeIndex === ActiveIndex.PROFILE} />내 정보
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
